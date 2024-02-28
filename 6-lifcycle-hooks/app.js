const app = Vue.createApp({
    data() {
        
        return{
        title :"Test Başlığı",   
        itemList:[],
        }
    },
    beforeCreate(){
        console.log("beforeCreate çalıştı");
    },

    created(){
        console.log("created çalıştı");
        /*
        setTimeout(() => {
         this.itemList = [1,2,3,4,5,6,7,8,9];
        }, 2000);
        */
        const maxProfit = (prices) => {
            let left = 0; // Buy
            let right = 1; // sell
            let max_profit = 0;
            while (right < prices.length) {
              if (prices[left] < prices[right]) {
                let profit = prices[right] - prices[left]; // our current profit
          
                max_profit = Math.max(max_profit, profit);
              } else {
                left = right;
              }
              right++;
            }
            return max_profit;
          };
          
          console.log(`The solution is ${maxProfit([4,1,2,3])}`);
    },
    beforeMount(){
        console.log("beforeMount çalıştı");
    },
    mounted(){
        console.log("mounted çalıştı");
    },
    beforeUpdate(){
        console.log("beforeUpdate çalıştı");
    },
    updated(){
        console.log("updated çalıştı");
    },
    beforeUnmount(){
        console.log("beforeUnmount çalıştı");
    },
    unmounted(){
        console.log("unmounted çalıştı");
    },

    methods: {

      

       

    },
    computed :{
        

   
    },
    watch:{
         
    }
});
app.mount("#app");