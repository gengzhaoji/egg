<template>
  <div class="layout">
    <el-container>
      <!--头部-->
      <el-header>
        <el-dropdown>
          <i
            class="el-icon-setting"
            style="margin-right: 15px"
          ></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <!--中部-->
      <el-container>
        <!--菜单栏-->
        <el-aside
          :width='aside_width'
          style="transition: all 0.2s;"
        >
          <div
            class="btn"
            @click="collapse = !collapse"
          >
            <i :class="[collapse?'el-icon-s-fold':'el-icon-s-unfold']"></i>
          </div>
          <xdh-menu
            :data="menus"
            :collapse="collapse"
            :default-active="$route.path"
            @select="navSelect"
            :collapse-transition="false"
            background-color="#1b82c7"
            text-color="#fff"
            active-text-color="#ffd04b"
          ></xdh-menu>
        </el-aside>
        <!--内容区-->
        <el-main>
          <transition name="el-zoom-in-top">
            <keep-alive>
              <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
          </transition>
          <transition name="el-zoom-in-top">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
 
<script>
import XdhMenu from "@/components/xdh-menu/xdh-menu.vue";

export default {
  name: "layout",
  components: {
    XdhMenu
  },
  data() {
    return {
      // 菜单列表
      menus: [
        {
          id: "/",
          text: "首页",
          icon: "el-icon-tickets",
          path: "/"
        },
        {
          id: "/ceshi",
          text: "测试页面",
          icon: "el-icon-tickets",
          path: "/ceshi"
        },
        {
          text: "导航一",
          icon: "el-icon-tickets",
          children: [
            {
              id: "/",
              text: "首页",
              path: "/"
            },
            {
              id: "/ceshi",
              text: "测试页面",
              path: "/ceshi"
            }
          ]
        }
      ],
      collapse: false
    };
  },
  computed: {
    aside_width: function() {
      return this.collapse ? "65px" : "200px";
    }
  },
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    navSelect(id, path) {
      this.$router.push(id);
    }
  }
};
</script>
 
<style scoped lang = "scss">
$--color-background: rgba(142, 207, 249, 0.72);
.layout {
  height: 100%;
  width: 100%;
  display: flex;
  .el-aside {
    background-color: #1b82c7;
    .btn {
      color: #fff;
      height: 40px;
      width: 100%;
      line-height: 40px;
      background: #1b7cbe;
      cursor: pointer;
      text-align: center;
      i {
        font-size: 22px;
        line-height: 40px;
      }
    }
    /deep/.el-submenu__title {
      font-size: 16px;
      &:hover {
        background-color: $--color-background !important;
      }
      i {
        color: #fff;
        font-size: 18px;
      }
    }
    /deep/.el-submenu .el-menu-item {
      padding: 0 0 0 45px;
      height: 40px;
      line-height: 40px;
    }
    /deep/.el-menu-item {
      color: #fff;
      &.is-active,
      &:hover,
      &:focus {
        background-color: $--color-background !important;
      }
      [class^="el-icon-"] {
        color: #fff;
      }
    }
  }
}
</style>
<style lang="scss">
$--color-background: rgba(142, 207, 249, 0.72);
.el-menu-item {
  color: #fff;
  height: 40px;
  line-height: 40px;
  &.is-active,
  &:hover {
    background-color: $--color-background !important;
  }
}
</style>
