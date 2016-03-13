function intPow (num,deg) {
	var rez=1;
	 if (num!=0 && deg > 0){
	 	for(var i = 0; i < deg; i++){
	 		rez *= num;
	 	}
	 } else if (deg==0 && num!=0){
	 	rez=1;
	 } else if ( deg <= 0 && num==0){
	 	rez=undefined;
	 	alert ('0 в степени deg<0 - не определен');
	 }else if ( deg < 0 && num != 0) {
	 	deg*=-1;
	 	for(var i = 0; i < deg; i++){
	 		rez *= num;
	 	}
	 	rez=1/rez;
	  }else {
	  	rez=0;
	  }
	 return rez;
}

var number = prompt('Введите число для возведение в степень','');
var degree = prompt('Введите степень','');
console.log('number',number);
console.log('degree',degree);
var rezult = intPow (number,degree);
console.log('rezult',rezult);