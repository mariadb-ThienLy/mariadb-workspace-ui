/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { mergeLocales, getGlobalI18n } from '@/utils/i18n'

const locales = import.meta.glob('@/locales/*.json', { eager: true })

const i18nInstance = mergeLocales(locales)

export const globalI18n = getGlobalI18n()

export default {
  install: (app) => app.use(i18nInstance),
}
