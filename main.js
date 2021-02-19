
function AddQuestionMarks(myString){
  return myString + "???";
}

let AddQuestionMarksEX = AddQuestionMarks("hello");
console.log(AddQuestionMarksEX);
let AddQuestionMarksEX2 = AddQuestionMarks("what even");
console.log(AddQuestionMarksEX2);

function TwoStringsWithSpace(oneString , twoString){
    return oneString + " " + twoString ; 
} 

let TwoTtringsWithSpaceEX = TwoStringsWithSpace( 'oh', 'hi');
console.log(TwoTtringsWithSpaceEX);
let TwoTtringsWithSpaceEX2 = TwoStringsWithSpace('well', 'hello back');
console.log(TwoTtringsWithSpaceEX2);

function SubtractThreeNumbers(one , two , three){
    return (one - two - three);
}

let SubtractThreeNumbersEx = SubtractThreeNumbers(10,1,2);
console.log(SubtractThreeNumbersEx);
let SubtractThreeNumbersEx2 = SubtractThreeNumbers(8,3,5);
console.log(SubtractThreeNumbersEx2);
let SubtractThreeNumbersEx3 = SubtractThreeNumbers(100,80,25);
console.log(SubtractThreeNumbersEx3);

function SubtractNumberReverse(one , two , three){
    return (three - two - one) ;

}

let SubtractNumberReverseEX = SubtractNumberReverse(10,1,2);
console.log(SubtractNumberReverseEX);
let SubtractNumberReverseEX2 = SubtractNumberReverse(2,1,10);
console.log(SubtractNumberReverseEX2);

function TripleString(myString){
    return  myString+myString+myString;
}

let TripleStringEx = TripleString('codeimmersives');
console.log(TripleStringEx);
let TripleStringEx2 = TripleString('is the best');
console.log(TripleStringEx2);

function SquareRoot(number){
    return  Math.sqrt(number);
}

let SquareRootEx = SquareRoot(16);
console.log(SquareRootEx);
let SquareRootEx2 = SquareRoot(4);
console.log(SquareRootEx2);
let SquareRootEx3 = SquareRoot(9);
console.log(SquareRootEx3);