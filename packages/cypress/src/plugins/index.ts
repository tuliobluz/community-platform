import { TestDB } from "../support/db/firebase"

/* global console */
export function setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
  /**
   * Log console to terminal
   * https://github.com/cypress-io/cypress/issues/3199
   */
  on('task', {
    log(message) {
      console.log(message)
      return null
    },
  })

  on('before:run', async () => {
    console.log(`Seeding database prefix ${config.env.DB_PREFIX}`)
    process.env.DB_PREFIX = config.env.DB_PREFIX
    console.log("befor", process.env.DB_PREFIX)
    try {
      await TestDB.seedDB()
      console.log('Database seeded successfully')
    } catch (error) {
      handleError(error)
    }
  })

  on('after:run', async () => {
    console.log(`Deleting database prefix ${process.env.DB_PREFIX}`)
    try {
      //await TestDB.clearDB()
      console.log('Database deleted successfully')
    } catch (error) {
      handleError(error)
    }
  })
}

function handleError(error: any) {
  console.error(error)
  process.exit(1)
}

