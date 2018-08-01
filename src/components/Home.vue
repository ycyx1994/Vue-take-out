<template>
  <div>
    <myheader></myheader>
    <div class="page">这是首页</div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from '@/components/common/Header.vue';
import myfooter from '@/components/common/Footer.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    myheader,
    myfooter
  }
}
</script>

<style lang="scss" scoped>
  .page {
    font-size: 30px;
    padding-top: 54px;
  }
</style>


