import { SelfHostedApp } from '../src/self-hosted/app'

import { routes } from '../src/routes'
import { locales } from '../src/locales'
import { plugins } from '../src/plugins'
import { webchat } from '../src/webchat'
import { config } from '../src'

export const app = new SelfHostedApp({
  routes,
  locales,
  plugins,
  ...webchat,
  ...config,
})