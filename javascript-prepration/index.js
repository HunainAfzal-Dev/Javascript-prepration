// Everything in Javascript happens inside an execcution context.

// Memory =>  key: values , functions; also called= variable enviroment

// code => executes single line of code; also called= thread of execution


// javascript is a "synchronous" "single threaded" language 

// English me “synchronous” = ek hi waqt me.  
// Programming me “synchronous” = ek ke baad ek (blocking).

// Hoisting: 

// console.log(getName)
// console.log(x)

// var x = 2;

// function getName(){
//     console.log("hello hunain 🙃")
// }


// Corrected & Polished Version

// "Jab bhi hum JavaScript ka code run karte hain, sabse pehle execution context ki memory phase banti hai.

// var variables is phase me declare hote hain aur default value undefined assign hoti hai.

// let aur const bhi declare to ho jate hain, lekin unhe initialize nahi kiya jata jab tak unka actual code line execute na ho. Isliye unhe pehle access karne par ReferenceError milta hai (Temporal Dead Zone).

// Functions (declarations) ka pura code memory me chala jata hai, isliye unhe unki declaration se pehle bhi call kar sakte ho.

// Phir jab execution phase start hota hai:

// Agar var ko uski declaration se pehle access karoge to undefined milega.

// Agar let/const ko access karoge to ReferenceError aayega.

// Aur function ko kahin bhi call kar sakte ho kyunki wo pehle se memory me loaded hai."

// ✅ Verdict

// Tumhari explanation bilkul sahi thi, bas ek word tumne galti se "execution content block" bola — asal me wo execution context (memory phase) hota hai.



// function greet(name, callBackFun){
//     console.log("hello ", name)
//     callBackFun()
// } 

// function bye(){
//     console.log("byby")
// }
// var x = 1;

// greet("hunain", bye)



var x = 1;
a()
b()
console.log(x)


function a(){
    var x = 10;
    console.log(x)
}

function b(){
    var x = 5;
    console.log(x)
}
