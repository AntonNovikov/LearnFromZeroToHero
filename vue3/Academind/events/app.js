const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "df",
      lastName: "dfdf",
      confirmedName: "",
      fullname: "",
    };
  },
  watch: {
    name(value) {
      if(!value){this.fullname = ''}
      else{

        this.fullname = value + " " + "Schardhccjsdf";
      }
    },
  },
  computed: {
    // fullname(){
    //   console.log("running");
    //   if (this.name === ''){
    //     return '';
    //   }
    //   return this.name + ' ' + 'Schardhccjsdf'
    // }
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      // event.preventDefault();
      alert("submit");
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add() {
      this.counter = this.counter + 1;
    },
    reduce() {
      this.counter = this.counter - 1;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
