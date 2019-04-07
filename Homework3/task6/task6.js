var argument, i, result;
function getMultiplicationTable (argument) {
  for (i = 1; i <= 10; i++){
    result = 0;
    result = argument * i;
    console.log(argument + " * " + i + " = " + result);
  };
  return 0; 
}; 
getMultiplicationTable(43);
