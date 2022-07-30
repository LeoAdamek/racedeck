<template>
  <div>
    <h1>Racedeck</h1>

    <pre>{{ tracks }}</pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default class Tracks extends Vue {
  readonly tracks = this.$fire.firestore.collection('tracks')
}
</script>
