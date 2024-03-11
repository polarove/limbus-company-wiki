<template>
  <div class="flex-center-col h-75vh">
    <img src="@images/logo.png" class="c-p" @click="toggleTheme" />
    <el-text size="large">宝宝巴士</el-text>
  </div>
  <img src="@images/ego-gift/Blood2C_and_Tears_Gift.webp" />
  <section class="pl-5em pr-5em">
    <img v-for="img in egoGifts" :src="img" />
  </section>
</template>

<script setup lang="ts">
import { toggleTheme } from '../composables/theme'
import { egoGifts } from '@/assets/paths/ego-gifts'

type Pending = null

const state = ref<Pending | boolean>(null)

state.value = null
state.value = true
state.value = false
</script>

<style lang="scss" scoped></style>
