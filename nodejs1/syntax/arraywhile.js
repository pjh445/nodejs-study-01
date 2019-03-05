//1부터 10까지 더하기
var number=[1,2,3,4,5,6,7,8,9,10];
var i=0;
var total=0;
var txt="0";
while(i<number.length){
	total=total+number[i];
	txt+="+"+number[i];
	i++;
}
console.log(`${txt} = ${total}`);
