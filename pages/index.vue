<template>
  <TrackCard name="test" />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import TrackCard from '~/components/tracks/card.vue'

@Component({
  components: { TrackCard },
})
export default class Index extends Vue {}
</script>
