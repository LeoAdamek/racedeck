<template>
    <div>
        <PageHeading>Add Layout: {{ track.name }}</PageHeading>

        <form class="w-2/3 mx-auto mt-4" @submit.prevent="createLayout()">
            <div class="rounded-md p-2 shadow-sm border w-full space-y-4 flex flex-col">
                
                <div>
                    <label class="sr-only" for="layout-slug">Slug</label>
                    <input id="layout-slug" type="text" v-model="fields.slug" name="layout[slug]" placeholder="Slug *"
                        class="appearance-none form-input p-3 border rounded w-full active:ring active:ring-indigo-700 active:ring-offset-2" />
                </div>

                <div>
                    <label class="sr-only" for="layout-name">Name</label>
                    <input id="layout-name" type="text" v-model="fields.name" name="layout[name]" placeholder="Name *"
                        class="appearance-none form-input p-3 border rounded w-full active:ring active:ring-indigo-700 active:ring-offset-2" />
                </div>

                <div>
                    <label class="sr-only" for="layout-length">Length</label>
                    <input id="layout-length" type="number" step="1" min="1" v-model.number="fields.length" length="layout[length]" placeholder="Length *"
                        class="appearance-none form-input p-3 border rounded w-full active:ring active:ring-indigo-700 active:ring-offset-2" />
                </div>

                <div>
                    <label class="sr-only" for="layout-corners">Corners</label>
                    <input id="layout-corners" type="number" step="1" min="1" v-model.number="fields.corners" corners="layout[corners]" placeholder="Corners *"
                        class="appearance-none form-input p-3 border rounded w-full active:ring active:ring-indigo-700 active:ring-offset-2" />
                </div>

                <div>
                    <button type="submit" @click="createLayout()"
                        class="group relative w-full flex justify-center py-2 px-4 
                               border border-transparent text-sm font-medium rounded-md 
                               text-white bg-indigo-700 hover:bg-indigo-600 
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
import { useRoute } from 'vue-router';
import PageHeading from '@/components/ui/typography/PageHeading.vue';

const fields = reactive({
    slug: '',
    name: '',
    corners: null,
    length: null
})

const { id } = useRoute().params
const track = useTracksStore().tracks[id as string]

const $emit = defineEmits(['create-layout'])

async function createLayout() {
    $emit('create-layout', fields)
}
</script>