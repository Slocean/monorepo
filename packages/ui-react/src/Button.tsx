import React from 'react'
import { colors, spacing, borderRadius, fontWeight, fontSize } from '@repo/design-system'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick
}) => {
  const variantColors = {
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    warning: colors.warning,
    error: colors.error
  }

  const sizeStyles = {
    sm: {
      padding: `${spacing[2]} ${spacing[4]}`,
      fontSize: fontSize.sm
    },
    md: {
      padding: `${spacing[3]} ${spacing[6]}`,
      fontSize: fontSize.base
    },
    lg: {
      padding: `${spacing[4]} ${spacing[8]}`,
      fontSize: fontSize.lg
    }
  }

  const color = variantColors[variant]

  const buttonStyle: React.CSSProperties = {
    backgroundColor: color[500],
    color: colors.neutral[50],
    padding: sizeStyles[size].padding,
    fontSize: sizeStyles[size].fontSize,
    fontWeight: fontWeight.medium,
    borderRadius: borderRadius.md,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'all 0.2s ease'
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(event)
    }
  }

  return (
    <button style={buttonStyle} disabled={disabled} onClick={handleClick}>
      {children}
    </button>
  )
}
