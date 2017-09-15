<template>
    <Row type="flex">
        <Col span="24">

        <!-- Button and Search Section -->
        <Row type="flex" v-show="!spinShow">
            <Col span="4">
                <Input v-model="searchItem.name" placeholder="输入案例名称" shape="circle" style="width: 95%"/></Input>
            </Col>
            <Col span="4">
                <Button type="primary" icon="search" shape="circle" class="search-btn" @click="search(searchItem)">查询</Button>
            </Col>
            <Col justify="end" span="2" offset="14">
                <Button type="primary" icon="plus" shape="circle" class="add-btn" @click="add">添加案例</Button>
            </Col>
        </Row>

        <!-- Blank Line -->
        <Row type="flex">
            <Col span="24">&nbsp;</Col>
        </Row>

        <!-- Table Section -->
        <Row type="flex">
            <Col span="24">
                <Table border
                       stripe
                       :columns="columnsFormat"
                       :data="demoData">
                </Table>
                <!-- Data loading... -->
                <Spin fix size="large" v-show="spinShow"></Spin>
            </Col>
        </Row>

        <!-- Blank Line -->
        <Row type="flex">
            <Col span="24">&nbsp;</Col>
        </Row>

        <!-- Pagination Section -->
        <Row type="flex" style="float: right;">
            <Col span="24">
                <Page v-show="!spinShow"
                      @on-change="changePage"
                      @on-page-size-change="changePageSize"
                      :total="totalRecord"
                      :current="currentPage"
                      :page-size="pageSize"
                      show-elevator
                      show-sizer
                      :page-size-opts="pageOptions">
                </Page>
            </Col>
        </Row>

        </Col>
    </Row>
</template>
<script>
    import { mapState } from 'vuex';
    import { DEMO } from '../../store/api';

    export default {
        methods: {
            init() {
                this.commonSearch({
                    page: this.$route.query.page ? this.$route.query.page : 1,
                    page_size: this.pageSize
                });
            },
            search(data) {
                this.commonSearch({
                    page: this.$route.query.page ? this.$route.query.page : 1,
                    page_size: this.pageSize,
                    name: data.name.trim()
                });
            },
            add() {
                this.$router.push({ name: 'demo-add' });
            },
            changePage(page) {
                this.commonSearch({
                    page: page,
                    page_size: this.pageSize
                });
            },
            changePageSize(pageSize) {
                this.commonSearch({
                    page: this.$route.query.page ? this.$route.query.page : 1,
                    page_size: pageSize
                });
            },
            commonSearch(params) {
                this.$store.commit(DEMO.TOGGLE_SPIN);
                this.$store.dispatch(DEMO.FETCH, params);
                this.$store.commit(DEMO.TOGGLE_SPIN);
            },
            destroy(id) {
                this.$Modal.confirm({
                    title:      '警告',
                    content:    '是否删除此条内容？',
                    okText:     '确定',
                    cancelText: '取消',
                    onOk: () => {
                        this.$store.dispatch(DEMO.DELETE, { id });
                        this.init();
                    }
                });
            }
        },
        data () {
            return {
                searchItem: {
                    name: ''
                },
                columnsFormat: [
                    {
                        title: 'ID',
                        key: 'id',
                        width: 80,
                        sortable: 'custom',
                        fixed: 'left'
                    },
                    {
                        title: '用户名',
                        key: 'name',
                        width: 100
                    },
                    {
                        title: '邮箱',
                        key: 'email',
                        width: 200
                    },
                    {
                        title: '联系电话',
                        key: 'phone',
                        width: 200
                    },
                    {
                        title: '家庭住址',
                        key: 'address',
                        width: 400
                    },
                    {
                        title: '是否激活',
                        key: 'is_activate',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            const color          = params.row.is_activate ? 'green' : 'red' ;
                            const activateDetail = params.row.is_activate ? '已激活' : '未激活';

                            return h('div', [
                                h('Tag', {
                                    props: {
                                        closable: false,
                                        color: color,
                                        type: 'dot'
                                    }
                                },
                                activateDetail)
                            ]);
                        }
                    },
                    {
                        title: '年薪',
                        key: 'yearly_salary',
                        width: 80
                    },
                    {
                        title: '出生日期',
                        key: 'birthday',
                        width: 100
                    },
                    {
                        title: '删除时间',
                        key: 'deleted_at',
                        width: 180,
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'clock'
                                    }
                                },
                                ),
                                ` ${params.row.deleted_at}`
                            ]);
                        }
                    },
                    {
                        title: '最后操作人',
                        key: 'operator',
                        width: 100
                    },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 150,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        icon: 'edit',
                                        size: 'small',
                                        shape: 'circle'
                                    },
                                    on: {
                                        click: () => {
                                            this.$router.push(`/demo/${params.row.id}`);
                                        }
                                    },
                                    style: {
                                        marginRight: '5px'
                                    }
                                },
                                '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        icon: 'trash-a',
                                        size: 'small',
                                        shape: 'circle'
                                    },
                                    on: {
                                        click: () => {
                                            this.destroy(params.row.id);
                                        }
                                    }
                                },
                                '删除')
                            ]);
                        }
                    }
                ]
            }
        },
        computed: mapState({
            spinShow:    state => state.demo.spinShow,
            totalRecord: state => state.demo.totalRecord,
            currentPage: state => state.demo.currentPage,
            pageSize:    state => state.demo.pageSize,
            pageOptions: state => state.demo.pageOptions,
            demoData:    state => state.demo.demoData,
            demoResult:  state => state.demo.demoResult
        }),
        mounted() {
            this.init();
        },
    }
</script>