const date = new Date();
let date_toLocaleString = date.toLocaleString();
let date_toString = date.toString();
let date_toLocaleString_da_DK = date.toLocaleString('da-DK');
let date_toLocaleString_ar_SA = date.toLocaleString('ar-SA');

console.log(`\n\ndate_toLocaleString = ${date_toLocaleString}\n`)
console.log(`date_toString = ${date_toString}\n`)
console.log(`date_toLocaleString_da_DK = ${date_toLocaleString_da_DK}\n`)
console.log(`date_toLocaleString_ar_SA = ${date_toLocaleString_ar_SA}\n`)