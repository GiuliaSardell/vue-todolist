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


  },
  methods:{
    removeToDo(index){
      this.thingsToDo.splice(index,1)
    },

    addToDo(){
      this.thingsToDo.push({ text: this.newString, done: false })
    }
  }






})