import { useFirebase } from "@/lib/firebase";
import { defineStore } from "pinia";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, type User, type UserCredential } from '@firebase/auth'
import { doc, getDoc, getFirestore } from "@firebase/firestore";
import { ref, type Ref } from "vue";

const firebase = useFirebase(),
    auth = getAuth(firebase),
    db = getFirestore(firebase)

export interface Profile {
    name: string
    isSuperUser: boolean
}

export interface UserState {
    credential: UserCredential | null,
    profile: Profile | null,
}

const state = (): UserState => ({
    credential: null,
    profile: null,
})

let currentUser: Ref<User | null> = ref(null)

onAuthStateChanged(auth, (user) => {
    currentUser.value = user
})

export const useUserStore = defineStore({
    id: 'user',
    state,
    actions: {
        async loginWithEmailAndPassword(email: string, password: string) {
            try {
                this.credential = await signInWithEmailAndPassword(auth, email, password)
                // Get the user data
                this.profile = (await getDoc(doc(db, 'users', this.credential.user.uid))).data() as Profile
            } catch (error) {
                throw error
            }
        },
    },

    getters: {
        user(): Ref<User | null> {
            return currentUser
        }
    }
})