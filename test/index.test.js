var assert = require('power-assert');
var DataClassFactory = require('../src/index').DataClassFactory;

describe('#equals', () => {
  it('等値', () => {
    let data = DataClassFactory({
      a: 1,
      b: ''
    });

    assert(data.equals(data));
  });

  it('等価', () => {
    let data1 = DataClassFactory({
      a: 1,
      b: ''
    });

    let data2 = DataClassFactory({
      a: 1,
      b: ''
    });

    assert(data1.equals(data2));
  });

  it('プロパティの値が異なる', () => {
    let data1 = DataClassFactory({
      a: 1,
      b: ''
    });

    let data2 = DataClassFactory({
      a: 2,
      b: ''
    });

    assert(!data1.equals(data2));
  });

  it('プロパティの数が異なる', () => {
    let data1 = DataClassFactory({
      a: 1,
      b: ''
    });

    let data2 = DataClassFactory({
      a: 1,
      b: '',
      c: false
    });

    assert(!data1.equals(data2));
    assert(!data2.equals(data1));
  });

  it('プロパティ名が異なる', () => {
    let data1 = DataClassFactory({
      a: 1,
      b: '',
      x: false
    });

    let data2 = DataClassFactory({
      a: 1,
      b: '',
      y: false
    });

    assert(!data1.equals(data2));
    assert(!data2.equals(data1));
  });

  it('nullと比較', () => {
    let data = DataClassFactory({
      a: 1,
      b: ''
    });

    assert(!data.equals(null));
  });

  it('undefinedと比較', () => {
    let data = DataClassFactory({
      a: 1,
      b: ''
    });

    assert(!data.equals(undefined));
  });

  it('数値と比較', () => {
    let data = DataClassFactory({
      a: 1,
      b: ''
    });

    assert(!data.equals(1));
  });

  it('文字列と比較', () => {
    let data = DataClassFactory({
      a: 1,
      b: ''
    });

    assert(!data.equals('1'));
  });

  it('ただのオブジェクトと比較', () => {
    let data = DataClassFactory({
      a: 1,
      b: ''
    });

    assert(!data.equals({
      a: 1,
      b: ''
    }));
  });

  it('ネストした等価なオブジェクトと比較', () => {
    let data1 = DataClassFactory({
      a: 1,
      b: DataClassFactory({
        x: 'x',
        y: 'y'
      })
    });

    let data2 = DataClassFactory({
      a: 1,
      b: DataClassFactory({
        x: 'x',
        y: 'y'
      })
    });

    assert(data1.equals(data2));
    assert(data2.equals(data1));
  });

  it('ネストした非等価なオブジェクトと比較', () => {
    let data1 = DataClassFactory({
      a: 1,
      b: DataClassFactory({
        x: 'x',
        y: 'y'
      })
    });

    let data2 = DataClassFactory({
      a: 1,
      b: DataClassFactory({
        x: 'a',
        y: 'b'
      })
    });

    assert(!data1.equals(data2));
    assert(!data2.equals(data1));
  });
});

describe('#copy', () => {
  it('値の書き換えなしでのコピー', () => {
    let data1 = DataClassFactory({
      a: 1,
      b: 1
    }).copy({});

    let data2 = DataClassFactory({
      a: 1,
      b: 1
    });

    assert(data1.equals(data2));
  });

  it('値の書き換えありでのコピー', () => {
    let data1 = DataClassFactory({
      a: 1,
      b: 1
    }).copy({ b: 2 });

    let data2 = DataClassFactory({
      a: 1,
      b: 2
    });

    assert(data1.equals(data2));
  });
});