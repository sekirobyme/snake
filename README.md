# V1.0.0
蛇头的移动

解决以下问题
- 蛇的头部不能转向运动的相反方向即蛇只能前左右转向

## Note
20230221:
- 替代原本无限刷新的方法，单纯的改变`top`和`right`的值无法被很好的存储下来，目前改为以地图左下角为原点，用全局变量蛇身的每点坐标并依次储存在`snake[]`中，调用全局定时器触发新增的画蛇方法`drawSnake()`

# v1.0.1
蛇身的移动
食物的随机刷新

解决以下问题
- 每次触发`drawSnake()`需将`snakePosition[]`坐标依次向蛇尾传递并舍弃蛇尾坐标(`unshift()`,`pop()`)

## Note
20230221:
- 需新增刷新地图的方法，移除数组元素并没有移除`div`，未来可能会考虑将`div`作为数组元素
- 定时器应给`move()`

20230222:
- 增加一个初始位置，目前没有找到好的替代方法，`move()`需要与程序一起执行，否则会导致头部坐标向下污染，未来增加一个开始按钮
- 更改``move()中递增值,具体取值依照蛇身弯度，未来修改样式时再改`

# v1.0.2
获取食物蛇身变长  
死亡判断
- 触碰边界
- 触碰蛇身

## Note
