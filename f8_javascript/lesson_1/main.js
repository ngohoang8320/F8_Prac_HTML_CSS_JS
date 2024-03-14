

Array.prototype.map2 = function(callback) {
  let arraylength = this.length
  let output = []

  for(let i = 0; i < arraylength; i++) {
    let result = callback(this[i], i)
    output.push(result)
  }
  return output
}


let courses = [
  'Javascript',
  'PHP',
  'Ruby'
]

let htmls = courses.map2(function(course) {
  return `<h2>${course}</h2>`
})

console.log(htmls)

console.log(courses.map(function(course) {
  // console.log(course)
  return `<h2>${course}</h2>`
}))