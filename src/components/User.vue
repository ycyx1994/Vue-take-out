<template>
  <div>
    <myheader></myheader>
    
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
 
</style>


