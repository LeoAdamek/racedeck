<template>
    <div class="flex justify-center items-center">
        <div class="shadow rounded-md min-h-60 align-middle p-4 w-1/3">
            <h2 class="text-lg font-bold mb-2">Log In</h2>
            <div class="flex justify-center items-center flex-col">
                <form @submit.prevent="login()" class="w-full">
                    <div class="rounded-md shadow-sm -space-y-px w-full">
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autocomplete="email" required
                                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                v-model="email" 
                                placeholder="Email address" />
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input id="password" name="password" type="password" autocomplete="current-password"
                                v-model="password"
                                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password" />
                        </div>
                    </div>
                    <div class="mt-4 w-full">
                        <button type="submit"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                    aria-hidden="true" />
                            </span>
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { useUserStore } from '@/stores/user.js';
import { LockClosedIcon } from '@heroicons/vue/solid'
import { useRouter } from 'vue-router';

const user = useUserStore()
const $emit = defineEmits(['login-attempt'])
const $router = useRouter()

const { email, password } = toRefs({ email: '', password: '' })

async function login() {
    $emit('login-attempt', { email })
    try {
        const u = await user.loginWithEmailAndPassword(email.value, password.value)
        $router.push('/')
    } catch(error) {
        console.error('Login Error', { error })
    }
}
</script>
