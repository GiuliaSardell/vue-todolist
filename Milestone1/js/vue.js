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
    isActive: false,
 
    // che indica se il todo è stato fatto oppure no
  },
  methods:{

    barraTesto(){

    }
  }






})