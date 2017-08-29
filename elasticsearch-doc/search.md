
(1)查询全部  
```
GET /index/_search
{
  "query": {"match_all": {}}
}
```

(2)分页查询  
```
GET /index/_search
{
  "query": {"match_all": {}}, 
  "from": [number],
  "size": [number]
}
```

(3)排序  
```
GET /index/_search
{
  "query": {"match_all": {}},
  "sort": [
    {"field_name":"asc/desc"}
  ]
}
```

(4)指定字段  
GET /index/_search
{
  "query": {"match_all": {}},
  "_source": ["field_name", "field_name"]
}

(5)匹配查询
```
# field_value 为数值型则精确匹配，字符型则包含匹配（**空格代表逻辑或**）
GET /index/_search
{
  "query": {"match": {
    "field_name": "field_value"
  }}
}
```

(6)条件组合
```
# bool 查询，should 相当于逻辑或，must 相当于逻辑与，must_not 相当于逻辑非
GET /index/_search
{
  "query": {
    "bool": {
      "should": [
        {"match": {
          "field_name": "field_value"
        }},
        {"match": {
          "field_name": "field_value"
        }}
      ]
    }
  }
}
```

(7)区间查询
```
GET /index/_search
{
  "query": {
    "range": {
      "field_name": {
        "gte": "field_value",
        "lte": "field_value"
      }
    }
  }
}
```
