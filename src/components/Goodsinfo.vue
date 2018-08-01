<template>
  <div class="page">
    <!-- 头部 -->
    <div class="goods-header">
      <i @click="$router.go(-1)" class="fa fa-chevron-left"></i>
      <p>{{info.name}}</p>
    </div>

    <!-- 主体 -->
    <div class="content">
      <div class="goods-img">
        <!-- <img src="http://img01.bqstatic.com/upload/goods/000/000/2198/0000002198.jpg" alt=""> -->
        <img :src="info.img" alt="">
      </div>
      <div class="goods-title">
        <p class="title">{{info.long_name}}</p>
        <p class="price">￥{{info.price}}</p>
      </div>
      <div class="goods-detail">
        <div class="detail-header">商品详情</div>
        <div class="detail-info">
          <p>品牌名称：
            <span>{{info.brand_name}}</span>
          </p>
          <p>产品规格：
            <span>{{info.specifics }}</span>
          </p>
        </div>
      </div>
      <div class="block">
        <img src="@/assets/images/productDetailDefault.jpg" alt="">
      </div>
    </div>

    <!-- 底部 -->
    <div class="goods-footer">
      <div class="mark">
        <i class="far fa-heart"></i>
        <span>收藏</span>
      </div>
      <p class="addgoods">添加商品：</p>
      <div class="cart">
        <div class="cart-background">
          <i class="fa fa-shopping-cart"></i>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cateid: "",
      id: "",
      info: {}
    };
  },
  created() {
    console.log(this.$route);
    this.cateid = this.$route.params.cateid;
    this.id = this.$route.params.id;
    console.log(this.id)
    axios.jsonp("http://localhost:3008/list").then(res => {
      // console.log(res.data.products[this.cateid].find(item => this.id = item.id))
      this.info = res.data.products[this.cateid].find(
        item => (this.id == item.id)
      );
    });
    window.scrollY = 0;
  }
};
</script>


<style lang="scss" scoped>
.page {
  padding-top: 55px;
  // height: 2000px;
  padding-bottom: 60px;
}

// 头部
.goods-header {
  width: 100%;
  height: 55px;
  background-color: #f9fafd;
  border-bottom: 1px solid #e0e0e0;
  position: fixed;
  top: 0;
  i {
    position: absolute;
    width: 55px;
    height: 55px;
    font-size: 22px;
    line-height: 55px;
    text-align: center;
  }
  p {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 55px;
  }
}

// 底部
.goods-footer {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
  padding-left: 60px;
  .mark {
    width: 60px;
    height: 60px;
    text-align: center;
    padding-top: 5px;
    position: absolute;
    left: 0px;
    i {
      width: 60px;
      line-height: 30px;
      font-size: 28px;
    }
    span {
      font-size: 12px;
    }
  }
  .addgoods {
    line-height: 60px;
  }
  .cart {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    text-align: center;
    line-height: 70px;
    font-size: 35px;
    color: #fff;
    position: absolute;
    right: 10px;
    top: -30px;
    z-index: 2;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    .cart-background {
      width: 70px;
      height: 70px;
      margin: 0 auto;
      border-radius: 50%;
      background-color: #ffd600;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translatey(-50%);
    }
  }
}

// 主体
.content {
  .goods-img {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .goods-title {
    width: 100%;
    text-align: center;
    padding-bottom: 50px;
    border-bottom: 5px solid #efefef;
    .title {
      font-size: 26px;
      margin: 10px;
    }
    .price {
      color: red;
      font-size: 22px;
      font-weight: 600;
    }
  }
  .goods-detail {
    margin-top: 20px;
    .detail-header {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV8AAAAEBAMAAADbpSEyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURQAAAOC9auC9auC9auC9auC9auC9auC9auC9auC9auC9auC9auC9auC9agdMhdkAAAANdFJOUwCZRGaID/C0S1EkGCCdfVLsAAAAM0lEQVQoz2NgIAWw3r3GQFXQe7eAgZZgMDjYhVhwgHYO5hQkGggwGBMLNtDOwVxKRAMFAOUAK2mKnCc7AAAAAElFTkSuQmCC);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      width: 60%;
      margin: 0 auto;
      text-align: center;
      font-size: 16px;
      color: #e0be6c;
    }
    .detail-info {
      padding-left: 20px;
      margin-top: 20px;
      padding-bottom: 20px;
      border-bottom: 5px solid #efefef;
      p {
        font-size: 16px;
        color: #848c99;
        line-height: 36px;
        span {
          color: #333;
        }
      }
    }
  }
  .block {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>

