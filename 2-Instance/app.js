const app = Vue.createApp({
    data() {
        return {
            title: "1.Gün Vue",
            desc: "Bu derste vue üzerinden data aktarmayı gösterdi",

            eduflow: {
                title: "Başka linke göndermek için v-bind kullandık",
                target: "_blank",
                url: "https://www.youtube.com/",
                alt: "ders1"
            },
            owner: "Araba",
            coords: {
                x: 0,
                y: 0,
            },
        };
    },
    methods: {
        changeTitle(pTitle) {
            // alert("Uyarı");
            this.title = pTitle;
        },
        updateCoords(message, event) {
            //console.log(message,event.x,event.y);
            this.changeTitle(`${event.x}, ${event.y}`); //Normal tırnak koyunca olmaz
            this.coords = {
                x: event.x,
                y: event.y,
            };
        }
    }
}).mount("#app");