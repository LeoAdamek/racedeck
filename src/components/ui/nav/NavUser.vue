<template>
    <NavLink v-if="!isLoggedIn" to="/login">
        <LockClosedIcon class="w-5 h-5" />
        Log In
    </NavLink>
    
    <span v-else class="text-white">{{ displayName }}</span>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { LockClosedIcon } from '@heroicons/vue/solid';
import NavLink from './NavLink.vue';

const { user } = useUserStore()

const isLoggedIn = () => user.value !== null && !user.value.isAnonymous

const displayName = user.value?.email
</script>