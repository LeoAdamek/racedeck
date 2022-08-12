<template>
    <header role="heading"><span class="font-bold text-3xl">Add Track</span></header>

    <form @submit.prevent="createTrack()">
        <div class="flex flex-col">
            <div class="mt-4">
                <label class="sr-only" for="track-slug">Slug</label>
                <input id="track-slug" type="url" v-model="fields.slug" name="track[slug]" placeholder="Slug"
                    class="appearance-none form-input p-3 border rounded w-full active:ring active:ring-indigo-700 active:ring-offset-2" />
            </div>

            <div class="mt-4">
                <label for="track-name" class="sr-only">Name</label>
                <input type="text" id="track-name" v-model="fields.name" name="track[name]" placeholder="Name"
                    class="appearance-none form-input p-3 border rounded w-full active:ring active:ring-indigo-700 active:ring-offset-2" />
            </div>

            <div class="mt-4">
                <label for="track-country" class="sr-only">Country</label>
                <input type="text" maxlength="2" v-model="fields.country" name="trac[country]" id="track-country"
                    placeholder="Country Code"
                    class="appearance-none form-input p-3 border rounded w-full active:ring active:ring-indigo-700 active:ring-offset-2" />
            </div>

            <div class="mt-4">
                <button type="submit" @click="createTrack()"
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Create Track
                </button>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import { useFirebase } from '@/lib/firebase';
import { getFirestore, setDoc, doc } from '@firebase/firestore';
import { ref } from 'vue'

const $emit = defineEmits(['create-track'])
const db = getFirestore(useFirebase())

const fields = ref({
    slug: '',
    name: '',
    country: ''
})


async function createTrack() {
    await setDoc(doc(db, 'tracks', fields.value.slug), fields.value) 
    $emit('create-track', fields.value)
}

</script>