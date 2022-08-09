<template>
    <div>
        <header role="heading">
            <h1 class="text-4xl font-semibold border-b-2 border-violet-600 pb-2">{{ track.name }}</h1>
        </header>
        <pre class="mx-auto w-1/2 m-4 p-3 border-solid border-indigo-400 border-2 rounded-md shadow">{{ track }}</pre>


        <template v-if="layouts">
            <h2 class="text-2xl mb-2">Layouts</h2>

            <ul class="bg-white rounded-lg border border-gray-200 w-2/3 mx-auto">
                <li class="px-6 py-2 border-b border-gray-200 w-full" v-for="(layout, idx) in layouts" :key="idx">
                    <h3 class="text-xl">{{layout.name}}</h3>
                </li>
            </ul>
        </template>
    </div>
</template>

<script setup lang="ts">
import { useFirebase } from '@/lib/firebase';
import { useSimulatorsStore } from '@/stores/sims';
import type { Track } from '@/stores/tracks';
import { collection, doc, getDoc, getDocs, getFirestore } from '@firebase/firestore';
import { useRoute } from 'vue-router';

const db = getFirestore(useFirebase())

const sims = useSimulatorsStore()
sims.subscribe()

const { id } = useRoute().params
const docRef = doc(db, 'tracks', id as string)

const track = (await getDoc(docRef)).data() as Track
const layouts = (await getDocs(collection(db, 'tracks', id as string, 'layouts'))).docs.map( d => d.data() )


</script>