const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0,

        };
    },
    methods: {
   
        dec() {

            this.counter++;
        },
        inc() {
            this.counter--;
        },

       

    },
    computed :{
        getCounterResult() {
            console.log("Counter 1 çalıştı");
            return this.counter > 5 ? 'Büyük' : 'Küçük';
        },
        getCounter2Result() {
            console.log("Counter 2 çalıştı");
            return this.counter2 > 5 ? 'Büyük' : 'Küçük';
        },
    },
    watch:{
        counter(newValue, oldValue){
            console.log(oldValue, "=>", newValue);
        }
    }
}).mount("#app");