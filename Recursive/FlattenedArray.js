
//  https://flexiple.com/flatten-array-javascript/
//  Flatten an given array to reduce the dimensionality of an array

const flattened = (arr) => {
  const res = []
  arr.forEach(i => {
    if(Array.isArray(i)){
      res.push(...flattened(i));
    }
    else{
      res.push(i);
    }
  });
  return res;
}

module.exports = flattened;

// JEST TEST

const flattened = require('./FlattenedArray');

test('Array', () => {
  expect(flattened([['a'],['bc'],[['cde'], ['f']]])).toStrictEqual(['a','bc','cde','f']);
});


test('Array', () => {
  expect(flattened([[['a'],['bcd']],[['dcde'], ['fg']]])).toStrictEqual(['a','bcd','dcde','fg']);
});
