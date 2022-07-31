
/**
 * Subscribe to all tracks
 * @param {Function} commit
 * @returns Promise<Function>
 */
export async function subscribeToAll({ commit }) {
    const unsubscribe = this.$fire.firestore.collection('tracks').onSnapshot(snapshot => {
        const tracks = snapshot.docs.map(doc => doc.data())
        commit('setTracks', tracks)
    })

    return unsubscribe
}