<template>
  <div class="welcome">
    <div class="welcome_info">
      <span class="welcome_info_title-sub">欢迎使用</span>
      <h2 class="welcome_info_title">后台管理系统</h2>
      <p class="welcome_info_desc">
        <i>——</i> 易用，美观，通用的后台管理系统
        (Vite,TypeScript,Vue3.x,Pinia,Vue-router,Element-Plus)
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.welcome {
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &_info {
    margin: 0 20px;
    &_title-sub {
      font-size: 30px;
      color: #333;
    }
    &_title {
      font-size: 40px;
      font-weight: normal;
      color: skyblue;
    }
    &_desc {
      font-size: 14px;
      text-align: right;
      color: #999;
    }
  }
}
</style>
