'use client'

import { useTheme } from '../app/context/theme-provider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="text-sm opacity-50 hover:opacity-100 transition-opacity duration-300"
    >
      {theme === 'light' ? 'dark' : 'light'}
    </button>
  )
}
