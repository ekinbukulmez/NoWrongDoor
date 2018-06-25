  var fieldInput = document.querySelector('#field').value;
  var suburbInput = document.querySelector('#sub').value;
  var ageInput = document.querySelector('input[name = "age"]').value;
  if (fieldInput==null || fieldInput=="", suburbInput==null || suburbInput=="", ageInput==null || ageInput=="") {
            alert("Please Fill All Required Fields");
            return false;
        }
	var results = [];
  var readyOrgs = JSON.stringify(orgsArray);
  readyOrgs.forEach(function(org) {
  	//only by suburb for testing purposes
  	if(org.OrgSuburb == suburbInput) {
    	results.push(org);
    }
  for(var k = 0; k < results.length; k ++) {
    var resOrg = results[k];
    var $filtrow = $('<tr></tr>');
    $filtrow.append($('<td></td>').text(resOrg.OrgName));
    $filtrow.append($('<td></td>').text(resOrg.OrgField));
    $filtrow.append($('<td></td>').text(resOrg.OrgSuburb));
    $tablebody.append($filtrow);
    }
    $('#filter.').append($tablebody);
  }