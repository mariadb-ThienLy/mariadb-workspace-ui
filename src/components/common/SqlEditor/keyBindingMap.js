/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import monaco from '@/components/common/SqlEditor/customMonaco.js'
import { KEYBOARD_SHORTCUT_MAP } from '@/constants'

const { CTRL_D, CTRL_ENTER, CTRL_SHIFT_ENTER, CTRL_SHIFT_C, CTRL_O, CTRL_S, CTRL_SHIFT_S } =
  KEYBOARD_SHORTCUT_MAP

const { KeyMod: { CtrlCmd, Shift } = {}, KeyCode: { Enter, KeyC, KeyD, KeyO, KeyS } = {} } =
  monaco || {}

export default {
  [CTRL_ENTER]: [CtrlCmd | Enter],
  [CTRL_SHIFT_ENTER]: [CtrlCmd | Shift | Enter],
  [CTRL_SHIFT_C]: [CtrlCmd | Shift | KeyC],
  [CTRL_D]: [CtrlCmd | KeyD],
  [CTRL_O]: [CtrlCmd | KeyO],
  [CTRL_S]: [CtrlCmd | KeyS],
  [CTRL_SHIFT_S]: [CtrlCmd | Shift | KeyS],
}
