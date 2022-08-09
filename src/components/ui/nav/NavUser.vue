<template>
    <NavLink v-if="!user.isLoggedIn" to="/login">
        <LockClosedIcon class="w-5 h-5" />
        Log In
    </NavLink>
    
    <span v-else class="text-white">{{ displayName }}</span>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { ChevronDownIcon } from '@heroicons/vue/outline';
import { LockClosedIcon } from '@heroicons/vue/solid';
import NavLink from './NavLink.vue';

const user = useUserStore()

const displayName = user.user?.displayName || user.user?.email || ''
</script>