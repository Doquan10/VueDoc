<template>
        <h3 :style="counter > 0 ? { 'background-color': 'green'} : ''">{{counter}}</h3>
    <button class="btn btn-sm btn-success" @click="counter++">Arttır</button>
    <button class="btn btn-sm btn-warning" @click="counter--">Azalt</button>
</template>

<script>
export default{
    data(){
        return{
            counter:0,
        };
    },
};
</script>