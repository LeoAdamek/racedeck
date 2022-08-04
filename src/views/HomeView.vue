<template>
    <pre>{{ tracks.tracks }}</pre>
    <small>Last Updated: {{ tracks.updatedAt }}</small>

    <button role="button" class="text-white from-purple-900 bg-gradient-to-tr bg-purple-600 m-3 p-2 rounded-md shadow-md" @click="update()">Update</button>
</template>

<script setup lang="ts">

import { useTracksStore } from '@/stores/tracks'

const tracks = useTracksStore()

function update() {
    tracks.update()
}
</script>