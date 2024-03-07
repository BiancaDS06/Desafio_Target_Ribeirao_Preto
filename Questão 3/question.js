// a) 1, 3, 5, 7, ___
function nextNumberA(previous) {
    return previous + 2;
  }
  
  // b) 2, 4, 8, 16, 32, 64, ___
  function nextNumberB(previous) {
    return previous * 2;
  }
  
  // c) 0, 1, 4, 9, 16, 25, 36, ___
  function nextNumberC(index) {
    return Math.pow(index, 2);
  }
  
  // d) 4, 16, 36, 64, ___
  function nextNumberD(index) {
    return Math.pow((index + 2), 2);
  }
  
  // e) 1, 1, 2, 3, 5, 8, ___
  function nextNumberE(previous1, previous2) {
    return previous1 + previous2;
  }
  
  // f) 2, 10, 12, 16, 17, 18, 19, ___
  function nextNumberF(previous, difference) {
    return previous + difference;
  }
  
  // Testando as funções
  console.log(nextNumberA(7));  // Saída: 9
  console.log(nextNumberB(64));  // Saída: 128
  console.log(nextNumberC(6));  // Saída: 36
  console.log(nextNumberD(6));  // Saída: 64
  console.log(nextNumberE(5, 8));  // Saída: 13
  console.log(nextNumberF(19, 1));  // Saída: 20
  