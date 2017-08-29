
(1)检测集群状态  
```
GET /_cat/health?v  
```

(2)集群节点状态  
```
GET /_cat/nodes?v
```

(3)索引状态  
```
GET /_cat/indices?v
```

(4)创建索引  
```
PUT /index?pretty
```

(5)新增记录  
```
POST /index/type/[id]?pretty
{
  "field_name":"field_value"
}

# 查询记录  
GET /customer/external/1?pretty
```

(6)新增记录（不带 ID，随机分配）  
```
POST /index/type?pretty
{
  "field_name": "field_value"
}
```

(7)更新数据  
```
POST /index/type/[id]/_update?pretty
{
  "doc":{"field_name":"field_value"}
}
```

(8)覆盖更新  
```
PUT /index/type/[id]?pretty
{
  "field_name":"field_value"
}
```

(9)使用脚本更新  
```
POST /index/type/[id]/_update?pretty
{
  "script": "ctx._source.[field] += [value]"
}
```

(10)删除文档  
```
DELETE /index/type/[id]?pretty
```

(11)删除索引  
```
DELETE /index?pretty
```

(12)批量处理(_bulk)
```
POST /index/type/_bulk?pretty
{"index":{"_id":"[id]"}}
{"field_name":"field_value"}
{"create":{"_id":"[id]"}}
{"field_name":"field_value"}
{"update":{"_id":"[id]"}}
{"doc":{"field_name":"field_value"}}
{"delete":{"_id":"[id]"}}
# index 和 create 的区别：create 是文档不存在则创建，index 是创建新文档或替换已有文档
```

(13)导入数据
```
# 与 _bulk 类似，创建 import.json
{"index":{"_id":"[id]"}}
{"field_name": "field_value"}

# 执行导入
curl -XPOST 'host:port/index/type/_bulk?pretty&refresh' --data-binary "@import.json"
