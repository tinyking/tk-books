<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const menuItems = computed(() => {
  if (!navigation?.value) return []
  return navigation.value.map((item) => ({
    label: item.title,
    icon: item.icon || item.navigation?.icon,
    to: item.path,
    children: item.children?.map((child) => ({
      label: child.title,
      icon: child.icon || child.navigation?.icon,
      to: child.path,
    })),
  }))
})
</script>

<template>
  <UNavigationMenu
    :items="menuItems"
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
