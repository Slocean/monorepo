<script setup lang="ts">
import { computed } from 'vue'
import { colors, spacing, borderRadius, fontWeight, fontSize } from '@repo/design-system'

interface Props {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonStyles = computed(() => {
  const variantColors = {
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
  }

  const sizeStyles = {
    sm: {
      padding: `${spacing[2]} ${spacing[4]}`,
      fontSize: fontSize.sm,
    },
    md: {
      padding: `${spacing[3]} ${spacing[6]}`,
      fontSize: fontSize.base,
    },
    lg: {
      padding: `${spacing[4]} ${spacing[8]}`,
      fontSize: fontSize.lg,
    },
  }

  const color = variantColors[props.variant]

  return {
    backgroundColor: color[500],
    color: colors.neutral[50],
    padding: sizeStyles[props.size].padding,
    fontSize: sizeStyles[props.size].fontSize,
    fontWeight: fontWeight.medium,
    borderRadius: borderRadius.md,
    border: 'none',
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    opacity: props.disabled ? 0.5 : 1,
    transition: 'all 0.2s ease',
  }
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    :style="buttonStyles"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
