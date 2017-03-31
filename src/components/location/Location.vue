<template>
  <div class="page location">
    <f-header></f-header>
    <section class="search">
      <button class="search_btn">搜索</button>
      <div class="search_box">
        <input type="search" class="search_input sch-input" placeholder="请输入您的收货地址">
      </div>
    </section>
    <section class="container">
      <div class="tip" v-if="showTip">
        <span class="words">猜您当前位于：</span>
        <span class="ops"><i class="icon-arrow-right-thin city-presenticon"></i> </span>
      </div>
      <div class="positioning" v-if="showPosition">
        <a href="" class="position">
          <span class="posi_words">点击定位当前位置</span>
        </a>
      </div>
      <div class="addresses" v-if="showAddress">
        <ul class="address_list">
          <li class="address_item" v-for="address of addresses">
            <span class="more"></span>
            <div class="address_msg">
              <h3 class="address_name">{{ address.name }}</h3>
              <p class="address_detail">{{ address.detail}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="area">
        <section class="citys">
          <p class="letter">热门城市</p>
          <ul class="clearfix">
            <li class="city hot">天津</li>
            <li class="city hot">北京</li>
            <li class="city hot">北京</li>
            <li class="city hot">北京</li>
            <li class="city hot">北京</li>
            <li class="city hot">北京</li>
            <li class="city hot">北京</li>
            <li class="city hot">北京</li>
          </ul>
        </section>
        <section class="citys">
          <p class="letter">热门城市</p>
          <ul class="clearfix">
            <li class="city ">北京</li>
            <li class="city ">北京</li>
            <li class="city ">北京</li>
            <li class="city ">阿拉</li>
            <li class="city ">北京</li>
            <li class="city ">北京</li>
            <li class="city ">北京</li>
            <li class="city ">北京</li>
            <li class="city ">北京</li>
            <li class="city ">北京</li>
            <li class="city ">北京</li>
          </ul>
        </section>
      </div>
      <div class="service">
        <p class="phone">客服电话:
          <span class="tel">10109777</span>
        </p>
      </div>
    </section>
    <footer class="footer" v-if="showDownLoad">
      <span class="close"><i class="icon-crossregu"></i></span>
      <a href="" class="logo">
        <img src="../../assets/imgs/logo.png">
      </a>
      <span class="desc">多重优惠仅限客户端享用</span>
      <button class="down_btn">立享优惠</button>
    </footer>
  </div>
</template>

<script>
import Header from './Header.vue'
import service from 'assets/config/service'

export default {
  name: 'location',
  components: {
    'f-header': Header
  },
  data () {
    return {
      addresses: [],
      showPosition: false,
      showDownLoad: false,
      showAddress: false,
      showTip: false,
      cities: ''
    }
  },
  methods: {
    getCities () {
      this.$http.post(service.getCities)
        .then(response => {
          this.cities = response.body
        })
        .catch(err => err)
    }
  },
  mounted () {
    this.getCities()
  }
}
</script>

<style lang="less">
  @import "../../assets/less/location.less";
</style>
