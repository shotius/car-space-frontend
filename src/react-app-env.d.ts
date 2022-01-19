/// <reference types="react-scripts" />

// type intelisences for env file
interface ImportMetaEnv {
  readonly VITE_CURRENCY_API: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}