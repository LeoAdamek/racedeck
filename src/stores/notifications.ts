import { useFirebase } from "@/lib/firebase";
import { collection, getFirestore, orderBy, query } from "@firebase/firestore";
import { defineStore } from "pinia";

export interface UserNotification {
    timestamp: Date
    readAt: Date
    title?: string
    body?: string
}

export interface NotificationState {
    notifications: UserNotification[]
}

const db = getFirestore(useFirebase())

const userNotificationsQuery = query(collection(db, 'users', 'ID', 'notifications'), orderBy('timestamp', 'desc'))

export const state = (): NotificationState => ({
    notifications: []
})

export const useNotificationsStore = defineStore({
    id: 'notifications',
    state,
})