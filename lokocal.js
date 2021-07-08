let form = document.getElementById("forms");
let input = document.getElementById("input");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let zeros = document.getElementById("zero-zero");
let ac = document.getElementById("ac");
let del = document.getElementById("del");
let module = document.getElementById("module");
let slash = document.getElementById("slash");
let star = document.getElementById("star");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let equal = document.getElementById("equal");
let dot = document.getElementById("dot")

one.onclick = function(){
    form.input.value += 1;
}

two.onclick = function(){
    form.input.value += 2;
}

three.onclick = function(){
    form.input.value += 3;
}

four.onclick = function(){
    form.input.value += 4;
}

five.onclick = function(){
    form.input.value += 5;
}

six.onclick = function(){
    form.input.value += 6;
}

seven.onclick = function(){
    form.input.value += 7;
}

eight.onclick = function(){
    form.input.value += 8;
}

nine.onclick = function(){
    form.input.value += 9;
}

zero.onclick = function(){
    form.input.value += 0;
}

zeros.onclick = function(){
    form.input.value += "00"
}

module.onclick = function(){
    form.input.value += "%";
}

slash.onclick = function(){
    form.input.value += "/";
}

minus.onclick = function(){
    form.input.value += "-";
}

star.onclick = function(){
    form.input.value += "*";
}

plus.onclick = function(){
    form.input.value += "+";
}

dot.onclick = function(){
    form.input.value += ".";
}

ac.onclick = function(){
    form.input.value = "";
}

equal.onclick = function(){
    form.input.value =  eval(form.input.value);
}

del.onclick = function(){
    form.input.value = form.input.value.substr(0, form.input.value.length - 1);
}