const test = {
  a: 1,
  b: 2,
  c: 3
}
let str = ''
for (const n of test) {
  str += n
}
console.log(str)
