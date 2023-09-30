export default {
  // increment(state) {
  //   // setTimeout(function(){

  //   //     state.counter = state.counter + 1;
  //   // }, 2000); // not allowed
  //   state.counter = state.counter + 1;
  // },
  // increase(state, payload) {
  //   state.counter = state.counter + payload.value;
  // },
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  },
};
