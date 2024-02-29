<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ $colorMode.preference }}
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="theme in $colorMode">{{
          $colorMode.value
        }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
const themes = [
  {
    name: 'dark',
    disabled: false
  },
  {
    name: 'dark',
    disabled: false
  },
  {
    name: 'limbus-company',
    disabled: false
  }
]
</script>

<style lang="scss" scoped></style>
