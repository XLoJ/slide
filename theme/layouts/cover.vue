<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    default: '',
  },
})

const style = computed(() => handleBackground(props.background, true))
</script>

<template>
  <div class="slidev-layout cover" :style="style">
    <div class="my-auto w-full">
      <slot />
    </div>
    <!-- <img src="/njust.png" class="absolute w-16 left-16 top-10"> -->
    <img src="/cse.png" class="absolute w-48 right-8 top-6">
  </div>
</template>
