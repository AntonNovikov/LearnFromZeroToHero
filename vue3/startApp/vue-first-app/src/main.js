import { createApp } from 'vue'
import App from './App.vue'
import FriendContactVue from './components/FriendContact.vue';
import NewFriendVue from './components/NewFriend.vue';

const app = createApp(App);


app.component('friend-contact', FriendContactVue);
app.component('new-friend', NewFriendVue);

app.mount('#app')
