/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { createI18n } from 'vue-i18n'
import { en as vuetifyEn } from 'vuetify/locale'
import { t as typy } from 'typy'

const regex = /locales\/(?<locale>[A-Za-z0-9-_]+)\.json$/i

export function load(locales) {
  const messages = {}

  Object.entries(locales).forEach(([path, module]) => {
    const match = path.match(regex)
    if (match) {
      const { locale } = match.groups || {}
      messages[locale] = module.default
    }
  })

  return messages
}

const messages = { en: { $vuetify: vuetifyEn } }

const i18n = createI18n({
  legacy: false,
  allowComposition: true,
  warnHtmlMessage: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: messages,
})

/**
 * Export as the function so that app can get the i18n instance with the lib locales
 * and app's locales
 * @returns {object} The global i18n instance
 */
export const getGlobalI18n = () => typy(i18n, 'global').safeObjectOrEmpty

export function mergeLocales(appLocales) {
  const loadedMessages = load(appLocales)
  for (const locale in loadedMessages)
    if (locale in loadedMessages)
      typy(i18n, 'global.mergeLocaleMessage').safeFunction(locale, loadedMessages[locale])
  return i18n
}

// Export the i18n instance for use in lib components
export const globalI18n = getGlobalI18n()
