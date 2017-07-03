const double = x => x * 2;

const test = (component, fn, count = 1) => {
  console.log(`# ${ component }`);
  fn({
    same: (actual, expected, msg) => {
      if (actual == expected) {
        console.log(`ok ${ count } - ${ msg }`);
      } else {
        throw new Error(`not ok ${ count } -  ${ msg } - expected: ${ expected } - actual: ${ actual }`);
      }
      count++;
    },
    greaterThan: (actual, expected, msg) => {
      if (actual >= expected) {
        console.log(`ok ${ count } - ${ msg }`);
      } else {
        throw new Error(`not ok ${ count } -  ${ msg } - expected: ${ expected } - actual: ${ actual }`);
      }
      count++;
    }
  });
};

test('double', assert => {
  {
    const msg = 'get() must be successfull';
    
    var actual;
    const expected = 2;
    service.ins.get(serviceURL.pbars, null
    , function(response) {
        actual = Number(response.bars.length);
        assert.greaterThan(actual, expected, msg);
    }
    , function(error) {
        actual = 0;
        assert.greaterThan(actual, expected, msg);
    });
  }
});