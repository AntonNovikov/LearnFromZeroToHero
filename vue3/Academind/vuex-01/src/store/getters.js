export default {
    // // finalCounter(state, getters){
    // finalCounter(state) {
    //   return state.counter * 2;
    // },
    // // normalizedCounter(state,getters) {
    // normalizedCounter(_, getters) {
    //   const finalCounter = getters.finalCounter;
    //   if (finalCounter < 0) {
    //     return 0;
    //   }
    //   if (finalCounter > 100) {
    //     return '100+';
    //   }
    //   return finalCounter;
    // },
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  }