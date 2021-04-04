// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(","); //(접근자 메소드)
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(","); //string api
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse(); //(변경자 메소드)
  console.log(result);
  console.log(array);
  // const result1=array.sort((a,b)=> b-a);
  // console.log(result1);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(2); // 2번인덱스 부터 시작(변경자 메소드-기존의 배열을 수정)
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
  new Student("F", 18, true, 90),
];

// Q5. find a student with the score 90
{
  const result = students.find((a) => a.score === 90); // 콜백함수를 만족하는 첫번째 인자값만 제공(순회메소드)
  console.log(result);
  const result1 = students.filter((a) => a.score === 90); // 2가지 이상 인자값을 받기 원할때(접근자 메소드-배열을 수정하지 x,기존의 배열에서 추가or반환 값 받는다)
  console.log(result1);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((a) => a.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((a) => a.score); //순회 메소드
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
// some vs every
// some은 callback함수가 true을 반환하는 요소를 찾을 때까지 배열에 있는 각 요소에 대해 한 번씩 callback 함수를 실행. 하나만 만족할때
// every는 주어진 callback함수가 false을 반환하는 요소를 찾을 때까지 배열에 있는 각 요소에 대해 한 번씩 callback 함수를 실행합니다. 모든 배열의 조건을 만족할떄
{
  const result = students.some((a) => a.score <= 50); //(순회 메소드)
  console.log(result);

  const result1 = students.every((a) => a.score >= 50);
  console.log(result1);
}

// Q9. compute students' average score **
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0); //reduce는 배열의 요소를 한번씩 돎면서 실행(=every,some,filter)되고 반환값은 축척된 결과를 반환 => 배열을 함께 모아놓을때 쓰이는 용도 , callbackfn은 2가지 parameter가 있는데 이전값과 현재값을 입력받고 반환값은 현재값으로 반환해야한다.
  console.log(result);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score > 50)
    .join(",");
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) //sort 는 -1,1,0값으로 반환=> -1로 반환은 순서가 변경(a<b),1로 반환은 순서가 유지(a>b),0로 반환은 순서가 유지(a===b)
    .join(",");
  console.log(result);
}
