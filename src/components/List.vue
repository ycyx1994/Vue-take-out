<template>
  <div class="page">
    <myheader></myheader>
    <div class="list-content">
      <div class="left-menu">
        <ul>
          <li :class="{active: categoriesId == '104751'}" @click="selectMenu(index, '104751')">
            <a href="javascript:;">热销榜</a>
          </li>
          <li v-for="(item, index) in categories" :key="index" :class="{active: item.id == categoriesId}" @click="selectMenu(index, item.id)">
            <a href="javascript:;">{{item.name}}
              <span class="{new: }"></span>
            </a>
          </li>
        </ul>
      </div>
      <div class="right-pro">
        <div class="right-top">
          <ul>
            <li>
              <a href="#">全部分类</a>
            </li>
            <li>
              <a href="#">综合排序</a>
            </li>
          </ul>
        </div>
        <div class="pro-detail">
          <ul>
            <li v-for="(item, index) in selectedProductions" :key="index">
              <a href="javascript:;" @click="$router.push('/goodsinfo/'+ item.category_id +'/' + item.id )">
                <div class="pro-img">
                  <img :src="item.img">
                </div>
                <div class="pro-title">
                  {{item.name}}
                </div>
                <div class="pro-info">
                  <p class="pro-kg">{{item.specifics}}</p>
                  <p>
                    <span class="now-price">{{'￥' + item.price}}</span>
                    <span class="old-price">{{'￥' + item.partner_price}}</span>
                  </p>
                </div>
              </a>
              <addcart v-model="item.count" @selectGoods="selectGoods(item.id)"></addcart>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from "@/components/common/Header.vue";
import myfooter from "@/components/common/Footer.vue";
import addcart from "@/components/common/AddCart.vue";
import axios from "axios";

export default {
  data() {
    return {
      categories: [],
      products: [],
      // nowCateIndex: 1,
      selectedIndex: 0,
      categoriesId: "104751",
      selectedProductions: []
    };
  },
  components: {
    myheader,
    myfooter,
    addcart
  },
  created() {
    // console.log(axios.jsonp)
    this.getData();
    console.log(this.$store.getters.ids);
  },
  methods: {
    getData() {
      axios.jsonp("http://localhost:3008/list").then(res => {
        // console.log(res);
        // 解构
        const { categories, products } = res.data;
        this.categories = res.data.categories;
        this.products = res.data.products;
        // console.log(this.products);
        const id2Data = this.$store.getters.id2Data;
        // console.log(id2Data);
        // 遍历产品数组，找到数据库购物车中有的商品，加上count 属性，并返回新的数组
        this.selectedProductions = products[categories[0].id].map(item => {
          return {
            ...item,
            // 当前商品已选择的数量
            count: (id2Data[item.id] && id2Data[item.id].count) || 0
          };
        });
      });
    },
    selectMenu(index, id) {
      const id2Data = this.$store.getters.id2Data;
      this.categoriesId = +id;
      this.selectedIndex = index;
      this.selectedProductions = this.products[id].map(item => {
        return {
          ...item,
          // 当前商品已选择的数量
          count: (id2Data[item.id] && id2Data[item.id].count) || 0
        };
      });

      window.scrollY = 0;
    },
    selectGoods(id) {
      const count = this.selectedProductions.find(item => {
        return item.id == id;
      }).count;
      this.$store.commit("addCart", {
        count,
        id
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  padding-top: 54px;
}

.list-content {
  height: 100%;
  padding-left: 80px;
}

.left-menu {
  width: 80px;
  height: 100%;
  background-color: #f8f8f8;
  position: fixed;
  left: 0px;
  top: 0px;

  li {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #e7eaeb;
    &.active {
      border-left: 3px solid #ffd600;
    }
    a {
      display: block;
      width: 80px;
      height: 55px;
      line-height: 55px;
      font-size: 14px;
      // padding-left: 3px;
    }
  }
}

// 右边

.right-pro {
  width: 100%;
  position: relative;
  padding-top: 36px;
  padding-bottom: 60px;

  .right-top {
    position: fixed;
    top: 54px;
    width: 334px;
    z-index: 999;
    background-color: #fff;

    ul {
      width: 100%;
      border-bottom: 1px solid #e7eaeb;
    }
    li {
      width: 49%;
      display: inline-block;
      text-align: center;
      a {
        font-size: 12px;
        display: block;
        height: 36px;
        line-height: 36px;
        // display: inline-block;
        // width: 50%;
      }
    }
  }

  .pro-detail {
    position: relative;
    li {
      height: 120px;
      padding: 10px 0px;
      border-bottom: 1px solid #e7eaeb;
      position: relative;
      a {
        width: 100%;
        height: 100%;
        padding-left: 75px;
        padding-top: 15px;
        padding-bottom: 15px;
        display: block;
        position: relative;
        .pro-title {
          height: 20px;
          font-size: 16px;
          line-height: 20px;
          margin: 8px 0;
        }
        .pro-kg {
          color: #ccc;
        }
        .now-price {
          color: red;
          font-weight: 900;
        }
        .old-price {
          font-size: 10px;
          text-decoration: line-through;
        }
      }
      img {
        width: 55px;
        height: 55px;
        position: absolute;
        left: 10px;
        top: 22px;
      }
    }
    .add-cart {
      position: absolute;
      right: 20px;
      bottom: 15px;
      z-index: 10;
    }
  }
}
</style>


