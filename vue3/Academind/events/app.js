const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name : 'df',
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
    },
    resetInput(){
this.name = '';
    }
  }
});

app.mount('#events');
