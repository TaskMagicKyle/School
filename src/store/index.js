import Vue from 'vue'
import Vuex from 'vuex'

import VuexPersist from 'vuex-persist'

import storage from './storage'
const vSSCurrentUser = new VuexPersist({
  key: 'storage',
  storage: window.sessionStorage,
  reducer: state => ({
    storage: state.storage
  })
})
Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      storage
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    plugins: [
      vSSCurrentUser.plugin
    ],
    strict: process.env.DEV
  })

  return Store
}
