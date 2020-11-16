<template>
  <el-select
    v-model="s_value"
    v-on="$listeners"
    v-bind="$attrs"
    :dataType='dataType'
  >
    <slot>
      <el-option
        v-for="item in options"
        :key='item.value'
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      ></el-option>
    </slot>
    <slot
      name='prefix'
      slot="prefix"
    ></slot>
    <slot
      name='empty'
      slot="empty"
    ></slot>
  </el-select>
</template>
 
<script>
export default {
  name: "com_select",
  /***
   * 参数属性
   * @property {Object[]} value 默认值
   * @property {list[]} list 下拉列表数据
   * @property {Boolean} needAll 是否需要全部选项，默认为false
   * @property {Object} fillType 数据格式默认为{'label':'label','value':'value'}
   * @property {String} dataType 返回的数据类型
   *
   */
  props: {
    value: {},
    list: {
      type: Array,
      default: () => []
    },
    needAll: {
      type: Boolean,
      default: () => false
    },
    fileType: {
      type: Object,
      default: function() {
        return {
          label: "label",
          value: "value"
        };
      }
    },
    dataType: ""
  },
  data() {
    return {
      s_value: this.value,
      options: []
    };
  },
  watch: {
    value(val) {
      this.s_value = val;
    },
    s_value(val) {
      this.$emit("input", val);
    },
    list(val) {
      this.options = this.fileTypeFn(val);
      if (this.needAll) {
        this.options = this.needAllFn(this.options);
      }
    }
  },
  mounted() {
    this.options = this.fileTypeFn(this.list);
    if (this.needAll) {
      this.options = this.needAllFn(this.options);
    }
  },
  methods: {
    fileTypeFn(data) {
      let _data = [];
      data.forEach((val, i) => {
        _data[i] = {
          label: val[this.fileType.label],
          value: val[this.fileType.value],
          disabled: val[this.fileType.disabled] || false
        };
      });
      return _data;
    },
    needAllFn(data) {
      const num = JSON.stringify(data).includes(
        JSON.stringify({ label: "全部", value: "" })
      );
      if (!num) {
        data.unshift({ label: "全部", value: "" });
      }
      return data;
    }
  }
};
</script>