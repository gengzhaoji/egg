<template>
  <div class="index">
    <xdh-table
      :data="tableData"
      :columns="columns"
      stripe
      v-loading="loading"
      border
      size="small"
    ></xdh-table>
  </div>
</template>
 
<script>
import XdhTable from "@/components/xdh-table/xdh-table.vue";
/**
 * 接口部分
 */
import { checkStatus } from "@/api";

export default {
  name: "index",
  components: {
    XdhTable
  },
  data() {
    return {
      loading: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      columns: [
        {
          type: "index"
        },
        {
          label: "日期",
          prop: "date"
        },
        {
          label: "姓名",
          prop: "name"
        },
        {
          label: "地址",
          prop: "address"
        }
      ]
    };
  },
  methods: {
    checkStatus(keyword) {
      checkStatus({ keyword: keyword })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.checkStatus("gp_config_etl_monitor_pic");
    this.checkStatus("gp_config_etl_monitor");
  },
  created() {}
};
</script>
 
<style scoped lang = "scss">
.index {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>