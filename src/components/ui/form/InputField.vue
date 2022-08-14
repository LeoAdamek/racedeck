<template>
    <div class="mt-4">
        <label class="sr-only" for="field-value">
            <slot />
        </label>

        <div class="relative">
            <CheckCircleIcon v-if="valid" 
                class="h-8 w-8 bg-white text-green-700 
                absolute top-1/2 transform -translate-y-1/2 inset-y-0 right-3" />

            <XCircleIcon v-if="invalid" 
                class="h-8 w-8 bg-white text-red-700
                       absolute top-1/2 transform -translate-y-1/2 inset-y-0 right-3" />

            <input id="field-value" :type="type" v-model="modelValue.$model" :placeholder="placeholder"
                @blur="modelValue.$touch()"
                class="appearance-none form-input p-3 border rounded w-full active:ring  active:ring-offset-2"
                :class="validationClasses"
                />
        </div>
        
        <ul v-if="invalid" class="mt-2 p-3 text-red-700">
            <li v-for="error in modelValue.$errors" :key="error.$uid">{{ error.$message }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
/**
 * Validated input field.
 *  
 **/

import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/outline';
import { computed } from '@vue/reactivity';

export interface Props {
    modelValue: Record<string, any>
    type: string
    placeholder?: string
}

let { modelValue, type, placeholder } = defineProps<Props>()

defineEmits(['update:modelValue'])

const invalid = computed(() => modelValue.$anyDirty && modelValue.$invalid)
const valid   = computed(() => modelValue.$anyDirty && !modelValue.$invalid)

const validationClasses = computed(() => {
    if ( modelValue.$anyDirty ) {
        if ( modelValue.$invalid ) {
            return 'border-2 border-red-700 active:ring-red-700'
        }

        return 'border-2 border-green-700 active:ring-green-700'
    }

    return 'active:ring-indigo-700'
})

</script>