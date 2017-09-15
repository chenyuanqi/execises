<template>
    <div class="layout">
        <Row type="flex">

            <!-- Menu setting. -->
            <Col span="3" class="layout-menu-left">
                <Menu :active-name="activeName" theme="dark" width="auto"
                      :open-names="['home', 'demo']"
                      :accordion="accordion"
                      @on-select="onSelect">
                    <!-- Logo picture. -->
                    <div class="layout-logo-left"></div>

                    <Submenu name="home">
                        <template slot="title">
                            <Icon type="home"></Icon>
                            主页
                        </template>
                        <Menu-item name="home">首页数据</Menu-item>
                    </Submenu>

                    <Submenu name="demo">
                        <template slot="title">
                            <Icon type="navicon"></Icon>
                            案例
                        </template>
                        <MenuItem name="demo-list">案例列表</MenuItem>
                        <MenuItem name="demo-add">案例添加</MenuItem>
                    </Submenu>
                </Menu>
            </Col>

            <Col span="21">
                <!-- Header instruct and Bread Crumb -->
                <div class="layout-header">
                    <Row type="flex" justify="end" align="middle">
                        <Col span="24">
                            <div class="layout-header-dropdown">
                                <Dropdown placement="bottom-end">
                                    <Icon type="person" size="14"></Icon> <strong>{{ manager }}</strong>
                                </Dropdown>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <template v-for="(item, index) in $route.matched">
                            <Breadcrumb-item v-if="item.parent !== undefined"
                                             :href="item.path">
                                {{item.meta.breadcrumb}}
                            </Breadcrumb-item>
                            <Breadcrumb-item v-else :href="item.path">首页</Breadcrumb-item>
                        </template>
                    </Breadcrumb>
                </div>

                <!-- Body Section -->
                <div class="layout-content">
                    <div class="layout-content-main">
                        <router-view/>
                    </div>
                </div>

                <!-- Footer Section -->
                <div class="layout-copyright">
                    2016-2017 &copy; repositoryDemo.
                </div>
            </Col>
        </Row>

        <!-- Back to top Section -->
        <BackTop :height="100"></BackTop>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                accordion: false,
                activeName: '',
                manager: ''
            }
        },
        methods: {
            // Jump to the router path where select navigation menu by name.
            onSelect(name) {
                this.$router.push({ name });
            },
            // Get active router name.
            getActiveRouterName () {
                for (let item in this.$route.matched) {
                    if (this.$route.path === this.$route.matched[item].path) {
                        this.activeName = this.$route.matched[item].name;
                    }
                }
            }
        },
        mounted () {
            this.getActiveRouterName();
            this.manager = window.Laravel.manager;
        }
    }
</script>
<style scoped>
   .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 750px;
        margin: 15px 15px 0px 15px;
        overflow: hidden;
        background: #ffffff;
        border-radius: 4px;
        padding-bottom: 150px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copyright{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #495060;
        min-height: 930px;
    }
    .layout-menu-left b.span-logo{
        font-size: 8px;
        color: red;
    }
    .layout-header{
        height: 60px;
        background: #ffffff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 80%;
        height: 40px;
        background: url('/images/logo.png') no-repeat center;
        background-size: 180px;
        border-radius: 3px;
        margin: 15px auto;
        color: #ffffff;
        font-size: 18px;
        text-align: center;
        line-height: 31px;
    }
    .layout-header-dropdown{
        float:right;
    }
    .top{
        background: #363a49;
        text-align: center;
        border-radius: 2px;
    }
    .ivu-row-flex-middle{
      position: fixed;
      width: 78%;
      background-color: #ffffff;
      height: 60px;
      box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
</style>