<template>
    <NavLink v-if="!user.isLoggedIn" to="/login">Log In</NavLink>
    <Menu v-else>
        <MenuButton>
            <span class="text-white font-semibold p-2 bg-black bg-opacity-80 rounded-md">
                <ChevronDownIcon class="h-3 w-3 text-gray-400" />
                {{ user.profile?.name }}
            </span>
        </MenuButton>
        <MenuItems>
            <MenuItem>
                <NavLink to="#">TEST</NavLink>
            </MenuItem>
        </MenuItems>
    </Menu>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/outline';
import NavLink from './NavLink.vue';

const user = useUserStore()
</script>