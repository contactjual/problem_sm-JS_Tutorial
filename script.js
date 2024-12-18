// class #61

// problem 01: "He" kotho bar use hoyeche and first kotho possition e pawa geche?

const mySelf = "Jual is a passionate student and a professional web developer. Currently, he is in his first year of Physics honors. Jual has a deep interest in web development and is working on mastering various programming languages. He is proficient in HTML, CSS, and JavaScript, using these technologies to build websites. Jual is always eager to explore new technologies and solve complex coding problems. Some of his recent projects include a Phone Hunting App, which he developed to teach his younger sibling. Additionally, he regularly shares educational content on social media, helping his followers learn coding in a fun and engaging way. He also actively shares his code using Git and GitHub, and handles tasks like merging projects efficiently. Alongside his work, Jual is committed to his studies. His future goal is to create innovative and functional solutions through web development."

// solve 1.1
function mySelfWordRepeat() {
    const findMatchingArray = mySelf.match(/he/gi);
    const vejalMokto = findMatchingArray ? findMatchingArray.length : "Not Found"
    return (vejalMokto);
}
console.log(mySelfWordRepeat());

// solve 1.2
function mySelfWordPoss() {
    let findFirstMatching = mySelf.search(/he/gi);
    findFirstMatching = findFirstMatching > 0 ? findFirstMatching : 'Not Found'
    return (findFirstMatching);
}
console.log(mySelfWordPoss());





// problem 02: // how many times 'c' reapeted
const myArray = ['a', 'b', 'd', 'c', 'e', 'c', 'c'];

// solve 2
function finding(array, value) {
    let arrayLength = array.length;
    let x = 0;
    try {
        for (let i = 0; i < arrayLength; i++) {
            if (myArray[i] === value) {
                // return i; // kotho number index e first i peyechi
                x++;
            }
        }
        return x;
    }
    catch {
        return 'Not Found';
    }

}
console.log(finding(myArray, 'c'));





// problem 03: Find longest string

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function longestString(array) {
    let myString = "";

    for (arr of array) {
        if (arr.length > myString.length) {
            myString = arr
        }
    }

    // or 
    // let arrayLength = array.length;
    // for (let x = 0; arrayLength > x; x++) {
    //     if (array[x].length > myString.length) {
    //         myString = array[x];
    //     }
    // }

    return myString;
}
console.log(longestString(fruits));




// problem 04: 1 to 100 er modde kon sonka golo 3,5 and 3,5 uboy dhara bevajjo 

function deviding(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(`${i} dividable by 3 and 5`);
        }
        else if (i % 3 == 0) {
            console.log(`${i} dividable by 3`);
        }
        else if (i % 5 == 0) {
            console.log(`${i} dividable by 5`);
        }
        else {
            console.log(i);
        }
    }
}
console.log(deviding(100));





// problem 05: arry theke falsey value golo cut korte hobe

const myTrueFalseArray = [
    'kicho',
    '',
    null,
    true,
    false,
    'woww',
    undefined
];

// const myTrueArray = myTrueFalseArray.filter(function(element){
//     if (true) {
//         return element;
//     }
//     else {
//         return false;
//     }
// });
// or 
const myTrueArray = myTrueFalseArray.filter(Boolean);

console.log(myTrueArray);





// problem 06: arry theke falsey value golo cut korte hobe

const myTrueFalseObj = {
    a: "kicho",
    b: "",
    c: null,
    d: true,
    e: false,
    f: "wowwz",
    g: undefined
};

function myObjTrue(obj) {
    for (let key in obj) {
        if (!obj[key]){
            delete obj[key];
        }
    }
    return obj;
}
console.log(myObjTrue(myTrueFalseObj));
