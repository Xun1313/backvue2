<template>
  <div>
    <navebar></navebar>
    <router-view></router-view>
  </div>
</template>


<script>
import navebar from '../components/navbar';
export default {
  data() {
    return {
      test: ["peter", "kevin", "cindy"],
      visible: false,
      single: false,
      place: ["北京", "上海", "深圳"]
    };
  },
  methods: {

  },
  components:{
    navebar
  }
};
</script>