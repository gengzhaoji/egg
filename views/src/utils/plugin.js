const MyPlugin = {};

MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
        // 逻辑...
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', {
        bind(el, binding, vnode, oldVnode) {
            // 逻辑...
        }
    })

    // 3. 注入组件选项
    Vue.mixin({
        created: function () {
            // 逻辑...
        }
    })

    // 全局弹窗函数
    Vue.prototype.$dialog = function (title, content, opts) {
        const vm = new Vue({
            router: this.$router,
            store: this.$store,
            data: {
                title: title,
                visible: true
            },
            // 继承该组件
            // extends: base,
            methods: {
                dismiss() {
                    this.visible = false
                    setTimeout(() => {
                        document.body.removeChild(this.$el)
                        opts && opts.on && opts.on.closed && opts.on.closed()
                    }, 100)
                },
                close(res) {
                    this.visible = false
                    opts && opts.on && opts.on.closed && opts.on.closed(res ? res : '')
                }
            },
            render(h) {
                const dialogOption = {
                    props: {
                        ...(opts && opts.props || {})
                    },
                    on: {
                        ...(opts && opts.on || {}),
                        close: (b) => this.close(b)
                    }
                }
                return h('el-dialog', {
                    props: {
                        title: this.title,
                        center: true,
                        visible: this.visible,
                        'show-close': true,
                        width: opts.width
                    },
                    on: {
                        ['updata:visible']: () => this.close(),
                        close: () => this.close(),
                        closed: () => this.dismiss()
                    }
                }, [h('ElContent', {
                    refInFor: true,
                    ...dialogOption
                })]);
            },
            components: {
                //基本框架
                // ElBase: base,
                // 内容组件
                ElContent: content
            }
        });
        // 添加到文档流中
        document.body.appendChild(vm.$mount().$el);
    }
}
export default MyPlugin