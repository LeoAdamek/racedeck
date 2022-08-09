<template>
  <nav role="navigation" class="w-full h-20 bg-gradient-to-r from-indigo-800 via-cyan-400 to-teal-400">
    <div class="max-w-7xl h-full mx-auto flex flex-row justify-between">
      <div class="flex flex-row items-center justify-start">
        <router-link to="/">
          <h2 class="text-white font-bold text-3xl mx-4">Racedeck</h2>
        </router-link>
        <NavLink to="/tracks">Tracks</NavLink>
        <NavLink to="/cars">Cars</NavLink>
      </div>

      <div class="flex flex-row items-center justify-end">
        <Notifications />
        <NavUser />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import NavLink from "./nav/NavLink.vue";
import NavUser from "./nav/NavUser.vue";
import Notifications from "./Notifications.vue";
</script>