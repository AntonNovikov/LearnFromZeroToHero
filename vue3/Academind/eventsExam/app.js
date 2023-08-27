Vue.createApp({
    data(){
        return {
            userInput: '',
            confirmedInput: '',
        }
            },
  methods: {
  
    showAlert() {
      alert("this works");
    },
    saveInput(event){
        console.log(event.target.value)
        this.userInput = event.target.value;
    },
    confirmInput(){
        this.confirmedInput = this.userInput;
    }
  },
}).mount("#vue");
