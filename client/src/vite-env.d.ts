/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_TIMEOUT_IN_MS: number;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
