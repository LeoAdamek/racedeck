import { useFirebase } from "@/lib/firebase";
import { defineStore, type StoreActions } from "pinia";
import { getAuth, signInWithEmailAndPassword, type User } from '@firebase/auth'
import { doc, getDoc, getFirestore } from "@firebase/firestore";
import { UserAddIcon } from "@heroicons/vue/outline";

const firebase = useFirebase()
const auth = getAuth(firebase)
const db   = getFirestore(firebase)

export interface Profile {
    name: string
    isSuperUser: boolean
}

export interface UserState {
    profile: Profile | null,
}

const state = (): UserState => ({
    profile: null,
})

export const useUserStore = defineStore({
    id: 'user',
    state,
    persist: {
        enabled: true,
    },
    actions: {
        async loginWithEmailAndPassword(email: string, password: string) {
            try {
                const credential = await signInWithEmailAndPassword(auth, email, password)
                // Get the user data
                this.profile = (await getDoc(doc(db, 'users', credential.user.uid))).data() as Profile
            } catch (error) {
                throw error
            }
        },
    },

    getters: {
        isLoggedIn(): boolean {
            if (auth.currentUser === null) return false
            return !auth.currentUser.isAnonymous
        },

        user(): User | null {
            return auth.currentUser
        }
    }
})