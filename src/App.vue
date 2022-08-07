<template>
<div class="min-h-full">
    <NavigationBar />
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <slot name="title">
          <h1 class="text-2xl font-bold mx-3">Page Title</h1>
        </slot>
      </div>
    </header>
    <Notifications />
    <main role="main">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-min-96 p-4">
            <Suspense>
              <RouterView />
            </Suspense>
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script setup>
import NavigationBar from '@/components/ui/NavigationBar.vue'
import Notifications from './components/ui/Notifications.vue'
</script>