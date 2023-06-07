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

        getCounterResult() {
            return this.counter > 5 ? 'Büyük' : 'Küçük';
        },
        getCounter2Result() {
            return this.counter2 > 5 ? 'Büyük' : 'Küçük';
        },

    }
}).mount("#app");