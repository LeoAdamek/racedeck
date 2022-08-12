<template>
    <div class="p-2 appearance-none relative block border w-full rounded-none first:rounded-t-md hover:text-gray-400">
        <router-link :to="{ name: 'track', params: { id: props.track.id }}">
            <div class="row flex justify-between">
                <h2 class="text-lg font-semibold">{{props.track.name}}</h2>
                <h2 class="font-semibold font-mono p-1 bg-purple-800 text-white rounded-md">{{props.track.country}}</h2>
            </div>
        </router-link>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['track'])
</script>