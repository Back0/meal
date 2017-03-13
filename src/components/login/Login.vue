<template>
  <div class="page login">
    <heder class="header">
      <span class="back_btn"> < </span>
      <span class="register_btn">立即注册</span>
      <h3 class="title">登录</h3>
    </heder>
    <div class="container">
      <ul class="login_tab">
        <li class="tab_item active">手机验证登录</li>
        <li class="tab_item">美团账号登录</li>
      </ul>
      <section class="tab_content">
        <div class="form">
          <div class="input_group">
            <img src="../../assets/imgs/icon_signin_phone.png" alt="" class="img_icon">
            <input type="phone" placeholder="请输入手机号">
            <button class="code_btn">获取验证码</button>
          </div>
          <div class="input_group">
            <img src="../../assets/imgs/icon_phone_check_code.png" alt="" class="img_icon">
            <input type="phone" placeholder="请输入手机验证码">
          </div>
          <div class="input_group phone_number">
            <p class="tip">未注册过手机将自动注册为美团账户</p>
          </div>
        </div>
        <div class="form">
          <div class="input_group">
            <img src="../../assets/imgs/icon_login_user.png" alt="" class="img_icon">
            <input type="phone" placeholder="请输入手机号">
          </div>
          <div class="input_group">
            <img src="../../assets/imgs/icon_login_password.png" alt="" class="img_icon">
            <input type="phone" placeholder="请输入手机验证码">
          </div>

        </div>
      </section>
      <div class="btn_wrapper">
        <button class="login_btn">
          登录
        </button>
      </div>
      <div class="forget">
        <a href="" class="forget_pwd">忘记密码</a>
      </div>
      <div class="tips">
        <span class="tip">说明:注册/登录说明您已同意</span>
        <a href="" class="agreement">《美团用户协议》</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="less">
  @import "../../assets/less/login.less";
</style>
