<template>
  <div class="add-cart">
    <font-awesome-icon v-show="value != 0" icon="minus-circle" class="icon" @click.stop="minus()"/>
    <span v-show="value != 0">{{value}}</span>
    <font-awesome-icon icon="plus-circle" class="icon" @click="plus"/>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      selectedCount: this.value
    }
  },
  created() {
    console.log('创建添加组件')
  },
  methods: {
    plus() {
      console.log('添加成功')
      this.selectedCount++;
    },
    minus() {
      console.log('删除成功')
      this.selectedCount--;
    }
  },
  watch: {
    selectedCount(nV) {
      // 修改 v-model绑定的值
      this.$emit('input', nV)
      // 触发事件 加入购物车数据库
      this.$emit('selectGoods')
    }
  }
}
</script>


<style lang="scss" scoped>
  .icon {
    color: #ff4401;
    font-size: 22px;
  }
  .add-cart {
    font-size: 20px;
  }
</style>

