const users = ['Anirban', 'Charu', 'Oni']

function greet(name) {
  console.log(`Hi ${name}`) // fixed: replaced string concatenation with template literal
  return `Hello ${name}` // fixed: replaced string concatenation with template literal
}

const result = greet('user') // fixed: changed 'let' to 'const' and undefined 'user' to string 'user'

for (let i = 0; i < users.length; i++) {
  console.log(`User: ${users[i]}`) // fixed: replaced string concatenation with template literal
}

if (users.length === 3) { // fixed: changed assignment to comparison
  console.log('All users loaded') // fixed: replaced string concatenation with template literal
}

function add(a, b, c) {
  return a + b + c // removed unused variables d and g
}

console.log(result.toUpperCase()) // fixed: corrected typo 'toUppercase' to 'toUpperCase'