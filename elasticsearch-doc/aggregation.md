
(1)统计与平均聚合
```
# 统计查询中某字段出现次数
GET /index/type/_search
{
  "aggs": {
    "count_field_name": {
      "terms": { "field": "field_name" }
    }
  }
}

# 统计查询中某字段的平均值
GET /index/type/_search
{
  "aggs": {
    "avg_field_name": {
      "avg": { "field": "field_name" }
    }
  }
}
```
