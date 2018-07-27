import Test from './testModel';
// *** queries *** //
function getAll() {
  return Test.collection()
  .fetch()
  .then(function(test) {
    return test;
  });
}

module.exports = {
  getAll: getAll
};
