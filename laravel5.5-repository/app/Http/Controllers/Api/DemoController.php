<?php

namespace App\Http\Controllers\Api;

use App\Models\Demo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DemoController extends Controller
{
    /**
     * Demo list.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function index(Request $request)
    {
        $pageSize = (int)$request->get('page_size', 10);

        return response(Demo::OfName(trim($request->get('name', '')))->paginate($pageSize));
    }

    /**
     * Demo detail.
     *
     * @param \App\Models\Demo $demo
     * @param $id
     *
     * @return \App\Models\Demo
     */
    public function show(Demo $demo, $id)
    {
        return $demo->find($id);
    }

    public function store(Request $request)
    {

    }

    public function update(Request $request, $id)
    {

    }

    /**
     * Delete demo by id.
     *
     * @param \App\Models\Demo $demo
     * @param                  $id
     *
     * @return bool|null
     */
    public function delete(Demo $demo, $id)
    {
        $result['status'] = 0;

        if ($data = $demo->find($id)) {
            $data->delete();
            $result['status'] = 1;
        }

        return response($result);
    }
}
