const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name : '',
      confirmedName:'',
    };
  },
  methods: {
    confirmInput(){
      this.confirmedName = this.name
    },
    submitForm(){
      // event.preventDefault();
alert("submit")
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add() {
      this.counter = this.counter + 1;
    },
    reduce() {
      this.counter = this.counter - 1;
      // this.counter--;
    }
  }
});

app.mount('#events');
