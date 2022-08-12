<template>
    <div class="flex lg:flex-row sm:flex-col justify-between">
        <div class="lg:w-1/3 sm:w-full flex-col -space-y-px">
            <TrackCard v-for="track in tracks.tracks" :key="track.id" :track="track" />
            <router-link :to="{ name: 'tracks-new' }" class="appearance-none rounded-none relative block border rounded-b-md p-2">
                <span class="text-lg font-semibold">Add Track</span>
            </router-link>
        </div>

        <div class="p-4 lg:ml-4 lg:w-2/3 sm:w-full">
            <router-view v-slot="{ Component } ">
                <transition name="fade">
                    <component :is="Component" />
                </transition>
            </router-view>
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