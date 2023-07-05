<template>
  <NConfigProvider :theme="darkTheme" :theme-overrides="theme">  
    <NuxtLayout class="relative">
      <NMessageProvider>
        <NuxtPage class="min-h-screen" />
        <div class="md:hidden fixed !top-24 -z-1 logo">
          <span class="!text-[60px] !leading-10">
            What's the program?
          </span>
        </div>
      </NMessageProvider>
    </NuxtLayout>
  </NConfigProvider>
</template>

<script setup>
import { NMessageProvider, NConfigProvider, darkTheme } from 'naive-ui'

const theme = {
  common: {
    primaryColor: '#8644ff',
  },
}
</script>

<style lang="scss">
  @import '~/assets/scss/app.scss';

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
