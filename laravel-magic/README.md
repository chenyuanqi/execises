
(1)查看当前 sql
```php
# Illuminate\Support\helpers.php 增加如下方法
# 在查询前使用 sql(); 即可查看当前 sql
if (! function_exists('sql')) {
    /**
     * Output the sql sentence for your debug code.
     */
    function sql()
    {
        \DB::listen(function($sql, $bindings, $time) {
            foreach ($bindings as $replace){
                $value = is_numeric($replace) ? $replace : "'".$replace."'";
                $sql = preg_replace('/\?/', $value, $sql, 1);
            }
            dd($sql, $time);
        });
    }
}
```
