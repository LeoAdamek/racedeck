import { useFirebase } from "@/lib/firebase";
import { collection, doc, DocumentReference, DocumentSnapshot, getFirestore, onSnapshot, QueryDocumentSnapshot, QuerySnapshot, type GeoPoint } from "@firebase/firestore";
import { defineStore } from "pinia";

export interface Layout {
    name: string
    length: number
    corners: number
    surface?: string[]
    simulators?: DocumentReference[]
}

export interface Track {
    id: string
    name: string
    country: string
    location?: GeoPoint
    opened?: number
    layouts?: Record<string, Layout>
    layoutsSubscription?: Function
}

export interface TrackStoreState {
    tracks: Record<string, Track>
    updatedAt: Date | null
    unsubscribe: Function | null
}

const db = getFirestore(useFirebase())

const state =  (): TrackStoreState => ({
    tracks: {},
    updatedAt: null,
    unsubscribe: null,
})

export const useTracksStore = defineStore({
    id: 'tracks',
    state,
    actions: {
        subscribeAll() {
            this.unsubscribe = onSnapshot(
                collection(db, 'tracks'), 
                (querySnapshot) => {
                    querySnapshot.forEach((doc: DocumentSnapshot) => {
                        
                        if (!doc.exists()) {
                            console.log(`Track ${doc.id} deleted`)
                            delete this.tracks[doc.id]
                        } else {
                            const track = doc.data() as Track
                            track.id = doc.id
                            this.tracks[track.id] = track
                        }

                    })
                    this.updatedAt = new Date()
                },

                (error) => {
                    // TODO: Dispatch the error to a global FB error handler.
                    console.error(`Firebase Error: ${error.message}`, error)
                }
            )
        },

        /**
         * Subscribe to the layouts for a track
         * @param id Track ID
         */
        subscribeLayouts(id: string) {
            const ref = collection(db, 'tracks', id, 'layouts')
            
            if (!this.tracks[id]) return

            this.tracks[id].layouts ||= {}

            this.tracks[id].layoutsSubscription = onSnapshot(ref, (qs: QuerySnapshot) => {
                qs.forEach((doc: QueryDocumentSnapshot) => {
                    this.tracks[id].layouts![doc.id] = doc.data() as Layout
                })
            })
        },
        
        /**
         * Unsubscribe from the layouts to a track
         * @param id 
         */
        unsubscribeLayouts(id: string) {
            const { layoutsSubscription } = this.tracks[id]
            if (layoutsSubscription ) { 
                layoutsSubscription()
                this.tracks[id].layoutsSubscription = undefined
            }
        },

        unsubscribe() {
            if (this.unsubscribe) this.unsubscribe()
        }
    }
})
