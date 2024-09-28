// 1. 원시타입과 리터럴
// 1-1. 원시 타입
// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${str1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined 타입
let unde1: undefined = undefined;

// null 값을 다른 타입의 변수에 할당하기
let numA = null;
let numB: number = null;

// 1-2. 리터럴 타입
// 타입스크립트에는 string, number 처럼 범용적으로 많은 값을 포함하는 타입 뿐만 아니라
// 딱 하나의 값만 포함하는 타입도 존재합니다.

let numC: 10 = 10;

let strA: "hello" = "hello";
let boolA: true = true;
let boolB: false = false;

// 2. 배열과 튜플
// 2-1. 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "winterlood"];

let boolArr: Array<boolean> = [true, false, true];

// 다양한 타입 요소를 갖는 배열 타입 정의하기
let multiArr = [1, "hello"];
let multiArr2: (number | string)[] = [1, "hello"];

// 다차원 배열 타입 정의하기
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 2-2. 튜플
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];

// 튜플을 결국 배열이다.
let tup3: [number, number] = [1, 2];

tup3.push(1);
tup3.push(1);
tup3.push(1);
tup3.push(1);

// 튜플은 왜 쓰는걸까?
// 다음과 같이 회원 정보를 2차원 배열로 저장하는 상황을 가정
const users = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
];

// 각 배열의 0번 인덱스에는 회원의 이름, 1번 인덱스에는 회원의 아이디를 저장했는데
// 눈치 없는 동료 중 한명이 다음과 같이 순서를 잘못 배치해 요소를 추가할 경우 문제 발생
const users2 = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  [5, "조아무개"], // <- 새로 추가함
];

//자바스크립트에서는 이런 문제를 확인할 방법이 없습니다. 그러나 타입스크립트에서는 튜플을 사용하면 위와 같은 실수를 빨리 바로잡을 수 있습니다.
const users3: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  [5, "조아무개"], // 오류 발생
];

// 3. 객체
// 객체 타입을 정의하는 방법
let user: object = {
  id: 1,
  name: "이정환",
};

user.id;

// 객체 리터럴 타입
let user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

user2.id;

// 여기서 한가지 알 수 있는 사실은 타입스크립트는 기존의 정적 타입시스템을 따르는 언어인
// C, JAVA와는 달리
// 객체의 타입을 정의할때 프로퍼티를 기준으로 객체의 구조를 정의하듯이 타입을 정의

// 타입스크립트의 이런 특징을 구조적 타입 시스템이라고 부릅니다.
// 객체의 구조를 결정하는 것은 프로퍼티입니다.

// 특수한 프로퍼티 정의하기
let user3: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

// 선택적 프로퍼티
let user4: {
  id?: number; // 선택적 프로퍼티가 된 id
  name: string;
} = {
  id: 1,
  name: "이정환",
};

user = {
  name: "홍길동",
};

let user5: {
  id?: number;
  readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
} = {
  id: 1,
  name: "이정환",
};

user.name = "dskfd"; // 오류 발생
