/*
* Write a function that converts user entered date formatted as M/D/YYYY 
* to a format required by an API (YYYYMMDD). The parameter "userDate" and 
* the return value are strings.
* For example, it should convert user entered date "12/31/2016" to "20161231" suitable for the API.
*/

function convertDate(userDate) { 
  userDate = new Date(userDate);
  y = userDate.getFullYear().toString();
  m = (userDate.getMonth() + 1).toString();
  d = userDate.getDate().toString();
  if (m.length == 1) m = '0' + m;
  if (d.length == 1) d = '0' + d;
  return y + m + d;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
convertDate(convertDate()); 