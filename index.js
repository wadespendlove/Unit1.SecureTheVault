let code1;
code1 = 7 + 3;
//console.log(code1);

const code2 = 41 / 1 - 1;
//console.log(code2);

const code3 = 1599 % 40;
//console.log(code3);

const message = `The vault has been secured. The combination is:`;
//console.log(message);

const codeA = code1 + `-` + code2 + `-` + code3;
//console.log(codeA);

const codeB = `${code1}-${code2}-${code3}`;
//console.log(codeB);

console.log(`${message}

${codeA}
${codeB}`);
