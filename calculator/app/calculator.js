exports.sum = function(a,b) {

return a+b;
};
exports.subtract = function(a,b) {

return a-b;
};
exports.multiply = function(a,b) {

return a*b;
};
exports.divide = function(a,b) {

if(b==0)
{
throw new Error('dividend cannot be zero');
}
else {
  return a/b;
}
};
