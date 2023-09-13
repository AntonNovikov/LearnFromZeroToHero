<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <!-- phoneNumber= '92347123' -->
      <friend-contact v-for="friend in friends" :key="friend.id" :id="friend.id" :name='friend.name'
        :phone-number='friend.phone' :email-address='friend.email' v-bind:is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus" @delete="deleteContact"></friend-contact>
      <!-- <friend-contact
    name= 'Manuel   222 2Lorenz'
          phone-number= '92347123'
          email-address= ''  :is-favorite="false">></friend-contact> -->
    </ul>
  </section>
</template>

<script>
import NewFriend from './components/NewFriend.vue';
// import HelloWorld from './components/HelloWorld.vue'

export default {
  components: { NewFriend },
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '92347123',
          email: 'emael@laodc.eho',
          isFavorite: false,
        },
        {
          id: 'm22anuel',
          name: 'Man2uel Lorenz',
          phone: '9222347123',
          email: 'ema2el@ladfdffdfdfodc.eho',
          isFavorite: false,
        }
      ]
    }
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const iF = this.friends.find(friend => friend.id === friendId);
      iF.isFavorite = !iF.isFavorite;
    },
    addContact(name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name,
        phone,
        email,
        isFavorite: false,
      }
      this.friends.push(newFriendContact)
    },
    deleteContact(friendId) {
      this.friends = this.friends.filter(el => el.id !== friendId);
    }
  }
}

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: .15rem;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;

}

#app form div {
  margin: 1rem 0;
}
</style>
