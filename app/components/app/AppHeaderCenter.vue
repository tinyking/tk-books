<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UNavigationMenu
    :items="navigation"
    class="hidden lg:flex"
  />
  <UContentSearchButton
    class="w-full lg:hidden"
    variant="soft"
    :ui="{
      leadingIcon: 'size-4 mr-1',
    }"
  />
</template>
