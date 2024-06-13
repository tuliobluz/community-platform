import { defineConfig } from 'cypress'

import viteConfig from '../../vite.config'
import { setupNodeEvents } from './src/plugins'
import { generateAlphaNumeric } from './src/utils/TestUtils'

const DB_PREFIX:string = generateAlphaNumeric(5)

function withDBPrefix(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
  config.env.DB_PREFIX = DB_PREFIX;
  return setupNodeEvents(on, config);
}

export default defineConfig({
  defaultCommandTimeout: 15000,
  watchForFileChanges: true,
  chromeWebSecurity: false,
  video: true,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'coverage/out-[hash].xml',
  },
  downloadsFolder: 'src/downloads',
  fixturesFolder: 'src/fixtures',
  screenshotsFolder: 'src/screenshots',
  videosFolder: 'src/videos',
  projectId: '4s5zgo',
  viewportWidth: 1000,
  viewportHeight: 1000,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  env: {
    DB_PREFIX: DB_PREFIX
  },
  e2e: {
    setupNodeEvents: withDBPrefix,
    baseUrl: 'http://localhost:3456',
    specPattern: 'src/integration/**/*.{js,jsx,ts,tsx}',
    supportFile: 'src/support/index.ts',
  },
  component: {
    devServer: {
      bundler: 'vite',
      framework: 'react',
      viteConfig: { ...viteConfig },
    },
  },
})
