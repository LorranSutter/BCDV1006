/*
Create a JS object with the attributes, ‘firstName’ and ‘lastName’. Set the
value of those attributes to your name(s). Add a method to the object
called `greeting`. The method should add HTML to a document that says,
“Hello &lt;firstName&gt; &lt;lastName&gt;!”, where &lt;firstName&gt; &lt;lastName&gt; and the
actual values. Eg, for me, the browser would show “Hello Liav Koren!”.
 */

var firstName = "Lorran";
var lastName = "Sutter";

document.querySelector("h1").innerHTML = `Hello ${firstName} ${lastName}!`;