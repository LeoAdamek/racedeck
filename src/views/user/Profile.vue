<template>
    <pre>{{ user.user }}</pre>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';

const user = useUserStore()
</script>