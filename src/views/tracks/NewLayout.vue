<template>
    <form class="w-2/3 mx-auto mt-4">
        <div class="rounded-md shadow-sm -space-y-px w-full">
            <div>
                <label class="sr-only" for="layout-slug">Slug</label>
                <input id="layout-slug" name="layout[slug]" type="url" v-model="fields.slug" placeholder="Slug"
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 rounded-t-md" />
            </div>

            <div>
                <label class="sr-only" for="layout-name">Name</label>
                <input id="layout-name" name="layout[name]" type="text" v-model="fields.name" placeholder="Name"
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600" />
            </div>

            <div>
                <label class="sr-only" for="layout-length">Length (m)</label>
                <input id="layout-length" name="layout[length]" type="text" v-model="fields.length" placeholder="Length"
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600" />
            </div>

            <div>
                <label class="sr-only" for="layout-corners">Corners</label>
                <input id="layout-corners" name="layout[corners]" type="text" v-model="fields.corners" placeholder="Corners"
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-600 rounded-b-md" />
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fields = ref({
    slug: '',
    name: '',
    corners: null,
    length: null
})
</script>