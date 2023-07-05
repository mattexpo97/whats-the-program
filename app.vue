<template>
  <NConfigProvider :theme="darkTheme" :theme-overrides="theme">  
    <NuxtLayout class="relative">
      <NMessageProvider>
        <NuxtPage class="min-h-screen" />
        <div class="md:hidden fixed !top-24 -z-1 logo isExactActive">
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

.isExactActive span {
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #8644ff, 0 0 0.5em #8644ff, 0 0 0.1em #8644ff, 0 10px 3px #000;
}
</style>
