export const getters = {
  appTitle(state) {
    return state.appName
  },
  getUser(state) {
    return state.user
  },
  getError(state) {
    return state.error
  },
  getLoading(state) {
    return state.loading
  }
}
