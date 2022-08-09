<template>
  <div class="min-h-full">
    <NavigationBar />
    <main role="main">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <Suspense>
            <RouterView />
          </Suspense>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import NavigationBar from '@/components/ui/NavigationBar.vue'
</script>