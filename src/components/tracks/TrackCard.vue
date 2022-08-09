<template>
    <div class="mb-4 p-2 border-2 rounded-md">
        <router-link :to="`/tracks/${props.track.id}`">
            <div class="row flex justify-between">
                <h2 class="text-lg font-bold">{{props.track.name}}</h2>
                <h2 class="font-semibold font-mono p-1 bg-purple-800 text-white rounded-md">{{props.track.country}}</h2>
            </div>
        </router-link>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['track'])
</script>