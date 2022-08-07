import { defineStore } from "pinia";

export interface NotificationState {
    notifications: Notification[]
}

export const state = (): NotificationState => ({
    notifications: []
})

export const useNotificationsStore = defineStore({
    id: 'notifications',
    state,
})