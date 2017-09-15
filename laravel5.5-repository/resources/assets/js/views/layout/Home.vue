<template>
    <Row type="flex">
        <Col span="24">

        <!-- Button and Search Section -->
        <Row type="flex">
            <Col span="4">
            <Input placeholder="输入案例名称" shape="circle" style="width: 95%"/></Input>
            </Col>
            <Col span="4">
            <Button type="primary" icon="search" shape="circle" class="search-btn">查询</Button>
            </Col>
            <Col justify="end" span="2" offset="14">
            <Button type="primary" icon="plus" shape="circle" class="add-btn">添加案例</Button>
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
                   :columns="columns"
                   :data="data">
            </Table>
            <!-- Loading ... -->
            <Spin fix size="large" v-show="spinShow"></Spin>
            </Col>
        </Row>

        <!-- Pagination Section -->
        <Row type="flex" justify="end" class="code-row-bg">
            <Col span="8" offset="16">
            <Page :total="8"
                  :current="1"
                  :page-size="3"
                  show-elevator
                  show-sizer
                  :page-size-opts="[15, 30, 45, 100]">
            </Page>
            </Col>
        </Row>

        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                spinShow: false,
                columns: [
                    {
                        title: 'ID',
                        key: 'id',
                        width: 100,
                        sortable: 'custom',
                        fixed: 'left',
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        width: 100
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: '省份',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: '市区',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: '地址',
                        key: 'address',
                        width: 300
                    },
                    {
                        title: '邮编',
                        key: 'zip',
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
                                            this.edit(params.row.id);
                                        }
                                    },
                                    style: {
                                        marginRight: '5px'
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        icon: 'trash-a',
                                        size: 'small',
                                        shape: 'circle'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.row.id);
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data: [
                    {
                        id: 1,
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        province: '北京市',
                        city: '朝阳区',
                        zip: 100000
                    },
                    {
                        id: 2,
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        province: '北京市',
                        city: '海淀区',
                        zip: 100000
                    },
                    {
                        id: 3,
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        province: '上海市',
                        city: '浦东新区',
                        zip: 100000
                    },
                    {
                        id: 4,
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        province: '广东',
                        city: '南山区',
                        zip: 100000
                    },
                    {
                        id: 5,
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        province: '北京市',
                        city: '朝阳区',
                        zip: 100000
                    },
                    {
                        id: 6,
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        province: '北京市',
                        city: '海淀区',
                        zip: 100000
                    },
                    {
                        id: 7,
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        province: '上海市',
                        city: '浦东新区',
                        zip: 100000
                    },
                    {
                        id: 8,
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        province: '广东',
                        city: '南山区',
                        zip: 100000
                    }
                ]
            }
        }
    }
</script>