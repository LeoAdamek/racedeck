import { useFirebase } from "@/lib/firebase";
import { collection, getFirestore, onSnapshot } from "@firebase/firestore";
import { defineStore } from "pinia";

export interface Simulator {
    name: string
    platforms: string[]
}

export interface SimulatorsState {
    simulators: Record<string, Simulator>
    _unsubscribe: Function | null
}

const db = getFirestore(useFirebase())

const state = (): SimulatorsState => ({
    simulators: {},
    _unsubscribe: null,
})

export const useSimulatorsStore = defineStore({
    id: 'simulators',
    state,
    actions: {
        subscribe() {
            if (this._unsubscribe) return

            this.unsubscribe = onSnapshot(collection(db, 'sims'), qs => {
                qs.forEach(doc => {
                    this.simulators[doc.id] = doc.data() as Simulator
                })
            })
        },

        unsubscribe() {
            if (this._unsubscribe) this._unsubscribe()
        }
    }
})