<template>
  <section class="header-box">
    <a-row>
      <a-col :span="16">
        <a-row>
          <a-col :span="4">
            <img class="logo" src="../assets/imgs/logo.png" alt="logo" />
          </a-col>
          <a-col :span="4" v-for="nav of navs"
            ><a>{{ nav.name }}</a></a-col
          >
        </a-row>
      </a-col>
      <a-col :span="4" :offset="4"
        ><a @click="$router.push('/user')">登录 - 注册</a></a-col
      >
    </a-row>
  </section>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      navs: [{ name: "首页" }, { name: "文章" }, { name: "关于" }]
    };
  },
});
</script>


<style lang="scss">
.logo {
  width: 36px;
}
.header-box {
  width: 100%;
  height: 40px;
  margin: 0;
  border-bottom: 1px solid $gray30;
  background: white;
  transition: 0.5s;
  &:hover {
    box-shadow: 0px 10px 10px rgba(240, 240, 240, 0.9);
    // height: 50px;
  }
}
.ant-row {
  width: 1200px;
  margin: 0 auto;
  div {
    line-height: 40px;
    cursor: pointer;
    a {
      display: block;
    }
    &:hover > a {
      color: white;
      background: $main-color;
    }
  }
}
</style>

