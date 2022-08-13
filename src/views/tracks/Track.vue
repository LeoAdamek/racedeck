<template>
    <div>
        <header role="heading">
            <PageHeading>{{ track.name }}</PageHeading>
        </header>

        <ul class="bg-white rounded-lg border border-gray-200 w-2/3 mx-auto mt-4">
            <li class="px-6 py-2 border-b border-gray-200 w-full" v-for="(layout, id) in track.layouts" :key="id">

                <h3 class="text-xl border-b my-2">{{layout.name}}</h3>

                <div class="flex flex-col justify-between">
                    <div class="flex flex-row justify-between">
                        <span>Length</span>
                        <span>{{ layout.length / 1e3 }} km</span>
                    </div>

                    <div class="flex flex-row justify-between">
                        <span>Corners</span>
                        <span>{{ layout.corners }}</span>
                    </div>
                </div>
            </li>
            <router-link :to="{ name: 'new-layout' }">
                <li class="px-6 py-2 w-full bg-indigo-800 hover:bg-indigo-500 text-white font-semibold rounded-b">
                    <button role="link" class="group relative w-full flex justify-center">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <PlusIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span>
                        New Layout
                    </button>
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useSimulatorsStore } from '@/stores/sims';
import { useTracksStore } from '@/stores/tracks';
import { useUserStore } from '@/stores/user';
import { onUnmounted, ref } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { PlusIcon } from '@heroicons/vue/solid';
import PageHeading from '../../components/ui/typography/PageHeading.vue';

const track = ref()
const tracks = useTracksStore()
const user = useUserStore()

onBeforeRouteUpdate((to, from) => {
    // Unsubscribe from the track we were previously viewing
    tracks.unsubscribeLayouts(from.params.id as string)
    const { id } = to.params 
    track.value = tracks.tracks[id as string]

    // Subscribe to the track we're going to view next
    tracks.subscribeLayouts(id as string)
})

const { id } = useRoute().params
track.value = tracks.tracks[id as string]
tracks.subscribeLayouts(id as string)

const sims = useSimulatorsStore()
sims.subscribe()

onUnmounted(() => tracks.unsubscribeLayouts(id as string))
</script>