<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const contentNavVariants = useUIConfig('contentNavigation')

const sectionNav = computed(() => {
  if (!navigation?.value) return []
  const section = navigation.value.find(item =>
    item.path === '/yi-zhang-tu' || item.path.startsWith('/yi-zhang-tu/'),
  )
  return section?.children || []
})
</script>

<template>
  <UMain>
    <UContainer>
      <UPage>
        <template #left>
          <UPageAside>
            <UContentNavigation
              :highlight="contentNavVariants.highlight ?? true"
              :highlight-color="contentNavVariants.highlightColor"
              :variant="contentNavVariants.variant ?? 'link'"
              :color="contentNavVariants.color"
              :navigation="sectionNav"
            />
          </UPageAside>
        </template>
        <slot />
      </UPage>
    </UContainer>
  </UMain>
</template>
