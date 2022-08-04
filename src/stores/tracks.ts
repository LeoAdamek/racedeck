import { defineStore } from "pinia";

export interface TrackStoreState {
    tracks: object[]
    updatedAt: Date | null
}

export const useTracksStore = defineStore({
    id: 'tracks',
    state: (): TrackStoreState => ({
        tracks: [],
        updatedAt: null,
    }),

    actions: {
        update() {
            this.updatedAt = new Date()
        }
    }
})