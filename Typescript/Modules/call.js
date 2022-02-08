var obj = {
  a: 100,
};

var obj1 = {
  a: 50,
};
var obj3 = {
  a: 10,
};

function fn(x, y) {
  var b = x;
  var c = y;
  var r = this.a + b + c;
  console.log(r);
}

fn.call(obj, 2, 3);

fn.call(obj1, 500, 500);

fn.apply(obj3, [99, 88]);

// var fn1 = fn.bind(obj);
// fn1(23, 45);

// fn.bind(obj, 23, 45)();

fn.bind(obj3)(100, 100);
