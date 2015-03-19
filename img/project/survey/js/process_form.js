/*personal info*/
function setupForm() {
	var error_array = new Array();
	error_array['fname'] = false;
	error_array['lname'] = false;
	error_array['phone'] = false;
	error_array['email'] = false;
	error_array['sulleyadd'] = false;
	/*first name*/	
	document.myform.fname_name.onblur = function() {
	var q1 = document.getElementById('q1');
	var span = q1.getElementsByTagName('span');
		if(this.value.length > 0) {
			validateData();
			return true;
		} else {
			span[0].firstChild.nodeValue = "Error!";
		}
	}
				
	document.myform.fname_name.onfocus = function() {
	var q1 = document.getElementById('q1');
	var span = q1.getElementsByTagName('span');
		span[0].firstChild.nodeValue = "Please enter a valid first name (only letters)";
		var img_error= document.getElementById('image5');
		img_error.style.display="none";
	}
	
	/*last name*/
	document.myform.lname_name.onblur = function() {
	var q2 = document.getElementById('q2');
	var span = q2.getElementsByTagName('span');
		if(this.value.length > 0) {
			validateData();
			return true;
		} else {
			span[0].firstChild.nodeValue = "Error!";
		}
	}
				
	document.myform.lname_name.onfocus = function() {
		var q2 = document.getElementById('q2');
		var span = q2.getElementsByTagName('span');
			span[0].firstChild.nodeValue = "Please enter a valid first name (only letters)";
		var img_error= document.getElementById('image7');
		img_error.style.display="none";
			
	}
	
	/*phone*/
	document.myform.phone_num.onblur = function() {
	var q3 = document.getElementById('q3');
	var span = q3.getElementsByTagName('span');
		if(this.value.length > 0) {
			validateData();
			return true;
		} else {
			span[0].firstChild.nodeValue = "Error!";
		}
	}
				
	document.myform.phone_num.onfocus = function() {
		var q3 = document.getElementById('q3');
		var span = q3.getElementsByTagName('span');
			span[0].firstChild.nodeValue = "Please enter a valid phone number (only number and (XXX)-XXX-XXXX)";
			var img_error= document.getElementById('image9');
		img_error.style.display="none";
	}	
	
	/*email*/
	document.myform.email_mail.onblur = function() {
	var q4 = document.getElementById('q4');
	var span = q4.getElementsByTagName('span');
		if(this.value.length > 0) {
			validateData();
			return true;
		} else {
			span[0].firstChild.nodeValue = "Error!";
		}
	}
				
	document.myform.email_mail.onfocus = function() {
		var q4 = document.getElementById('q4');
		var span = q4.getElementsByTagName('span');
			span[0].firstChild.nodeValue = "Please enter a valid email address (must contain @ bab@bab.bab)";
			var img_error= document.getElementById('image11');
		img_error.style.display="none";
	}	
	
	/*sulley address*/
	document.myform.sulley_mail.onblur = function() {
	var q5 = document.getElementById('q5');
	var span = q5.getElementsByTagName('span');
		if(this.value.length > 0) {
			validateData();
			return true;
		} else {
			span[0].firstChild.nodeValue = "Error!";
		}
	}
				
	document.myform.sulley_mail.onfocus = function() {
		var q5 = document.getElementById('q5');
		var span = q5.getElementsByTagName('span');
			span[0].firstChild.nodeValue = "Please enter a valid sulley address (http://bab.bab/~bab.bab)";
			var img_error= document.getElementById('image13');
		img_error.style.display="none";
	}	
}
function validateFields(){
	var error_array = new Array();
	if(document.myform.fname_name.value.length > 0){

	} else {
			error_array.push('fname_name');
	}
	
	if(document.myform.lname_name.value.length > 0){

	} else {
			error_array.push('lname_name');
	}
	
	if(document.myform.phone_num.value.length > 0){

	} else {
			error_array.push('lname_name');
	}
	if(document.myform.email_mail.value.length > 0){

	} else {
			error_array.push('lname_name');
	}
	if(document.myform.sulley_mail.value.length > 0){

	} else {
			error_array.push('lname_name');
	}
	var error_container = document.getElementById('error_display');
	while(error_container.hasChildNodes()){
		error_container.removeChild(error_container.lastChild);
	}
	
	for(var x=0;x<error_array.length;x++){
		var new_error_p = document.createElement('p');
		var new_error_p_text = document.createTextNode('There is an error in field: ' + error_array[x]);
		new_error_p.appendChild(new_error_p_text);
		error_container.appendChild(new_error_p);
	}
	
	if(error_array.length > 0){
		return false;
	}else{
		processForm1();
		return false;
	}
}
function Form(){
	document.myform.onclick = setupForm;
	document.myform.onsubmit = validateFields;
}
function processForm1(){
		
	document.getElementById('resubmit').style.display="block";
	document.getElementById('submit').style.display="none";
	return false;
}
function validateData()  {
	  /*fisrt name and last name*/
      var letters = /^[A-Za-z]+$/; 
	  var txt=document.myform.fname_name.value;
	  if(txt.match(letters)){
		var q1 = document.getElementById('q1');
		var span = q1.getElementsByTagName('span');
		var img= document.getElementById('image4');
		var img_error= document.getElementById('image5');
		img.style.display="inline-block";
			span[0].firstChild.nodeValue = "";
	  }else{
		var q1 = document.getElementById('q1');
		var span = q1.getElementsByTagName('span');
		var img= document.getElementById('image4');
	  var img_error= document.getElementById('image5');
		img_error.style.display="inline-block";
			span[0].firstChild.nodeValue = "You didn't enter valid name!";
	  }
	  var txt_1=document.myform.lname_name.value;
	  if(txt_1.match(letters)){
		var q2 = document.getElementById('q2');
		var span = q2.getElementsByTagName('span');
		var img= document.getElementById('image6');
		var img_error= document.getElementById('image7');
		img.style.display="inline-block";
		span[0].firstChild.nodeValue = "";
	  }else{
		var q2 = document.getElementById('q2');
		var span = q2.getElementsByTagName('span');
		var img= document.getElementById('image6');
		var img_error= document.getElementById('image7');
		img_error.style.display="inline-block";
			span[0].firstChild.nodeValue = "You didn't enter valid name!";
	  }
	  
	  /*phone number*/
	  var number = /^\((\d{3})\)[-](\d{3})[-](\d{4})$/;
		if(document.myform.phone_num.value.match(number)){
		var q3 = document.getElementById('q3');
		var span = q3.getElementsByTagName('span');
		var img= document.getElementById('image8');
		var img_error= document.getElementById('image9');
		img.style.display="inline-block";
			span[0].firstChild.nodeValue = "";
			validateFields();
	  }else{
		var q3 = document.getElementById('q3');
		var span = q3.getElementsByTagName('span');
		var img= document.getElementById('image8');
		var img_error= document.getElementById('image9');
		img_error.style.display="inline-block";
			span[0].firstChild.nodeValue = "You didn't enter valid phone number!";
	  }
	  
	  /*email*/
	   var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
		if(document.myform.email_mail.value.match(email)){
		var q4 = document.getElementById('q4');
		var span = q4.getElementsByTagName('span');
		var img= document.getElementById('image10');
		var img_error= document.getElementById('image11');
		img.style.display="inline-block";
			span[0].firstChild.nodeValue = "";
			

		
	  }else{
		var q4 = document.getElementById('q4');
		var span = q4.getElementsByTagName('span');
		var img= document.getElementById('image10');
		var img_error= document.getElementById('image11');
		img_error.style.display="inline-block";
			span[0].firstChild.nodeValue = "You didn't enter valid email!";
			
	  }
	  
	  /*sulley address*/
	  var sulley =/^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+\/)+(\~[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/;
		if(document.myform.sulley_mail.value.match(sulley)){
		var q5 = document.getElementById('q5');
		var span = q5.getElementsByTagName('span');
		var img= document.getElementById('image12');
		var img_error= document.getElementById('image13');
		img.style.display="inline-block";
			span[0].firstChild.nodeValue = "";
			
			
		
	  }else{
		var q5 = document.getElementById('q5');
		var span = q5.getElementsByTagName('span');
			var img= document.getElementById('image12');
		var img_error= document.getElementById('image13');
		img_error.style.display="inline-block";
			span[0].firstChild.nodeValue = "You didn't enter valid sulley address!";
		
	  }
	  }
window.onload = Form;
/**/

function processForm(){
	var answer = document.forms[0].answer;
	var val_1=0;
	var val_2=0;
	var val_3=0;
	var val_4=0;
	var val_5=0;
	var val_6=0;
	var val_7=0;
	var val_8=0;
	var i;
	for(i=0; i<document.forms[0].answer.length; i++){
		if(document.forms[0].answer[i].checked){
			val_1=document.forms[0].answer[i].value;
		}
	}
	for(i=0; i<document.forms[0].answer2.length; i++){
	if(document.forms[0].answer2[i].checked){
			val_2=document.forms[0].answer2[i].value;
	}
	}
	
	for(i=0; i<document.forms[0].answer3.length; i++){
	if(document.forms[0].answer3[i].checked){
			val_3=document.forms[0].answer3[i].value;
	}
	}
	
	for(i=0; i<document.forms[0].answer4.length; i++){
	if(document.forms[0].answer4[i].checked){
			val_4=document.forms[0].answer4[i].value;
	}
	}
	
	for(i=0; i<document.forms[0].answer5.length; i++){
	if(document.forms[0].answer5[i].checked){
			val_5=document.forms[0].answer5[i].value;
	}
	}
	
	for(i=0; i<document.forms[0].answer6.length; i++){
	if(document.forms[0].answer6[i].checked){
			val_6=document.forms[0].answer6[i].value;
	}
	}
	
	for(i=0; i<document.forms[0].answer7.length; i++){
	if(document.forms[0].answer7[i].checked){
			val_7=document.forms[0].answer7[i].value;
	}
	}
	
	for(i=0; i<document.forms[0].answer8.length; i++){
	if(document.forms[0].answer8[i].checked){
			val_8=document.forms[0].answer8[i].value;
	}
	}
	var sum= parseInt(val_1) + parseInt(val_2) + parseInt(val_3) + parseInt(val_4) + parseInt(val_5) + parseInt(val_6) + parseInt(val_7) + parseInt(val_8);
		document.getElementById('totalSum').value=sum;

	document.myform.onsubmit=function (){
		document.getElementById('survey').style.display="none";
		document.getElementById('info').style.display="none";
		var x = document.images[0].src;
		
		/*display info*/
		document.getElementById('name').textContent="Hello " + document.myform.fname_name.value + "" + document.myform.lname_name.value;
		document.getElementById('phone').textContent="Your phone number: " + document.myform.phone_num.value;
		document.getElementById('email').textContent="Your email: " + document.myform.email_mail.value;
		document.getElementById('url').textContent="Your sulley address: " + document.myform.sulley_mail.value;
		document.getElementById('name').style.display="block";
		document.getElementById('phone').style.display="block";
		document.getElementById('email').style.display="block";
		document.getElementById('url').style.display="block";
		
		
		if(sum<=9){
			document.getElementById('image1').style.display="block";
			document.getElementById('badge1').firstChild.nodeValue="<a href='http://sulley.cah.ucf.edu/~th353996/dig3716c/assignment3/survey1.html'  style='border:0px solid blue; '> <img border=0 src='http://sulley.cah.ucf.edu/~th353996/dig3716c/assignment3/img/redlight.png'/></a></p>;";
			document.getElementById('badge1').style.display="block";
			document.getElementById('submit').style.display="none";
			return false;
		}
		else if(10<=sum<=15){
			document.getElementById('image2').style.display="block";
			document.getElementById('badge2').firstChild.nodeValue="<a href='http://sulley.cah.ucf.edu/~th353996/dig3716c/assignment3/survey1.html'  style='border:0px solid blue; '> <img border=0 src='http://sulley.cah.ucf.edu/~th353996/dig3716c/assignment3/img/yellowlight.png'/></a></p>;";
			document.getElementById('badge2').style.display="block";
			document.getElementById('submit').style.display="none";
			return false;
		}
		else if(16<=sum){
			document.getElementById('image3').style.display="block";
			document.getElementById('badge3').firstChild.nodeValue="<a href='http://sulley.cah.ucf.edu/~th353996/dig3716c/assignment3/survey1.html'  style='border:0px solid blue; '> <img border=0 src='http://sulley.cah.ucf.edu/~th353996/dig3716c/assignment3/img/greenlight.jpg'/></a></p>;";
			document.getElementById('badge3').style.display="block";
			document.getElementById('submit').style.display="none";
			return false;
		}else{
			validateFields;
			return false;
		}
		
	}

}



/*survey*/
