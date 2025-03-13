/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_I18_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 