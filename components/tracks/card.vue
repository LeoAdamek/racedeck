<template>
  <span>Hello {{ name }}</span>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class TrackCard extends Vue {
  @Prop() readonly name!: string
}
</script>
