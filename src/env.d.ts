/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly FOLK_API_KEY: string;
  readonly FOLK_WORKSPACE_ID: string;
  readonly GOOGLE_CALENDAR_API_KEY: string;
  readonly GOOGLE_CALENDAR_ID: string;
  readonly CALCOM_API_KEY: string;
  readonly CALCOM_USERNAME: string;
  readonly PROMO_CODES: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
