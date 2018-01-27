export const capitalize = word => {
  const [first, ...rest] = word.split("")
  return [first.toUpperCase(), ...rest].join("")
}

export const linkPath = filePath => {
  let comps = filePath.split("/").slice(0,-1)
  comps[0] = null
  return comps.join("/")
}

export const linkLabel = filePath => {
  return filePath.split("/")[2]
    .split("-")
    .map(w => capitalize(w))
    .join(" ")
}
