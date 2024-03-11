<template>
  <nuxt-page />
</template>

<script setup lang="ts">
useSeoMeta({
  title: '中文维基百科 - 边狱公司',
  description: '边狱公司中文维基'
})
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/logo.png'
    }
  ]
})
</script>

<style lang="scss" scoped></style>
