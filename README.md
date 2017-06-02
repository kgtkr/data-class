# このモジュールは？
不変なオブジェクトを**TypeScriptで型安全**に扱えるモジュールです。

# インストール
```shell
    npm i -S data-class
```

# 使い方
DataClassFactoryにオブジェクトを渡して、copyやequalsを使うだけです。

```ts
import { DataClassFactory } from 'data-class';
let data1 = DataClassFactory({
  a:1,
  b:2
}).copy({b:3});

let data2 = DataClassFactory({
  a:1,
  b:3
});

console.log(data1.equals(data2));//true
```