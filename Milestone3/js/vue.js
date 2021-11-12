const app = new Vue({
  el: '#app',

  data:{
    thingsToDo:[
      {
        text: 'Comprare il pare',
        done: false 
      },
      {
        text: 'Inviare il pacco',
        done: true
      },
      {
        text: 'Pagare la bolletta della luce',
        done: true 
      },
      {
        text: 'Cercare regali di natale',
        done: false 
      }

    ],

    newString: '',
    error : false,


  },
  methods:{

    removeToDo(index){
      this.thingsToDo.splice(index,1)
    },

    addToDoIf(){
      if(this.newString.length < 3){
        this.error = true;

        setTimeout(() =>{
          this.error = false
        },2000)

      }else{
        this.thingsToDo.push({ text: this.newString, done: false })
      }
    }

    // addToDo(){
      
    // }
  }






})