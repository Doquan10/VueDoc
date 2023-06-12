<template>
  <app-header></app-header>
<h3> first vue cli app</h3>

<counter-item></counter-item>
<!-- isimlendirme farklı şekilde olabilir -->
</template>

<script>
import CounterItem from   "@/components/CounterItem";
export default{
components :{
  CounterItem : CounterItem,
}
}
</script>

