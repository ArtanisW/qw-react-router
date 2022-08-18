// 用于兼容多种环境变量的定义
const ENVS = {
  PUB: ['prod', 'pub', 'production'],
  QA: 'qa',
  PROFILE: 'profile',
  DEV: ['dev', 'development'],
};

let currentEnv = process.env.NODE_ENV;

// 线上环境
const isProduction = () => {
  return ENVS.PUB.includes(currentEnv);
};

// 测试环境
const isQA = () => {
  return currentEnv === ENVS.QA;
};

// 联调环境
const isProfile = () => {
  return currentEnv === ENVS.PROFILE;
};

// 开发环境
const isDev = () => {
  return ENVS.DEV.includes(currentEnv);
};

function getEnv() {
  return currentEnv;
}

module.exports = {
  getEnv,
  isProduction,
  isQA,
  isProfile,
  isDev,
};
