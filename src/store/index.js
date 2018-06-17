import Vue from "vue"
import Vuex from "vuex"

import {
  galleriesService
} from './../services/GalleriesService'
import {
  authService
} from "../services/AuthService";

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isAuthenticated: authService.isAuthenticated,
    galleries: []
  },
  getters: {
    getIsAuthenticated(state) {
      return state.isAuthenticated;
    },
    getGalleries(state) {
      return state.galleries;
    }
  },
  mutations: {
    setIsAuthenticated(state, auth) {
      state.isAuthenticated = auth;
    },
    setGalleries(state, galleries) {
      state.galleries = galleries;
    },
  },
  actions: {
    fetchGalleries(store) {
      galleriesService.getAll()
        .then(({
          data
        }) => {
          let galleries = data;
          store.commit("setGalleries", galleries);
        })
    }
  }


})