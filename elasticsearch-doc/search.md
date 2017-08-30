
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
# include_lower 是否包含小于等于，include_upper 是否包含大于等于
GET /index/_search
{
  "query": {
    "range": {
      "field_name": {
        "gte": "field_value",
        "lte": "field_value",
        "include_lower": false/true,
        "include_upper": false/true
      }
    }
  }
}
```

(8)前缀匹配
```
GET /index/type/_search
{
  "query": {
    "prefix": {
      "field_name": {
        "value": "field_value"
      }
    }
  }
}
```

(9)模糊查询
```
# 通配符 * 代表一个或多个字符，? 仅代表一个
GET /index/type/_search
{
  "query": {
    "wildcard": {
      "field_name": {
        "value": "field_value"
      }
    }
  }
}
```

```
# boost 权重配置，min_similarity 最小相似度，prefix_length 分词项共同前缀长度
GET /index/type/_search
{
  "query": {
    "fuzzy": {
      "field_name": {
        "value": "field_value",
        "boost": [default: 1.0],
        "min_similarity": [default: 0.5, value: 0~1 / 2d etc.],
        "prefix_length": [default: 0]
      }
    }
  }
}
```

(10)mget 查询
```
GET /index/type/_search
{
  "docs": [
    { "_id": [number] }
  ]
}

# 多个 id
GET /index/type/_search
{
  "ids": [numbers, numbers]
}
```

(11) term 查询
```
# 处理匹配查询，也可查询某数值在数组中
GET /index/type/_search
{
   "query": {
      "term": {
         "field_name": "field_value"
      }
   }
}
```
