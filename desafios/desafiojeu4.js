const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
console.log(hexToRgb("#56AB24")) // [17, 171, 36]
console.log(hexToRgb("#A13")) // [170, 17, 51]