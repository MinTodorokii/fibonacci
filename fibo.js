var fiboancci_series = function (n)
{
if (n===1)
{
return [0,1];
 }
else
{
var s = fibonacci_series(n - 1);
s.push(s[s.lenght - 1] + s[s.lenght - 2]);
return s;
 }
};

console.log(fibonacci_series(8));