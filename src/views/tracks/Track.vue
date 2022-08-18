<template>
    <div v-if="loaded">
        <header role="heading">
            <PageHeading>{{ track?.name }}</PageHeading>
        </header>

        <ul v-if="track?.layouts" class="grid grid-cols-2 gap-2 items-stretch mt-2">
            <li v-for="(layout, id) in track?.layouts" :key="id"
                class="rounded border shadow-sm">
                <h2 class="text-xl font-semibold p-2 border-b">{{ layout.name }}</h2>
                <div class="m-2 p-2 w-10/12 mx-auto" v-if="layout.map">
                    <img :src="layout.map.downloadLink" />
                </div>
                <div class="p-2 grid grid-rows-2">
                    <div class="flex flex-row justify-between">
                        <span class="font-semibold">Length</span>
                        <span class="text-right">{{ (layout.length / 1000).toFixed(3) }} km</span>
                    </div>

                    <div class="flex flex-row justify-between">
                        <span class="font-semibold">Corners</span>
                        <span class="text-right">{{ layout.corners }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useSimulatorsStore } from '@/stores/sims';
import { type Track, useTracksStore } from '@/stores/tracks';
import { useUserStore } from '@/stores/user';
import { computed, onUnmounted, ref } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { PlusIcon } from '@heroicons/vue/solid';
import PageHeading from '../../components/ui/typography/PageHeading.vue';

const track = ref<Track>()
const tracks = useTracksStore()

tracks.subscribeAll()

const user = useUserStore()

onBeforeRouteUpdate(async (to, from) => {
    // Unsubscribe from the track we were previously viewing
    tracks.unsubscribeLayouts(from.params.id as string)
    const { id } = to.params 
    track.value = tracks.tracks[id as string]

    // Subscribe to the track we're going to view next
    await tracks.subscribeLayouts(id as string)
})

const { id } = useRoute().params
track.value = tracks.tracks[id as string]
await tracks.subscribeLayouts(id as string)

const sims = useSimulatorsStore()
sims.subscribe()

onUnmounted(() => tracks.unsubscribeLayouts(id as string))

const loaded = computed( () => {
    return track.value !== undefined && track.value.layouts !== undefined
})
</script>