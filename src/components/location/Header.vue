<template>
  <header class="header">
    <a href="" class="logo">
      <img src="../../assets/imgs/logo.png">
    </a>
    <h3 class="title" v-if="!city">选择城市</h3>
    <p class="msg" v-else>
      <span class="city">南京<i class="city_icon"></i></span>
      <span class="mine"><i class="mine_icon"></i>我的</span>
    </p>
  </header>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      city: ''
    }
  }
}
</script>
