/* 
the assignment operate
=	+=	-=	*=	/=	%=	**=	
*/

let x, y;

// the equal sign to assign value to variable
x = 5;
y = 2;

x += y; // return 7 cause x = x + y or 5 = 5 + 2
console.log(x);

// you can use += assignment operate to concatenation
x = "Mario";
y = " Soares";
x += y;
console.log(x); // return Mario Soares

x = 10;
y = 8;
x -= y;
console.log(x); // return 2

x = 9;
y = 3;
x *= y;
console.log(x); // return 27

x = 20;
y = 2;
x /= y;
console.log(x); // return 10

x = 10;
y = 3;
x %= y;
console.log(x); // return 1

x = 3;
y = 3;
x **= y;
console.log(x); // return 27