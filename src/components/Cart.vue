<template>
  <div class="page">
    <myheader></myheader>
    <div class="content">
      <div class="addr">
        <table>
          <tr>
            <td>收货人</td>
            <td>骁骁大魔王</td>
          </tr>
          <tr>
            <td>电话</td>
            <td>185********</td>
            <td>
              <a href="#">修改
                <i class="fa fa-chevron-right"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>收货地址</td>
            <td>王者峡谷红色方野区蓝Buff右下角草丛</td>
          </tr>
        </table>
      </div>
      <div class="tips">
        <div class="title">闪送超市</div>
        <span>
          <a href="#">凑单专区</a>
        </span>
        <p>￥0起送，22点后满￥69运费5元起，不满￥69运10元起</p>
      </div>
      <div class="time">
        <p>收货时间
          <span>08:00-09:00</span>
        </p>
        <a href="#">可预订
          <i class="fa fa-chevron-right"></i>
        </a>
      </div>
      <div class="remark">
        收货备注
        <input type="text" placeholder="可输入100字以内特殊要求内容">
      </div>
      <div class="cart-list">
        <ul>
          <li v-for="(item, index) in list" :key="index">
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
    <myfooter></myfooter>
  </div>
</template>

<script>
import myheader from "@/components/common/Header.vue";
import myfooter from "@/components/common/Footer.vue";
import addcart from '@/components/common/AddCart.vue';
import axios from 'axios';

export default {
  data() {
    return {
      list: []
    };
  },
  components: {
    myheader,
    myfooter,
    addcart
  },
  created() {
    // console.log(this.$store.getters.id2Data)
    const {ids, id2Data} = this.$store.getters 
    axios({
      url: `http://m.beequick.cn/data/home?_r=${Math.random()}&cart_pids=${encodeURIComponent(ids)}&location=121.5721941391567%2C31.21168025925351`
    }).then(res => {
      console.log(res)
    })
  }
};
</script>

<style lang="scss" scoped>
.page {
  padding-top: 55px;
}
.content {
  .addr {
    // border: 1px solid #000;
    padding-top: 5px;
    padding-bottom: 5px;
    // margin-top: 10px;
    border-top: 10px solid #efefef;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAFCAMAAAAUh8BWAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAIQUExURUxpcbHM39i+x6/K3cfHx9+qvOCrvf////7+/sjIyL7L1P/+/9m+x7zJ0v39/c+0vc60vbbJ2LvM1vn5+cXFxbnK1LDJ3bLL3/v//7vJ1K/J2r3L1rnM28vLy/z8/Nyuuf7//9ezvfz//brL1de9xtiuuK7J3P/4+tO5wtW7xL/M1eGuv+Ctvs2zvN6rvOKvwN2qu7bM2rTK2LfN27rK2rfK2bTK17XL2f/4/LzM2bTH1rvL27XI177H0LnF0cDN1srKysbGxsPDw9O0vLXL2LLI1fv5+v78/fz6/cfFyNWxu/37/tzCy7/L1//7+8PIxPT59f/7/9C3vdy4ws2vt7TG0rvL2NnAxrnK2tq8xNrL0OO/ydjJzrjJ2d7AyMq1vOC/yNfCyczBxdOvudCyutfGzNDO0cTP1cfJyODo68TJzMDIy/b4977L08LQ2bLM27PJ1trAybDK2b7M1bPBytmvude2v9WwuNOutr3L1N2zvcjNyf///f/8/f/+/MXFw8bLx8bFw//5+fvx8rLE0LXCyrXDzsfU3Nm/yMuxut3DzPL7/9K4wbTP4rbDzLDL3vj//7bBx9Ld4fT8/vf//73H0NDa49uoudajtNqnuNGyuse2vP/v9f/5///2+s+0u//1+9/Izti9xLLM3azH2uz//7vV5rHL3Oz5/8PY6+Owwfr6+tTU1N+svf/u9+67zEs6ycoAAAABdFJOUwBA5thmAAABJUlEQVQY02NIiklNDI+MSwiO5gECJiBQKezS1Ohg8hHhlBVx5HRy4IQCzzRZkYys7PRcX0sTUxljIy4gkJYWEhIVKs7Tsm+3ZYECmHr/hur6RobAqNnxQSEpZcmK/EAgAAQ9uroaKp2a69iF+dg52BHA24ODQ0Eic2KrXZi1oKChOS8QSEqKiiorl1T2aa3oZkcDSgFKNXUMFnMXznf2Kq8qlWeFgunaOjP0VumtXw0xXJgDCrjd2NlzJCZPmtoWGiFoZeZSJCYmxgwCamr9y6SWLwWpAWnggGvwa1ZnmLdgzqJZihWqqvJsUKA9U1/HQN9g7Ro+oA/4ED5w5+aQU5CYMGWaZEusjI1rQb64uDgjGPQukVostZKDA9X9ctxNteoMNAYAiENF1cWJLNkAAAAASUVORK5CYII=);
    table {
      width: 100%;
      background-color: #fff;
      padding-left: 20px;
      tr {
        height: 31px;
      }
    }
  }
  .tips {
    position: relative;
    color: #999999;
    padding-left: 20px;
    padding-top: 20px;
    border-top: 20px solid #efefef;
    border-bottom: 1px solid #efefef;
    .title {
      border-left: 3px solid #ffd600;
      padding-left: 10px;
      // height: 37px;
      // line-height: 37px;
    }
    a {
      display: block;
      width: 62px;
      height: 22px;
      border-radius: 11px;
      color: red;
      border: 1px solid red;
      position: absolute;
      font-size: 12px;
      line-height: 22px;
      text-align: center;
      right: 20px;
      top: 20px;
    }
    p {
      height: 40px;
      line-height: 40px;
    }
  }
  .time {
    height: 50px;
    border-bottom: 1px solid #efefef;
    line-height: 50px;
    position: relative;
    padding-left: 20px;
    span {
      color: red;
      margin-left: 10px;
    }
    a {
      position: absolute;
      right: 20px;
      top: 0px;
    }
  }
  .remark {
    height: 50px;
    border-bottom: 1px solid #efefef;
    line-height: 50px;
    position: relative;
    padding-left: 20px;
    input {
      width: 300px;
      height: 32px;
      border-radius: 5px;
      border: 1px solid #cecece;
      padding-left: 10px;
    }
  }
}
</style>


