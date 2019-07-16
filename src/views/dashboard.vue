<template>
  <div>
    <navebar></navebar>
    <router-view></router-view>
    <footers></footers>
  </div>
</template>


<script>
import navebar from '../components/navbar';
import footers from '../components/footer';

export default {
  components:{
    navebar,
    footers
  }
};
</script>