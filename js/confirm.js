var keyValuePairs = document.cookie.split(';');
for (var i = 0; i < keyValuePairs.length; i++) {
var name = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('='));
var value = keyValuePairs[i].substring(keyValuePairs[i].indexOf('=') + 1);
document.write(name + ": " + value + "<br/>");
}