<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const menuItems = computed(() => {
  const items = navigation?.value
    ? navigation.value
        .filter((item) => item.path !== '/yi-zhang-tu')
        .map((item) => ({
          label: item.title,
          icon: item.icon || item.navigation?.icon,
          to: item.path,
          children: item.children?.map((child) => ({
            label: child.title,
            icon: child.icon || child.navigation?.icon,
            to: child.path,
          })),
        }))
    : []

  items.push({
    label: '一张图系列',
    icon: 'i-lucide-image',
    to: '/yi-zhang-tu',
  })

  return items
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
