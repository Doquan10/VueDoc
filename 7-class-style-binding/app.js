const app = Vue.createApp({
    data() {

        return {
            showBorder: false,
            boxClass: "border red",
            redBG:false,
            bgColor:"cyan",
        }
    },



    methods: {





    },
    computed: {

    boxClasses(){
        return {border: this.showBorder,red:this.redBG}
    }

    },
    watch: {

    }
});
app.mount("#app");