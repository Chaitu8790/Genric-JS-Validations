function validate()
{
	var validfields = true;
	var validcombo = true;
	var multicheck = true;
	var multicombo = true;
	var txtarea = true;
	var datetime = true;
	var single=true;
	validfields = validatefields();
	if(validfields)
	{
		validcombo = validatecombo();	
		if(validcombo)
		{
			multicheck = multicheckbox();
			if(multicheck)
			{
				multicombo = multicombocheck();
				if(multicombo)
				{
					txtarea = textarea();
					if(txtarea)
					{
						datetime = datetimecheck();
						if(datetime)
						{

							checkbox=checks();
							return checkbox;
						}
					}
				}
			}
		}
	}
return false;	
}
function validatefields()
	{
		var name = document.getElementById('fname').value;
		var password = document.getElementById('password').value;
		var email = document.getElementById('eid').value;
		var namereg = new RegExp(/^[A-Za-z]+$/);
		var emailreg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
		var passwordreg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
						
						
						// validation of name,email and password
		
		if(name == "")
		{
			document.getElementById('fnm').innerHTML = "*Please enter name";
			document.getElementById('fname').focus();
			document.getElementById('fnm').style.color = " red";
			return false;
		}
		else if(!namereg.test(name))
		{
			document.getElementById('fnm').innerHTML = "*Name must be in characters only";
			document.getElementById('fname').focus();
			document.getElementById('fnm').style.color = "red";
			return false;
		}
		else if(name.length < 6)
		{
			document.getElementById('fnm').innerHTML = "*Please enter at least 6 characters";
			document.getElementById('fname').focus();
			document.getElementById('fnm').style.color = "red";
			return false;
		}
		else
		{
			document.getElementById('fname').style.backgroundColor = "white";
			document.getElementById('fnm').style.display = "none";
		}
		if(email =="")
		{
			document.getElementById('em').innerHTML = "*Please enter email";
			document.getElementById('eid').focus();
			document.getElementById('em').style.color = "red";
			return false;
		}
		else if(!emailreg.test(email))
		{
			document.getElementById('em').innerHTML = "*Please enter valid email";
			document.getElementById('eid').focus();
			document.getElementById('em').style.color = "red";
			return false;
		}
		else
		{
			document.getElementById('eid').style.backgroundColor = "white";
			document.getElementById('em').style.display = "none";
		}
		if(password =="")
		{
			document.getElementById('pd').innerHTML = "*Please enter password";
			document.getElementById('password').focus();
			document.getElementById('pd').style.color = "red";
			return false;
		}
		else if(!passwordreg.test(password))
		{
			document.getElementById('pd').innerHTML = "*Please enter valid password";
			document.getElementById('password').focus();
			document.getElementById('pd').style.color = "red";
			return false;
		}
		else
		{
			document.getElementById('password').style.backgroundColor = "white";
			document.getElementById('pd').style.display = "none";	
			return true;
		}
		
	}
				// validation of combo,radio button

	function validatecombo()
	{
		var state = document.getElementById('Selectid');
		var strSt= state.options[state.selectedIndex].value;
		
		
				var yes = document.getElementById('yes');
		var no = document.getElementById('no');
		if(strSt == 0)
		{
			document.getElementById('Sid').innerHTML = "*Please select your field of study";
			document.getElementById('Selectid').focus();
			document.getElementById('Sid').style.color="red";
			return false;
		}
		else
		{
			document.getElementById('Sid').style.display = "none";
		}
		if(yes.checked == false && no.checked == false)
		{
			document.getElementById('cnf').innerHTML = "*Please confirm ";
			document.getElementById('yes').focus();
			document.getElementById('cnf').style.color="red";
			return false;
		}
		else
		{
			document.getElementById('cnf').style.display = "none";
			return true;
		}
		

	}
				// validation of multicheckbox

	function multicheckbox()
	{
		var fulltime = document.getElementById('fid');
		var partime = document.getElementById('pid');
		var correspondence = document.getElementById('rid');
		// var language = document.querySelector('input[name="language"]:checked').value;
		if(fulltime.checked == false && partime.checked == false && correspondence.checked == false)
		{
			document.getElementById('me').innerHTML = "*Please choose atleast one Mode";
			document.getElementById('pid').focus();
			document.getElementById('me').style.color="red";
			return false;
		}
		else
		{
			document.getElementById('me').style.display = "none";
			return true;
		}
	}
				// validation of multicombocheck

	function multicombocheck()
	{
		var courses = document.getElementById('course').value;
		if(courses == "")
		{
			document.getElementById('cd').innerHTML = "*Please choose your course";
			document.getElementById('course').focus();
			document.getElementById('cd').style.color="red";
			return false;
		}
		else
		{
			document.getElementById('cd').style.display = "none";
			return true;
		}
	}
				// validation of textarea

	function textarea()
	{
		var txtarea = document.getElementById('textarea').value;
		if(txtarea < 15)
		{
			document.getElementById('txt').innerHTML = "*Enter atleast 15 characters";
			document.getElementById('textarea').focus();
			document.getElementById('txt').style.color = "red";
			return false;
		}
		else
		{
			document.getElementById('txt').style.display = "none";
			document.getElementById('textarea').style.backgroundColor = "white";
			return true;
		}
	}
				// validation of datetime

	function datetimecheck()
	{
			
		var datetime = document.getElementById('date').value;
	var time=document.getElementById('time').value;

    	if(datetime =="")
    	{
	      document.getElementById('dateerror').innerHTML = "*Enter valid date";
	      document.getElementById('date').focus();
	      document.getElementById('dateerror').style.color = "red";
	      return false;
    	}

    	else
    	{
	      document.getElementById('date').style.backgroundColor = "white";
	      document.getElementById('dateerror').style.display = "none";
     
    	}
		if(time =="")
    	{
	      document.getElementById('terror').innerHTML = "*Enter valid time";
	      document.getElementById('time').focus();
	      document.getElementById('terror').style.color = "red ";
	      return false;
    	}
		
    	{
	      document.getElementById('time').style.backgroundColor = "white";
	      document.getElementById('terror').style.display = "none";
	      return true;
    	}

	}

			// Validation for singlecheckbox
	function checks()
	{
		if(!this.myform.checkbox.checked)
        {
            alert('You must agree to the terms first.');
            return false;
        }

// Final Submit
    	else
        {
        alert("Submitted Successfully");
        return true;
        }
    


}

function checkallbox1(){
document.getElementById("fid").checked=true;
document.getElementById("pid").checked = false;
      document.getElementById("rid").checked = false;
}
function checkallbox2(){
document.getElementById("fid").checked=false;
document.getElementById("pid").checked = true;
      document.getElementById("rid").checked = false;
}
function checkallbox3(){
document.getElementById("fid").checked=false;
document.getElementById("pid").checked = false;
      document.getElementById("rid").checked = true;
}



function bl(){
	document.getElementById("fnm").innerHTML="";
	document.getElementById("em").innerHTML="";
	document.getElementById("pd").innerHTML="";
	document.getElementById("Sid").innerHTML="";
	document.getElementById("cnf").innerHTML="";
	document.getElementById("me").innerHTML="";
	document.getElementById("cd").innerHTML="";
	document.getElementById("txt").innerHTML="";
	document.getElementById("dateerror").innerHTML="";
	document.getElementById("terror").innerHTML="";
	
	}