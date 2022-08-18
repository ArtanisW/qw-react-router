# 常见问题
1. npm install之后husky报错提示不是git仓库
```
请在初始化git仓库后，再将轻轮脚手架迁移进去，确保文件夹中存在.git文件
```
2. 为什么提交git时会报错？
```
脚手架中增加了Husky钩子
1. 提交规范：参考commitlint.cofig.js
然后检查commit信息是否符合规范
2. 代码检查：pre-commit钩子会检查js和less文件是否符合规范，如果有错误则不能提交
```