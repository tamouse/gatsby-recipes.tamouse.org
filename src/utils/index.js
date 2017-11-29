export const capitalize = word => {
  const [first, ...rest] = word.split("")
  return [first.toUpperCase(), ...rest].join("")
}

export const linkPath = relativePath => {
  return relativePath.split("/").slice(1,-1).join("/")
}

export const linkLabel = relativePath => {
  return relativePath.split("/")[2]
    .split("-")
    .map(w => capitalize(w))
    .join(" ")
}
