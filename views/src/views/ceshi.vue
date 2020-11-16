<template>
    <div class="ceshi">
        <div id="nav">
            <el-container>
                <el-header class="Header">Header</el-header>
                <el-main>
                    <el-row>
                        <el-button @click="dialogFn">默认按钮</el-button>
                        <el-button type="primary">主要按钮</el-button>
                        <el-button type="success">成功按钮</el-button>
                        <el-button type="info">信息按钮</el-button>
                        <el-button type="warning">警告按钮</el-button>
                        <el-button type="danger">危险按钮</el-button>
                        <span>
                            <el-color-picker
                                size="small"
                                v-model="color"
                            ></el-color-picker>
                        </span>
                    </el-row>
                </el-main>
            </el-container>
        </div>
    </div>
</template>
 
<script>
import themeMixin from "@/utils/theme";
export default {
  components: {},
  mixins: [themeMixin()],
  computed: {
    color: {
      get() {
        // 设置值
        document.body.style.setProperty(
          "--color",
          this.$store.state.uiTheme.color
        );
        return this.$store.state.uiTheme.color;
      },
      set(val) {
        this.$store.commit("uiTheme/change", val);
        // 设置值
        document.body.style.setProperty("--color", val);
      }
    }
  },
  methods: {
    dialogFn() {
    //   this.$dialog("ceshi", () => import("./views/ceshi.vue"), {
    //     width: "360"
    //   });
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
#nav {
  .Header {
    color: var(--color);
  }
}
</style>