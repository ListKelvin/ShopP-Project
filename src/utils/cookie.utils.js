export const createCookie = (fieldname, fieldvalue, expiry) => {
  var date = new Date();
  date.setTime(date.getTime() + expiry * 24 * 60 * 60 * 1000);
  var expires = "expires=" + date.toGMTString();
  document.cookie = fieldname + "=" + fieldvalue + ";" + expires + ";path=/";
};

export const readCookie = (cname) => {
  var name = cname + "=";
  var decoded_cookie = decodeURIComponent(document.cookie);
  console.log(decoded_cookie);
  var carr = decoded_cookie.split(";");
  console.log(carr);
  for (var i = 0; i < carr.length; i++) {
    var c = carr[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      console.log(c.indexOf(name));
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
