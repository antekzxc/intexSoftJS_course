var a, b, r, x, y;
function isPointInCirle (x, y) {
  a = 3;
  b = 5;
  r = 4;
  if (Math.pow((a - x), 2) + Math.pow((b - y), 2) <= Math.pow(r, 2)){
    return true;
  } else {
    return false;
  };
};
console.log (isPointInCirle(3, 1));
// function isPointInQadrangle (x, y) {
  
// };