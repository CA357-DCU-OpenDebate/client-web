// const data = JSON.parse("./db.json")
// module.exports = function () {
//   return data;
// }
// const data = require('./db.json')
const debates = require('./src/mock/debates.json')
//const users = require('./src/mock/users.json')
// index.js

module.exports = () => {
  return {
    debates: debates
  }
}

// return JSON.stringify({
//   nodes: nodes,
//   projects: projects,
//   brainflows: brainflows,
//   members: members,
//   tags: tags
// });
