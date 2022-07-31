<template>
  <div>
    <h1>Racedeck</h1>

    <pre>{{ tracks }}</pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState('tracks', ['tracks', 'updated'])
  },

  data: () => ({
    unsub: null,
  }),

  async mounted() {
    this.unsub = await this.$store.dispatch('tracks/subscribeToAll') 
  },
})
</script>
