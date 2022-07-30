import { GeoPoint } from '@google-cloud/firestore'

export interface Track {
  name: string
  country: string
  location: GeoPoint | null
}

export interface TracksState {
  tracks: Track[]
}

export const state = (): TracksState => ({
  tracks: [],
})

export const actions = {}
