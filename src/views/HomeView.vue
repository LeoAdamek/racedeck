<template>
    <TrackCard v-for="track in tracks.tracks" :key="track.id" :track="track" />
</template>

<script setup lang="ts">
import { useTracksStore } from '@/stores/tracks.js';
import { onUnmounted } from 'vue';
import TrackCard from '../components/tracks/TrackCard.vue';

const tracks = useTracksStore()

tracks.subscribeAll()

onUnmounted(() => tracks.unsubscribe())
</script>