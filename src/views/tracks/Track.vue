<template>
    <div>
        <header role="heading">
            <h1 class="text-4xl font-semibold border-b-2 border-violet-600 pb-2">{{ track.name }}</h1>
        </header>

        <template v-if="track.layouts">
            <h2 class="text-2xl mb-2">Layouts</h2>

            <ul class="bg-white rounded-lg border border-gray-200 w-2/3 mx-auto">
                <li class="px-6 py-2 border-b border-gray-200 w-full" v-for="(layout, id) in track.layouts" :key="id">
                    <h3 class="text-xl">{{layout.name}}</h3>
                </li>
            </ul>
        </template>
    </div>
</template>

<script setup lang="ts">
import { useSimulatorsStore } from '@/stores/sims';
import { useTracksStore } from '@/stores/tracks';
import { onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const sims = useSimulatorsStore()
sims.subscribe()

const { id } = useRoute().params
const tracks = useTracksStore()

tracks.subscribeLayouts(id as string)

const track = tracks.tracks[id as string]


onUnmounted(() => tracks.unsubscribeLayouts(id as string))
</script>