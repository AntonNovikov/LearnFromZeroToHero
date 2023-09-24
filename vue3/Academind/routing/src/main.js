import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' }, // our-domain.com/teams => TeamsList
    // { path: '/teams' , component: TeamsList , alias: '/' }, // our-domain.com/teams => TeamsList
    { name: 'teams',
      path: '/teams',
      meta: {needsAuth: true},
    //   component: TeamsList,
      components: {default:  TeamsList, footer: TeamsFooter},
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },
    ],
}, // our-domain.com/teams => TeamsList
// { path: '/teams/:teamId', component: TeamMembers, props: true },
    // { path: '/users', component: UsersList }, // our-domain.com/users => ...
    { path: '/users', components:{ default: UsersList, footer: UsersFooter },beforeEnter(to, from, next){
console.log('users beforeEnter');
console.log(to,from);
next();
    } }, //

    // { path: '/teams/new' , component: UsersList } //
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  // scrollBehavior(to,from, savedPosition){
  scrollBehavior(_,_2, savedPosition){
    // console.log(to,from,savedPosition)
    if(savedPosition){
      return savedPosition;
    }
return { left: 0, top: 0,};
  }
});

router.beforeEach(function(to, from, next){
console.log('global beforeEach')
  console.log(to,from);
  if(to.meta.needsAuth){
    console.log("Needs auth")
    next();
  } else {
    next()
  }
  // next(false);
  // if(to.name === 'team-members'){
  //   next();
  // }else{

  //   next({name: 'team-members', params: { teamId: 't2'}});
  // }
next();
});

router.afterEach(function(to,from) {
  console.log('Global afterEach')
console.log(to,from)
})

const app = createApp(App);

app.use(router);

app.mount('#app');