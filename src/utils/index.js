const path = require('path')

export const capitalize = word => {
  const [first, ...rest] = word.split("")
  return [first.toUpperCase(), ...rest].join("")
}

export const linkPath = filePath => {
  let url = `/${filePath.split(path.sep).slice(1,-1).join(path.sep)}/index.js`
  return url
}


export const linkLabel = filePath => {
  return path.basename(path.dirname(filePath))
    .split("-")
    .map(w => capitalize(w))
    .join(" ")
}
