//When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
  $('add_button').onclick = addVolunteer;
  $('delete_button').onclick = deleteVolunteer;
  $('clear_button').onclick = clearList;
  $('sort_button').onclick = sortList;
  $('sort_lbutton').onclick = sortListLastName;
  $('first_name').focus();
};

let $ = function (id) {
  return document.getElementById(id);
};

// To ADD Volunteers
var addVolunteer = function () {
  // get the data from the form

  var volunteerString = $('first_name').value + ' ' + $('last_name').value;
  //Check to assure First and Last name is entered;
  if (first_name.value == '' || last_name.value == '') {
    alert('All Fields Need to be completed');
    return false;
  }
  // store the data in an array
  volunteerArray.push(volunteerString);
  // display the volunteers and clear the add form
  displayVolunteers();
  // get the add form ready for next entry
  $('first_name').value = '';
  $('last_name').value = '';
  $('first_name').focus();

};

// To DISPLAY Volunteers
var volunteerArray = [];
var displayVolunteers = function () {
  // display the volunteers in the text area
  var i;
  $('volunteerList').value = '';
  for (i = 0; i < volunteerArray.length; i++) {
    $('volunteerList').value += i + 1 + '. ' + volunteerArray[i] + '\n';
  }
};

// To DELETE Volunteers
var deleteVolunteer = function () {
 var volunteerString = $('first_name').value + ' ' + $('last_name').value;
  // remove the string from the array
  for (var i = volunteerArray.length - 1; i >= 0; i--) {
    if (volunteerArray[i] === volunteerString) {
      volunteerArray.splice(i, 1);
    } else {
      alert("Nothing to delete; Try Again!");
      return false;
     }
  }

  // display the volunteers and clear the add form
  displayVolunteers();
  // get the delete form ready for next entry
  $('first_name').value = '';
  $('last_name').value = '';
  $('first_name').focus();
};

// To CLEAR Volunteers
var clearList = function () {
  // delete the data from the arrays
  volunteerArray = [];
  $('volunteerList').value = '';
  $('first_name').focus();
};

// To SORT Volunteer by FIRST Name
var sortList = function () {
  // sort the scores
  volunteerArray.sort();
  // display the scores
  displayVolunteers();
};

// To SORT Volunteer by LAST Name
//Comparing the last names and sorting it
function compare(a, b) {
//SPLIT single string into two strings  
  let splitA = a.split(' ');
  let splitB = b.split(' ');
  let lastNameA = splitA[splitA.length - 1];
  let lastNameB = splitB[splitB.length - 1];
  if (lastNameA < lastNameB) return -1;
  if (lastNameA > lastNameB) return 1;
  return 0;
}
var sortListLastName = function () {
  volunteerArray.sort(compare);
  // display the scores
  displayVolunteers();
};



