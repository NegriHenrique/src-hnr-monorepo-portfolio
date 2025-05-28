import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  "./shared-ui/vitest.config.ts",
  "./mfes/focus/vite.config.ts",
  "./mfes/geogrid/vite.config.ts",
  "./mfes/bg-remover/vite.config.ts"
])
