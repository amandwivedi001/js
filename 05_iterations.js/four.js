// .. in for in loop when print iteration it prints its key not value
// while in for of loop vice versa

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const arr = [1,2,3,4,5,6]

for (const key in arr) {
    // console.log(`${key} index is for ${arr[key]}`);
}

const map = new Map() 

map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")

// for (const key in map) {
//     console.log(key);
// }

// for in loop is not working for maps

