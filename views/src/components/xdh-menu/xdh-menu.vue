<script>
/**
 * 菜单组件
 * @module widgets/xdh-menu
 * @example
 *
 * // 使用说明
 */
export default {
  name: "XdhMenu",
  /**
   * 属性参数
   * @property {Array} [data = []] data 构成菜单内容的数组
   * @property {Object} [props = { id: 'id', text: 'text', icon: 'icon', children: 'children', group: 'group', route: 'route' }] props 指引菜单组件根据data数组中元素的键名作为菜单中对应的显示内容。例如：数组内元素为 {g_id:1, str:'第一组'}, 可以通过设置"props={id: 'g_id', text: 'str'}"来将数组的g_id对应为id，str对应为text
   */
  props: {
    // 菜单数据
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    // 数据字段名称映射
    props: {
      type: Object,
      default() {
        return {
          id: "id",
          text: "text",
          icon: "icon",
          children: "children",
          group: "group",
          route: "route"
        };
      }
    }
  },
  methods: {
    grouping(array) {
      let groups = {
        default: []
      };
      let props = this.props;
      array.forEach(n => {
        let key = n[props.group];
        if (key) {
          groups[key] = groups[key] || [];
          groups[key].push(n);
        } else {
          groups["default"].push(n);
        }
      });
      return groups;
    },
    createTitle(h, item) {
      return [
        h("i", {
          class: item[this.props.icon]
        }),
        h(
          "span",
          {
            slot: "title"
          },
          item[this.props.text]
        )
      ];
    },
    createItem(h, item) {
      const key = (item[this.props.id] || "").toString();
      return h(
        "el-menu-item",
        {
          props: {
            index: key,
            route: item[this.props.route]
          },
          key: key
        },
        this.createTitle(h, item)
      );
    },
    createSubmenu(h, item) {
      const key = (item[this.props.id] || "").toString();
      return h(
        "el-submenu",
        {
          props: {
            index: (item[this.props.id] || "").toString(),
            popperClass: this.popperClass
          },
          key: key
        },
        [
          h(
            "template",
            {
              slot: "title"
            },
            this.createTitle(h, item)
          ),
          this.createNodes(h, item[this.props.children])
        ]
      );
    },
    createGroup(h, title, items) {
      let nodes = [];
      let props = this.props;
      items.forEach(item => {
        if (item[props.children] && item[props.children].length > 0) {
          nodes.push(this.createSubmenu(h, item));
        } else {
          nodes.push(this.createItem(h, item));
        }
      });
      nodes.unshift(
        h(
          "template",
          {
            slot: "title"
          },
          title
        )
      );
      return h("el-menu-item-group", null, nodes);
    },
    createNodes(h, array) {
      let nodes = [],
        groups = this.grouping(array);
      let props = this.props;
      for (let key in groups) {
        let items = groups[key] || [];
        if (key === "default") {
          items.forEach(item => {
            if (item[props.children] && item[props.children].length > 0) {
              nodes.push(this.createSubmenu(h, item));
            } else {
              nodes.push(this.createItem(h, item));
            }
          });
        } else {
          nodes.push(this.createGroup(h, key, items));
        }
      }
      return nodes;
    },
    open(index) {
      this.$refs.menu.open(index);
    },
    close(index) {
      this.$refs.menu.close(index);
    }
  },
  render(h) {
    return h(
      "el-menu",
      {
        props: {
          ...this.$props
        },
        style: {
          border: "none"
        },
        attrs: this.$attrs,
        on: this.$listeners,
        ref: "menu"
      },
      this.createNodes(h, this.data)
    );
  }
};
</script>
