<template>
    <Row type="flex">
        <Col span="24">
            <Form ref="formItem" :model="formItem" :rules="formRule" :label-width="80">
                <FormItem label="用户名" prop="name">
                    <Input v-model="formItem.name" placeholder="请输入用户名"></Input>
                </FormItem>

                <FormItem label="邮箱" prop="email">
                    <Input v-model="formItem.email" placeholder="请输入邮箱"></Input>
                </FormItem>

                <FormItem label="联系电话" prop="phone">
                    <Input v-model="formItem.phone" placeholder="请输入联系电话"></Input>
                </FormItem>

                <FormItem label="家庭住址" prop="address">
                    <Input v-model="formItem.address" placeholder="请输入家庭住址"></Input>
                </FormItem>

                <FormItem label="是否激活" prop="is_activate">
                    <i-switch v-model="formItem.is_activate" size="large">
                        <span slot="1">激活</span>
                        <span slot="0">不激活</span>
                    </i-switch>
                </FormItem>

                <FormItem label="年薪" prop="yearly_salary">
                    <Select v-model="formItem.yearly_salary" placeholder="请选择">
                        <Option value="10">10 万</Option>
                        <Option value="20">20 万</Option>
                        <Option value="30">30 万</Option>
                        <Option value="40">40 万</Option>
                        <Option value="50">50 万</Option>
                    </Select>
                </FormItem>

                <FormItem label="出生日期" prop="birthday">
                    <Row>
                        <Col span="10">
                            <DatePicker type="date" placeholder="选择出生日期" v-model="formItem.birthday"></DatePicker>
                        </Col>
                    </Row>
                </FormItem>

                <FormItem label="背景描述" prop="description">
                    <Input v-model="formItem.description" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
                </FormItem>

                <FormItem>
                    <Button type="primary" @click="handleSubmit('formItem')">提交</Button>
                    <Button type="ghost"  @click="handleReset('formItem')" style="margin-left: 8px">取消</Button>
                </FormItem>
            </Form>
        </Col>
    </Row>
</template>
<script>
    export default{
         data () {
            const validatePhone = (rule, value, callback) => {
                if (!/^1[34578]\d{9}$/.test(value)) {
                    callback(new Error('联系电话不合法'));
                } else {
                    callback ();
                }
            };

            return {
                formItem: {
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    is_activate: true,
                    yearly_salary: '',
                    birthday: '',
                    description: ''
                },
                formRule: {
                    name: [
                        {type: 'string', required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    email: [
                        {required: true, message: '邮箱不能为空', trigger: 'blur'},
                        {type: "email", message: '邮箱不满足邮箱规则', trigger: 'blur'}
                    ],
                    phone: [
                        {required: true, message: '联系电话不能为空', trigger: 'blur'},
                        validatePhone
                    ],
                    birthday: [
                        {required: true, message: '出生日期不能为空', trigger: 'blur'},
                        {type: 'date', message: '出生日期格式为 YYYY-MM-DD', trigger: 'change'}
                    ],
                    description: [
                        {required: true, message: '背景描述不能为空', trigger: 'blur'},
                        {type: "string", len: [8, 1000], message: '背景描述不少于 8 个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        },
        mounted () {
            console.log(this.$parent['activeName']);
            this.$parent.getActiveRouterName;//$emit('getActiveRouterName');
        }
    }
</script>
