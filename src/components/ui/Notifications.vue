<template>
    <div>
        <div v-for="(notification, index) in notifications" :key="index">
            <span class="font-bold text-lg" v-if="notification.title">{{ notification.title }}</span>
            <p>{{notification.body}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useNotificationsStore } from '@/stores/notifications.js';

const { notifications } = useNotificationsStore()
</script>