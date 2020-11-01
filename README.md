# Vue-
关于Vue源码的学习（从手写模仿到理解代码）

# Vue模板

使用步骤:
1. 编写页面模板
  1. 直接在HTML标签中写标签
  2. 使用template
  3. 使用单文件(<template/>)
2. 创建Vue实例
  1. 在Vue的构造函数中提供：data, methods, computed, watcher, props, ...
3. 将Vue挂在到页面中(mount)

# 数据驱动模型

Vue的执行流程

1. 获得模板：模板中有“坑”
2. 利用Vue构造函数中所提供的数据来“填坑”，得到可以在页面中显示的标签
3. 将标签替换页面中原来有坑的标签

Vue利用我们提供的数据和