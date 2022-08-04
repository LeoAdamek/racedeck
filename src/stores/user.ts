import { defineStore } from "pinia";

export interface UserState {
    isLoggedIn: boolean
}

export const useUserStore = defineStore({
    id: 'user',
    state: (): UserState => ({
        isLoggedIn: false,
    })
})