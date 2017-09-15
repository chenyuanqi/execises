import Layout from '../views/layout/Common';
import DemoList from '../views/demo/DemoList';
import DemoAdd  from '../views/demo/DemoAdd';
import DemoEdit from '../views/demo/DemoEdit';

const demoRouter = {
    path: 'demo',
    meta: {breadcrumb: '案例'},
    component: Layout,
    children: [
        {path: '', name: 'demo-list', component: DemoList, meta: {breadcrumb: '案例列表'}},
        {path: 'add', name: 'demo-add', component: DemoAdd, meta: {breadcrumb: '案例添加'}},
        {path: ':id', name: 'demo-edit', component: DemoEdit, meta: {breadcrumb: '案例编辑'}}
    ],
};

export default demoRouter;