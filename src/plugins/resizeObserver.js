/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { lodash } from '@/utils/helpers'

export default {
  install: (app) => {
    app.directive('resize-observer', {
      mounted(el, binding) {
        let width = 0,
          height = 0

        const updateSize = lodash.debounce((entries) => {
          for (const entry of entries) {
            width = entry.contentRect.width
            height = entry.contentRect.height
          }
          if (binding.value) binding.value({ width, height })
        }, 200)

        const resizeObserver = new ResizeObserver(updateSize)
        resizeObserver.observe(el)
        el._resizeObserver = resizeObserver
      },
      unmounted(el) {
        if (el._resizeObserver) {
          el._resizeObserver.disconnect()
        }
      },
    })
  },
}
