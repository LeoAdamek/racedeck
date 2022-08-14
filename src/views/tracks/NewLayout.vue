<template>
    <div>
        <PageHeading>Add Layout: {{ track.name }}</PageHeading>

        <form class="w-2/3 mx-auto mt-4" @submit.prevent="createLayout()">
            <div class="rounded-md p-2 shadow-sm border w-full space-y-4 flex flex-col">
                <InputField required v-model="$v.slug" type="text" placeholder="Slug *">Slug</InputField>
                <InputField required v-model="$v.name" type="text" placeholder="Name *">Name</InputField>
                <InputField required v-model="$v.length" type="number" placeholder="Length (m)">Length</InputField>
                <InputField required v-model="$v.corners" type="number" placeholder="Corners *">Corners</InputField>
                <InputField v-model="$v.opened" type="number" placeholder="Year Opened">Year Opened</InputField>
                <InputField v-model="$v.closed" type="number" placeholder="Year Closed">Year Closed</InputField>

                <div>
                    <button type="submit" @click="createLayout()" 
                        :disabled="$v.$invalid || !$v.$anyDirty"
                        class="group relative w-full flex justify-center py-2 px-4 
                               border border-transparent text-sm font-medium rounded-md 
                               text-white bg-indigo-700 hover:bg-indigo-600 
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                               disabled:bg-indigo-200">
                        Create Layout
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useTracksStore } from '@/stores/tracks';
import { useRoute, useRouter } from 'vue-router';
import { required, minLength, maxLength, minValue, integer, numeric, helpers, maxValue } from '@vuelidate/validators';
import PageHeading from '@/components/ui/typography/PageHeading.vue';
import InputField from '@/components/ui/form/InputField.vue';
import useVuelidate from '@vuelidate/core';
import { computed } from '@vue/reactivity';
import { doc, getFirestore, setDoc } from '@firebase/firestore';
import { useFirebase } from '@/lib/firebase';

const fields = reactive({
    slug: '',
    name: '',
    corners: null,
    length: null,
    opened: null,
    closed: null,
})

const urlSafe = helpers.withMessage("Must be a URL-safe value", helpers.regex(/^[a-z0-9][a-z0-9\-]*$/))

const rules = computed(() => {
    const currentYear: number = (new Date).getUTCFullYear()

    return {
        slug: { required, minLength: minLength(3), maxLength: maxLength(64), urlSafe },
        name: { required, minLength: minLength(3), maxLength: maxLength(128) },
        length: { required, numeric, integer, minValue: minValue(1) },
        corners: { required, numeric, integer, minValue: minValue(0) },
        opened: { numeric, integer, maxValue: maxValue(currentYear) },
        closed: { 
            numeric, 
            integer, 
            maxValue: maxValue(currentYear),
            minValue: minValue(fields.opened || currentYear),
        },
    }
})

const { id } = useRoute().params
const track = useTracksStore().tracks[id as string]

const $emit = defineEmits(['create-layout'])

const $v = useVuelidate(rules, fields)

async function createLayout() {
    $emit('create-layout', fields)
    const db = getFirestore(useFirebase())

    // Attempt to create the layout
    await setDoc(doc(db, 'tracks', id as string, 'layouts', fields.slug), fields)

    useRouter().addRoute({ name: 'track', params: { id } })
}
</script>