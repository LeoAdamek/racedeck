export interface Track {
  name: string
  country: string
}

export interface TracksState {
  tracks: Track[]
  updatedAt: Date | null
}

export const state = (): TracksState => ({
  tracks: [],
  updatedAt: null,
})

export const mutations = {
  setTracks(state: TracksState, tracks: Track[]) {
    state.tracks = tracks
    state.updatedAt = new Date()
  },
}
