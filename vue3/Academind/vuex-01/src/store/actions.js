export default {
  // increment(context) {
  //   console.log(context);
  //   setTimeout(function () {
  //     context.commit('increment');
  //   }, 2000);
  //   // context.commit({type:'increment'});
  // },
  // increase(context, payload) {
  //   context.commit('increase', payload);
  // },
  login(context) {
    context.commit('setAuth', { isAuth: true });
  },
  logout(context) {
    context.commit('setAuth', { isAuth: false });
  },
};
