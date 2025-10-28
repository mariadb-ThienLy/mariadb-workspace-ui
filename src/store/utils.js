/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */

/**
 * Creates a set of Vuex mutations based on the provided states
 * @param {Object} states - An object representing the states for which mutations are to be created.
 * @returns {Object} - An object containing Vuex mutations.
 */
export function genSetMutations(states) {
  return Object.keys(states).reduce(
    (mutations, name) => ({
      ...mutations,
      [`SET_${name.toUpperCase()}`]: (state, payload) => (state[name] = payload),
    }),
    {}
  )
}
