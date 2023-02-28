/*
 * This code is part of Vue-Compositions (https://github.com/PrefectHQ/vue-compositions),
 * an extensive and open Vue composition library that is widely used in the development of
 * Prefect's open source UI.
 */

import { getCurrentInstance, isRef, onUnmounted, reactive, ref, unref, watch, type Ref } from 'vue'

export function useMedia(query: Ref<string> | string): Ref<boolean> {
  let mediaQuery = window.matchMedia(unref(query))
  const matches = ref(mediaQuery.matches)
  let unwatch: ReturnType<typeof watch> | undefined

  function updateMatches(event: MediaQueryListEvent): void {
    matches.value = event.matches
  }

  mediaQuery.addEventListener('change', updateMatches)

  if (isRef(query)) {
    unwatch = watch(query, () => {
      mediaQuery.removeEventListener('change', updateMatches)
      mediaQuery = window.matchMedia(unref(query))
      mediaQuery.addEventListener('change', updateMatches)
    })
  }

  if (getCurrentInstance()) {
    onUnmounted(() => {
      mediaQuery.removeEventListener('change', updateMatches)

      if (unwatch) {
        unwatch()
      }
    })
  }

  return matches
}

function tryMatchMedia(media: string): Ref<boolean> | boolean {
  try {
    return useMedia(media)
  } catch {
    return false
  }
}

const sm = tryMatchMedia('(min-width: 640px)')
const md = tryMatchMedia('(min-width: 768px)')
const lg = tryMatchMedia('(min-width: 1024px)')
const xl = tryMatchMedia('(min-width: 1280px)')
const xxl = tryMatchMedia('(min-width: 1536px)')
const hover = tryMatchMedia('(hover: hover)')

export const media = reactive({
  sm,
  md,
  lg,
  xl,
  xxl,
  hover
})
