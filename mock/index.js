// 如果你需要更多mock使用方法，
// 请查阅mockjs及mock-middleware-plugin的用法
const mockList = [
  {
    name: 'Edward',
    id: 1,
    age: 19,
    address: 'Haidian',
  },
  {
    name: 'Jack',
    id: 2,
    age: 18,
    address: 'Kanas',
  },
  {
    name: 'Loren',
    id: 3,
    age: 16,
    address: 'Wuhan',
  },
];

module.exports = {
  '/list/query': (req, res) => {
    const { id } = req.query;
    let data = mockList;
    if (id) data = mockList.filter((e) => e.id == id);
    res.send({
      errCode: '0',
      errMsg: [''],
      data,
    });
  },
};
