const path = require('path')

exports.capitalize = word => {
  const [first, ...rest] = word.split("")
  return [first.toUpperCase(), ...rest].join("")
}

exports.linkPath = filePath => {
  let url = `/${filePath.split(path.sep).slice(2,-1).join(path.sep)}/`
  return url
}


exports.linkLabel = filePath => {
  return path.basename(path.dirname(filePath))
    .split("-")
    .map(w => exports.capitalize(w))
    .join(" ")
}
