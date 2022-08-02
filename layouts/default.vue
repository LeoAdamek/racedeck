<template>
  <div class="min-h-full">
    <main role="main">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class DefaultLayout extends Vue {}
</script>
