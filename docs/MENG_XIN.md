# 萌新指南
## Web开发IDE及插件
1. [VS Code](https://code.visualstudio.com/download)
2. 必装插件：
```
ESLint
Stylelint
Prettier
Open in Browser
ES7+React/Redux/React-Native/JS snippets
```
## Node.js及npm
官网[下载](http://nodejs.cn/)Node.js并安装  
也可以使用[Nvm](https://github.com/coreybutler/nvm-windows)进行安装
```
注意：
（1）截至当前，Node.js的LTS版本为16.16.0，建议使用此版本及以上（否则部分npm包，比如lint-staged由于使用ES6 Module，在低版本Node不能正常使用，会出现Error: Must use import to load ES Module）
（2）如果曾使用nvm低版本及node低版本，在切换为Node 16+时，可能会遇到Unexpected token '.'的报错，解决方案为升级nvm并重装Node 16+。
（3）配置nvm的镜像源为国内，否则可能下载很慢
nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror  https://npm.taobao.org/mirrors/npm/
```
## 配置npm仓库源
```
// 方案一：可以直接切换为taobao
npm config set registry https://registry.npm.taobao.org
// 方案二：全局安装源管理器
npm i -g nrm
// 列出软件源
nrm ls
// 选择目标源
nrm use taobao
```
