//easy1
document.write('Easy(1) ')

var answer = null;
var number = [1, 2, 4, 5];
var answer = (
    number[0] + number[1] + number[2] + number[3]
);

document.write(answer);

//easy2
// *******
document.write(' Easy(2) ');

var w = prompt('Enter a palindrom');

function palindrom(str) {
    var w = /[\W_]/g; //
    var pal = str.toLowerCase().replace(w, '');
    var reverse = pal.split('').reverse().join('');
    return reverse === pal;
};

document.write(palindrom(w));

//medium1
document.write(' Medium(1) ');

var answer1 = null;
var answer2 = null;
var answer3 = null;

var input1 =[2, 10];
var input2 =[2.1, 3];
var input3 =[2, -2];

var answer1 = Math.pow(input1[0], input1[1]) ;
var answer2 = Math.pow(input2[0], input2[1]) ;
var answer3 = Math.pow(input3[0], input3[1]) ;

document.write(" 2 to the power of 10 is "+ answer1 +". ")
document.write(" 2.1 to the power of 3 is "+ answer2 +". ")
document.write(" 2 to the power of -2 is "+ answer3 +". ")

//medium 2
document.write(' Medium(2) ');

var par1= ["2" + "4" + "3"];
var parNum1 = parseInt(par1);

var par2= ["5" + "6" + "4"];
var parNum2 = parseInt(par2);

var parAnswer = parNum1+parNum2;

document.write(parAnswer);

//medium 3
document.write(' Medium(3) ');

function shuffle(nums) {
    nums.sort(() => Math.random() -.5);
}

var nums = [4,5,6,7,0,1,2];
shuffle(nums);
document.write(nums);

var where = nums.indexOf(0);
document.write(" - 0 has an index of "+ where +". ");

//medium 4
document.write(' Medium(4) ')

// You‌ ‌are‌ ‌given‌ ‌coins‌ ‌of‌ ‌different‌ ‌denominations‌ ‌and‌ ‌a‌ ‌total‌ ‌amount‌ ‌of‌ ‌money‌ ‌‌amount‌.‌ ‌Write‌ ‌a‌ ‌function‌ ‌to‌ ‌
// compute‌ ‌the‌ ‌fewest‌ ‌number‌ ‌of‌ ‌coins‌ ‌that‌ ‌you‌ ‌need‌ ‌to‌ ‌make‌ ‌up‌ ‌that‌ ‌amount.‌ ‌If‌ ‌that‌ ‌amount‌ ‌of‌ ‌money‌ ‌cannot‌ ‌be‌ ‌
// made‌ ‌up‌ ‌by‌ ‌any‌ ‌combination‌ ‌of‌ ‌the‌ ‌coins,‌ ‌return‌ ‌‌-1‌.‌ ‌

// Input:‌ ‌coins‌ ‌=‌ ‌[1,‌ ‌2,‌ ‌5],‌ ‌amount‌ ‌=‌ ‌11‌ ‌
// Output:‌ ‌3‌ ‌ ‌
// Explanation:‌ ‌11‌ ‌=‌ ‌5‌ ‌+‌ ‌5‌ ‌+‌ ‌1‌ ‌

// Example‌ ‌2:‌ ‌
// Input:‌ ‌coins‌ ‌=‌ ‌[2],‌ ‌amount‌ ‌=‌ ‌3‌ ‌
// Output:‌ ‌-1‌ ‌
