/**
 * const,let等の変数宣言
 */

/** ■var変数について */
// var変数は上書き可能
// var変数は再宣言可能
// →つまり、変数宣言はvarを使うのはNG！ 現状は,const or letで変数を宣言すること

/** ■let変数について */
// let変数は上書きは可能
// let変数は再宣言不可能

/** ■const変数について */
// const変数は上書きは不可能
// const変数は再宣言不可能
// ただし、constで定義したオブジェクトや配列はプロパティの変更(上書き)が可能

/** ------------------------------------------------------------- */

/**
 * テンプレート文字列
 */

const name = "ゆきお";
const age = 28;

/** ■従来の方法 */
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

/** ■テンプレート文字列を用いた方法 */
// バッククウォートで囲む
const message2 = `私の名前は$[name}です。年齢は${age}です。`;
console.log(message2);

/** ------------------------------------------------------------- */

/**
 * アロー関数
 */

/** ■従来の方法 */

// function func1(str) {
//   return str;
// }

const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

/** ■アロー関数 */
// ▼例1
const func2 = (str) => {
  return str; // 処理が1行の場合は、returnを省略することができる
};
console.log(func2("func2です"));

// ▼例2
const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));

/** ------------------------------------------------------------- */

/**
 * 分割代入
 */

// ▼例1:オブジェクトの場合
const myProfile = {
  name1: "ゆきお",
  age1: 24
};

const message3 = `名前は${myProfile.name1}です。年齢は${myProfile.age1}歳です。`;
console.log(message3);

// しかし上記のようなコードだと少し冗長になってしまうの下記のようにするとコード簡潔になる
const { name1, age1 } = myProfile;
const message4 = `名前は${name1}です。年齢は${age1}歳です。`;
console.log(message4);

// ▼例2:配列の場合
const myProfileArr = ["配列のゆきお", 24];
console.log(myProfileArr);

const [name2, age2] = myProfileArr;
const message5 = `名前は${name2}です。年齢は${age2}歳です。`;
console.log(message5);

/** ------------------------------------------------------------- */

/**
 * デフォルト値
 */
const sayHello = (name = "ゆきお") => console.log(`こんにちは${name}さん`);
sayHello();

/** ------------------------------------------------------------- */

/**
 * スプレット構文
 */

/** ■配列の展開 */
const arr1 = [1, 2];
console.log(arr1);
// ドット3つをつけることで配列を1つずつ展開してくれる
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]); // ★結果3
sumFunc(...arr1); // ★結果3

// ■まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

/** ■配列のコピーや結合 */
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6); // ★結果 arr4と同じ中身が出力される

const arr7 = [...arr4, ...arr5];
console.log(arr7); // ★結果 arr4とarr5がまじされたものが出力される

// ※注意 下記のように配列変数に配列を代入すると参照が引き継がれてしまう
//const arr8 = arr4;

/** ------------------------------------------------------------- */

/**
 * mapやfilterを使った配列の処理
 */

/** ■mapの使い方 */
const nameArr = ["田中", "山田", "佐藤"];

// 下記の①for文と②mapは同じ意味
// ①
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}
// ② ※マップの中でインデックスを使いたい場合は、第二引数にindexを指定すれば、インデックスが使えるようになる
nameArr.map((name, index) => console.log(`${index}番目は${name}です`));

/** ■filterの使い方 */
const numArr = [1, 2, 3, 4, 5];

const newNumArr = numArr.filter((num) => {
  // 偶数の値を抽出する
  return num % 2 === 0;
});
console.log(newNumArr);

/** ------------------------------------------------------------- */

/**
 * 三項演算子
 */

// 構文
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

// 例1
const num = "5555";

// もしも変数num が数値型の場合は、3桁区切りでカンマを入れる、それ以外の場合は「数値を入力してください」を代入する
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";

console.log(formattedNum); // ★結果 数値を入力してください

/** ------------------------------------------------------------- */

/**
 * 論理演算子の本当の意味を知ろう ＆＆ ||
 */

/** ■一般的な論理演算子の意味 */
const $flag1 = true;
const $flag2 = false;

// 一般的な意味だと「||」の意味は「又は」となる
if ($flag1 || $flag2) {
  console.log("1か2はtrueになります");
}

// 一般的な意味だと「&&」の意味は「なおかつ」となる
if ($flag1 && $flag2) {
  console.log("1か2はtrueになります");
}

/** ■論理演算子の本当の意味 */
const number = 100;
//const number = null;

/** ▼ 「||」  */
// 「||(又は)」  は「左側がfalse」なら「右側」を返す。 逆に「左側がtrue」なら「左側」を返す
// イメージは助け合い
const fee = number || "金額未設定です";
console.log(fee);

/** ▼ 「&&」  */
const number2 = null;

// 「&&(尚且)」  は 「左側がfalse」なら「左側」を返す。逆に「左側がtrue」なら「右側」を返す。
// イメージは自分でもできるし、それ以外の場合にもできる
const fee2 = number2 && "何か設定されました";
console.log(fee2);
