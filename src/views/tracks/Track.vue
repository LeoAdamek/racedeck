<template>
    <h1>Track {{ id }}</h1>
    <pre>{{ track }}</pre>
    <pre>{{ layouts }}</pre>
</template>

<script setup lang="ts">
import { useFirebase } from '@/lib/firebase';
import { collection, doc, getDoc, getFirestore, onSnapshot } from '@firebase/firestore';
import { inject, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const db = getFirestore(useFirebase())
const { id } = useRoute().params

const docRef = doc(db, 'tracks', id as string)
const track = (await getDoc(docRef)).data()

const layouts: Array<Record<string, any>> = []

const unsubscribe = onSnapshot(collection(db, `tracks/${id}/layouts`), (qs) => {
    qs.forEach(doc => {
        layouts.push(doc.data())
    })
})

onUnmounted( () => {
    if (unsubscribe) unsubscribe()
})

</script>