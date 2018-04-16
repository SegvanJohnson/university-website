// JavaScript Document

function checkUserViaJs()
{
	//checking the appropriate object.
	if(window.XMLHttpRequest)
	{
		obj=new XMLHttpRequest();
	}
	else if(window.ActiveXObject)
	{
		obj=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//getting the username and password from the login window
	var username=document.loginDiv.username.value;
	var password=document.loginDiv.password.value;
	//checking if username is empty or not
	if(username=="")
	{
		alert("Enter Username");
	}
	//checking if username is abc (for this web portal, we have set username as abc)
	else if(username!="abc")
	{
				alert("Enter correct Username");
	}
	//checking if password is empty or not
	else if(password=="")
	{
				alert("Enter Password");
	}
	//checking if username is abc (for this web application, we have set password as abc)
	else if(password!="abc")
	{
				alert("Enter correct Password");
	}
	//if all correct, open Admin.html
	else
	{
		window.open("Admin.html",'_self');
	}
	
	
	
}





//Javascript for Registering Staff Members

function registerStaffViaJs()
{
	//getting all the input values from the form in Staff Register.html page
	var facultyname=document.StaffRegistrationForm.facultyname.value;//name
	var category=document.StaffRegistrationForm.category.value;//category
	
	var qualification=document.StaffRegistrationForm.qualification.value;//qualification
	var gender=document.StaffRegistrationForm.gender.value;//gender
	var dob=document.StaffRegistrationForm.dob.value;//date of birth
	
	var doj=document.StaffRegistrationForm.doj.value;//date of joining

	var password=document.StaffRegistrationForm.password.value;//password
	var confirmpassword=document.StaffRegistrationForm.confirmpassword.value;//confirm password
	var email=document.StaffRegistrationForm.email.value;//email
	var phone=document.StaffRegistrationForm.phone.value;//phone
	var address=document.StaffRegistrationForm.address.value;//address
	
	
	//checking if empty
	if(facultyname=="")
	{
		alert("Enter your username");
		//set focus on the particular input field
		document.StaffRegistrationForm.facultyname.focus();
		
	}
		//checking if empty
	else if(category=="select")
	{
		alert("Enter Appropriate Category");
		
		
		document.StaffRegistrationForm.category.focus();
	}
		//checking if empty
	else if(qualification=="select")
	{
		alert("Select your Qualification");
		
		
		document.StaffRegistrationForm.qualification.focus();
	}
		//checking if empty
	else if(gender=="select")
	{
		alert("Select your Gender");
		
		
		document.StaffRegistrationForm.gender.focus();
	}
		//checking if empty
	else if(dob=="")
	{
		alert("Enter your Date of birth");

		document.StaffRegistrationForm.dob.focus();
		
	}
		//calling a function named as checkAge(dob) that will check if user is greater than 18
	else if(checkAge(dob)==false)
	{
		alert("Age should be greater than 18");
				document.StaffRegistrationForm.dob.focus();
	}
		//checking if empty
	else if(doj=="")
	{
		alert("Enter your date of joining");
		
		document.StaffRegistrationForm.doj.focus();
		
	}
	//calling a function named as checkDOJ(doj) that will check if user has enetered correct date of joining
	else if(checkDOJ(doj)==false)
	{
		alert("Enter correct date of joining.");
				document.StaffRegistrationForm.doj.focus();
		
	}
	//checking if empty
	else if(password=="")
	{
		alert("Enter your Password");
		
		document.StaffRegistrationForm.password.focus();
		
	}
	//checking if password is less than 3 characters
	else if(password.length<3)
	{
		alert("Password should contain atleast 3 characters.");
		
		document.StaffRegistrationForm.password.focus();
		
	}
	//checking if empty
	else if(confirmpassword=="")
	{
		alert("Enter your confirm password");
		
		document.StaffRegistrationForm.confirmpassword.focus();
		
	}
	//checking if confirm password matches the original password
	else if(confirmpassword!=password)
	{
		alert("Confirm password and password does not match");
		
		document.StaffRegistrationForm.confirmpassword.focus();
		
	}
	//checking if empty
	else if(email=="")
	{
		alert("Enter the Email Address");
		
		document.StaffRegistrationForm.email.focus();
	}
	//checking if correct email is entered by using validateEmail(email) function
	else if(email!="" && validateEmail(email)==false)
	{
		alert('Please provide a valid email address');
    document.StaffRegistrationForm.email.focus();
		
	}
	//checking if empty
	else if(phone=="")
	{
		alert("Enter the Mobile Number");
		
		document.StaffRegistrationForm.phone.focus();
		
	}
	//checking if only numbers are entered or not
	else if(isNaN(phone))
	{
		alert("Enter a valid Mobile Number");
		
		document.StaffRegistrationForm.phone.focus();
		

	}
	//chechking if length is less than 10 digits (10 digit phone number)
	else if(phone.length<10)
	{
		alert(" Mobile Number should be of 10 digits atleast");
		
		document.StaffRegistrationForm.phone.focus();
		
	}
	//chechking if length is greater than 10 digits
	else if(phone.length>10)
	{
		alert(" Mobile Number should be of 10 digits atmost");
		
		document.StaffRegistrationForm.phone.focus();
		
	}
	//checking if empty
	else if(address=="")
	{
		alert(" Enter your address");
		
		document.StaffRegistrationForm.address.focus();
		
	}
	//Registration Successful
	else
	{
		alert("Registration Successful");	
			
	}

}

//Email Validation function
function validateEmail(elementValue){      
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   return emailPattern.test(elementValue); 
 } 


//age function
function checkAge(dob)
{
	
	var today = new Date(),
            dob = new Date(dob),
            age = new Date(today - dob).getFullYear() - 1970;

        if(age<18)
		{
			
			return false;
		}
		else
		{
			return true;
		}
  
}
//date of joining function
function checkDOJ(doj)
{
	var today=new Date().getDate(),doj=new Date(doj).getDate();
	if(doj<=today)
	{
		return true;
	}
	
	else 
	{
		return false;
	}

}








//Javascript for Registering Student
function registerStudentViaJs()
{
	
	
//getting all the input values from the form in Student Register.html page
	var name=document.StudentRegistrationForm.name.value;//name
	
	var branch=document.StudentRegistrationForm.branch.value;//branch
	var batch=document.StudentRegistrationForm.batch.value;//batch
	var dob=document.StudentRegistrationForm.dob.value;//date of birth
	var gender=document.StudentRegistrationForm.gender.value;//gender
	var password=document.StudentRegistrationForm.password.value;//password
	var confirmpassword=document.StudentRegistrationForm.confirmpassword.value;//confirm password
	var email=document.StudentRegistrationForm.email.value;//email
	var mobilenumber=document.StudentRegistrationForm.mobilenumber.value;//mobile
	var address=document.StudentRegistrationForm.address.value;//address
	
	
	//checking if empty
	if(name=="")
	{
		alert("Enter your name");
		
		document.StudentRegistrationForm.name.focus();
		
	}
	//checking if empty
	else if(branch=="select")
	{
		alert("Enter your branch");
		
		document.StudentRegistrationForm.branch.focus();
		
	}
	//checking if empty
	else if(batch=="select")
	{
		alert("Enter your batch");
		
		document.StudentRegistrationForm.batch.focus();
	}
	//checking if empty
	else if(dob=="")
	{
		alert("Enter your Date of birth");
		
		document.StudentRegistrationForm.dob.focus();
	}
	//checking if age is less than 18
	else if(checkAge(dob)==false)
	{
		alert("Age should be greater than 18");
				document.StudentRegistrationForm.dob.focus();
	}
	//checking if empty
	else if(gender=="select")
	{
		alert("Enter your Gender");
		
		document.StudentRegistrationForm.gender.focus();
		
	}	
	//checking if empty
	else if(password=="")
	{
		alert("Enter your Password");
		
		document.StudentRegistrationForm.password.focus();	
	}
	//checking if password length is less than 3
	else if(password!="" && password.length<3)
	{
		alert(" password should atleast have three characters");
		
		document.StudentRegistrationForm.password.focus();
		
	}
	//checking if empty
	else if(confirmpassword=="")
	{
		alert("Enter your confirm password");
		
		document.StudentRegistrationForm.confirmpassword.focus();
		
	}
	//checking if password is same as confirm password
	else if(confirmpassword!=password)
	{
		alert(" password is not maching confirm password");
		
		document.StudentRegistrationForm.confirmpassword.focus();
		
	}
	
	//checking if empty
	else if(email=="")
	{
		alert("Enter the Email Address");
		
		document.StudentRegistrationForm.email.focus();
		
	}
	//checking if correct email
	else if(email!="" && validateEmail(email)==false)
	{
		
    alert('Please provide a valid email address');
    document.StudentRegistrationForm.email.focus();
		
	}
	//checking if empty
	else if(mobilenumber=="")
	{
		alert("Enter the Mobile Number");
		
		document.StudentRegistrationForm.mobilenumber.focus();
		
	}
	//checking if only numbers
	else if(isNaN(mobilenumber))
	{
		alert("Enter the valid Mobile Number");
		
		document.StudentRegistrationForm.mobilenumber.focus();
		

	}
	//chechking if length is less than 10 digits (10 digit phone number)
	else if(mobilenumber.length<10)
	{
		alert(" Mobile Number should be of 10 digits atleast");
		
		document.StudentRegistrationForm.mobilenumber.focus();
		
	}
	//chechking if length is greater than 10 digits 
	else if(mobilenumber.length>10)
	{
		alert(" Mobile Number should be of 10 digits atmost");
		
		document.StudentRegistrationForm.mobilenumber.focus();
		
	}
	//checking if empty
	else if(address=="")
	{
		alert(" Enter your address");
		//document.getElementById("responsearea").innerHTML="";
		//document.getElementById("responsearea").innerHTML="Enter Your Address";
		document.StudentRegistrationForm.address.focus();
		
	}
	//Registration successful
	else
	{
		alert("Registration Successful");	
			
	}

}







//function so that name only contains letters and no numbers



function onlyAlphabets(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        }
        else if (e) {
            var charCode = e.which;
        }
        else { return true; }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
            return true;
        else
            return false;
    }
    catch (err) {
        alert(err.Description);
	}
}