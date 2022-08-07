<template>
    <router-link :to="to">
        <span class="ml-3 p-2 rounded-md bg-black bg-opacity-75 text-white">
            <slot />
        </span>
    </router-link>
</template>

<script setup lang="ts">
const { to } = defineProps(['to'])
</script>