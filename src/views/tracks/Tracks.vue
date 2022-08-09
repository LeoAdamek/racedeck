<template>
    <div class="flex lg:flex-row sm:flex-col justify-between">
        <div class="border rounded-lg lg:w-1/3 sm:w-full">
            <TrackCard v-for="track in tracks.tracks" :key="track.id" :track="track" />
        </div>

        <div class="p-4 lg:ml-4 lg:w-2/3 sm:w-full">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTracksStore } from '@/stores/tracks.js';
import { onUnmounted } from 'vue';
import TrackCard from '@/components/tracks/TrackCard.vue';

const tracks = useTracksStore()

tracks.subscribeAll()

onUnmounted(() => tracks.unsubscribe())
</script>