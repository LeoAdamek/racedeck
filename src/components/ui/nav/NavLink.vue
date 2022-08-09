<template>
    <router-link :to="to">
        <span class="flex items-center ml-3 p-2 rounded-md bg-black bg-opacity-60 text-white">
            <slot />
        </span>
    </router-link>
</template>

<script setup lang="ts">
const { to } = defineProps(['to'])
</script>
