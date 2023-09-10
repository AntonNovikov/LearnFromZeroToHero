import { createApp } from 'vue'
import App from './App.vue'
import FriendContactVue from './components/FriendContact.vue';

const app = createApp(App);


app.component('friend-contact', FriendContactVue);

app.mount('#app')
