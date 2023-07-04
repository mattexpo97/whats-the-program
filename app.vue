<template>
  <NuxtLayout>
    <NMessageProvider>
      <NuxtPage class="min-h-screen" />
    </NMessageProvider>
  </NuxtLayout>
</template>

<script setup>
import { NMessageProvider } from 'naive-ui'
</script>

<style lang="scss">
  @import '~/assets/scss/app.scss';
</style>
