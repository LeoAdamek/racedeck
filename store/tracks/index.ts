import { GeoPoint, QuerySnapshot, QueryDocumentSnapshot } from '@google-cloud/firestore'

export interface Track {
  name: string
  country: string
  location: GeoPoint | null
}

export interface TracksState {
  updated: Date | null
  tracks: Track[]
}

export const state = (): TracksState => ({
  tracks: [],
  updated: null,
})

export const mutations = {
  setTracks(state: TracksState, tracks: Track[]) {
    state.tracks = tracks
    state.updated = new Date()
  }
}

