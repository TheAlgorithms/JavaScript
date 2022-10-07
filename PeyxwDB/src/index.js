const { existsSync, writeFileSync, readFileSync} = require("fs");
const { set, get, unset, has } = require("lodash");
const err = require("./error")

if (!existsSync("./database.json")) {writeFileSync('database.json','{}', function (er) { if (er) throw er; });}
this.useful = {}
this.file = {}
 

class PeyxwDB {
 constructor(key){ 
    if(key && typeof key != 'string' ) throw err("Please Enter a string key")
    key  = key ? key: "database.json"
       this.useful = key.endsWith(".json") ? key : `${key}.json`;
this.file = JSON.parse(readFileSync(this.useful,"utf8"))};



//For Set a data from database.json
set(key, value){
    if(!key || !value)throw err("Please Enter key and value")
    set(this.file, key, value);
    writeFileSync(this.useful,JSON.stringify(this.file, null, 1))
    return this.get(key)
    }

get(key){return get(this.file, key);}
fetch(key){this.get(key)}

check(key){return this.file[key] ? true : false}
has(key){return this.file[key] ? true : false}

delete(key){if(this.file[key]) {
    unset(this.file, key);
writeFileSync("database.json", JSON.stringify(this.file, null, 1))
return true}else {return false}}

backup(filename){
    try{
    if(!filename) throw err("Please enter a folder name without its extension.")
writeFileSync(`${filename}.json`, JSON.stringify(this.file, null, 1))
return true}catch(e){console.log(e);return false}}

add(key, value) {
    if(!key || !value)throw err("Please Enter key and value")
if(typeof value !== "number")throw err("Please Enter a number value")
if(!this.check(key) || this.get(key) == 0) {this.set(key, 1), value -= 1}
if(typeof this.get(key) !== "number") throw err("Your key's data should be a number value")
this.file[key] += value;return writeFileSync(this.useful, JSON.stringify(this.file, value, 1))}

push(key, value){
     if(!this.check(key)) {this.file[key] = [];this.set(key,[])}
this.file[key].push(value);writeFileSync(this.useful,JSON.stringify(this.file, null, 1))
return this.get(key)
}

type(key) {
    const data = this.get(key);
    if (Array.isArray(data)) return "array";else return typeof data;}

 deleteAll(){
writeFileSync(this.useful,"{}")
return true
}

All(){ 
return this.file;}

math(x,m,y,l){
if(!x || !m || !y) throw err("Missing Value");
let sembol = m;
let x2 = this.get(`${x}`);let y2 = this.get(`${y}`)
if(sembol == "+") {if(!this.check(x) || !this.check(y)) throw err("Invalid Value");if(this.type(x) != "number"  || this.type(y) != "number") throw err("Invalid Value");if(l == true) {let added = x2+ y2;this.set(`${x}${y}`, added);return this.get(`${x}${y}`)}; return x2 + y2}
else if(sembol == "-") {if(!this.check(x) || !this.check(y)) throw err("Invalid Value"); if(this.type(x) != "number"  || this.type(y) != "number") throw err("Invalid Value");if(l == true) {let abc = x2 - y2;this.set(`${x}${y}`, abc);return this.get(`${x}${y}`)};return x2 - y2}
else if(sembol == "*") {if(!this.check(x) || !this.check(y)) throw err("Invalid Value");if(this.type(x) != "number"  || this.type(y) != "number") throw err("Invalid Value");if(l == true) {let abc = x2 * y2;this.set(`${x}${y}`, abc); return this.get(`${x}${y}`)};return x2 * y2}
else if(sembol == "/") {if(!this.check(x) || !this.check(y)) throw err("Invalid Value"); if(this.type(x) != "number"  || this.type(y) != "number") throw err("Invalid Value");if(l == true) {let abc = x2 / y2;this.set(`${x}${y}`, abc);return this.get(`${x}${y}`)};return x2 / y2} else if(m != "+" && m != "-" && m != "/" && m != "*" ) throw err("Invalid Value");
}}



module.exports = PeyxwDB;