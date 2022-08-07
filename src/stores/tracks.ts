import { useFirebase } from "@/lib/firebase";
import { collection, getFirestore, onSnapshot, type GeoPoint } from "@firebase/firestore";
import { defineStore } from "pinia";

export interface Track {
    id: string
    name: string
    country: string
    location?: GeoPoint
    opened?: number
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
                    querySnapshot.forEach((doc) => {
                        const track = doc.data() as Track
                        track.id = doc.id
                        this.tracks[track.id] = track
                    })
                    this.updatedAt = new Date()
                },

                (error) => {
                    // TODO: Dispatch the error to a global FB error handler.
                    console.error(`Firebase Error: ${error.message}`, error)
                }
            )
        },

        unsubscribe() {
            if (this.unsubscribe) this.unsubscribe()
        }
    }
})
