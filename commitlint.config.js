module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      // 可以自定义
      ['feat', 'fix', 'doc', 'style', 'refactor', 'build', 'revert', 'merge'],
    ],
  },
};
/*
Git提交规范：[type][英文冒号][空格][提交信息]
示例：feat: 新增git配置
type可选值
feat: 新增功能；
fix: 修复bug；
doc: 文档修改
style: 格式优化；不是CSS修改！
refactor: 重构
build: 构建配置修改
revert: 回滚
merge: 合并
...
*/
