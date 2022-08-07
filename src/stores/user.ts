import { useFirebase } from "@/lib/firebase";
import { defineStore, type StoreActions } from "pinia";
import { getAuth, signInWithEmailAndPassword, type User } from '@firebase/auth'
import { doc, getDoc, getFirestore } from "@firebase/firestore";

const firebase = useFirebase()
const auth = getAuth(firebase)
const db   = getFirestore(firebase)

export interface Profile {
    name: string
    isSuperUser: boolean
}

export interface UserState {
    user: User | null,
    profile: Profile | null,
    isLoggedIn: boolean
}

const state = (): UserState => ({
    user: null,
    profile: null,
    isLoggedIn: false
})

export const useUserStore = defineStore({
    id: 'user',
    state,
    actions: {
        async loginWithEmailAndPassword(email: string, password: string) {
            try {
                const credential = await signInWithEmailAndPassword(auth, email, password)
                this.user = credential.user
                this.isLoggedIn = true

                // Get the user data
                this.profile = (await getDoc(doc(db, 'users', credential.user.uid))).data() as Profile
            } catch (error) {
                throw error
            }
        },
    }
})