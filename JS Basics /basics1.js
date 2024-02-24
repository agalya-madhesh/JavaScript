var price=100
//iphone 15
var product="iphone"
var tax=100
console.log(product)
var total=price + tax
console.log(total)


//operators-post increment
var a=10
var b=a++
console.log(b)
console.log(a)

//operators-pre increment
var a=10
var b=++a
console.log(b)
console.log(a)

//pre decrement 
var a=30
var b=--a
console.log(b)
console.log(a)

//pre decrement 
var a=30
var b=a--
console.log(b)
console.log(a)

//function
function iphone()
{
    console.log("This is my iphone 15")
}
iphone()

//function exercise
var a=20
var b=30
function add()
{
    console.log(a+b)
}
add()

//function paramters
function area(l,b)
{
    console.log("Area is:"+ l/b)
}
area(10,10)

//return function
function add(a,b)
{
return (a+b)
}

var a=30
var b=40
var total=add(30,40)
console.log(total)

//if else
var rain=false

if(false)
{
    console.log("take an umberalla")
}
else{
    console.log("enjoy the sunshine")
}

//Logical operators
console.log(false && true && true)
console.log(false ||  true || true)
console.log(!false)

//if exercise
var color="yellow"

if(color=="red")
{
    console.log("Stop")
}

if(color=="yellow")
{
    console.log("Get Ready")
}

if(color=="green")
{
    console.log("Go")
}
