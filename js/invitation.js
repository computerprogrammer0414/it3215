//function created to replace the content
function replaceContent() {
	//declaring two variables for both fields: Recipient Name and Host name.
	var myRecipientName, myhostName;

	//setting the variable to the input field's id named recipientNameInput's value from Recipient Name field
	myRecipientName = document.getElementById("recipientNameInput").value;
	// hostNameInput from form field: Host Name
	myhostName = document.getElementById("hostNameInput").value;

	console.log('Variable myRecipientName: ' + myRecipientName);
	console.log('variable myhostName: ' + myhostName);

	//setting the HTML code in the span id recipientNamePlaceholder and hostNamePlaceholder with the two variables, so it can displayed back to HTML
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
	document.getElementById("hostNamePlaceholder").innerHTML = myhostName;
}