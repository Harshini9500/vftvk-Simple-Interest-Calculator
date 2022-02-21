
function updateRate() 
{

    var rateval = document.getElementById("rate").value;

    document.getElementById("rate_val").innerText=rateval;
}


function focus()
{

	document.getElementById("principal").focus();


}


function validate()
{


	var principal = document.getElementById("principal").value;


    	if(principal<=0)
    	{
		
		alert("Enter a positive number");
		focus();
                return false;
        
    	}
	return true;
}


function compute()
{

        if(validate())
	{

	var principal = document.getElementById("principal").value;

	var rate = document.getElementById("rate").value;

    	var years = document.getElementById("years").value;

    	var amount = principal * years * rate /100;

    	var year = new Date().getFullYear()+parseInt(years);


   	var str="If you deposit <mark>"+principal+"</mark>,<br/>at an interest rate of <mark>"+rate+"%</mark>. <br/>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>";

    	document.getElementById("result").innerHTML=str;

	}


}

	
    












        