function parseCode(str) {
  const parts = str.split(/0+/);

  return {
    firstName: parts[0],
    lastName: parts[1],
    id: parts[2]
  };
}
console.log(parseCode("John000Doe000123"));

console.log(parseCode("michael0smith004331"));

console.log(parseCode("Thomas00LEE0000043"));