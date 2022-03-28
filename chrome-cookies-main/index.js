//delete secure cookie
function removeSecureCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=staging-na-wwwinc.demandware.net; secure`;
}
removeSecureCookie("dwsid");