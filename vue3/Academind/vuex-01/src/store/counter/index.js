export default {
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      // setTimeout(function(){

      //     state.counter = state.counter + 1;
      // }, 2000); // not allowed
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      console.log(state);
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      console.log(context);
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
      // context.commit({type:'increment'});
    },
    increase(context, payload) {
      context.commit('increase', payload);
    },
  },
  getters: {
    testAuth(state) {
      return state.isLoggedIn;
    },
    // finalCounter(state, getters){
    finalCounter(state) {
      return state.counter * 2;
    },
    // normalizedCounter(state,getters) {
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return '100+';
      }
      return finalCounter;
    },
  },
};
