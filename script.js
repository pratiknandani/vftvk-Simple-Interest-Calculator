// Function triggered when compute interest button clicked
function compute()
{
    // Getting local date
    var d = new Date();
    var n = d.getFullYear();

    // Getting amount entered
    p = document.getElementById("principal").value;
    if(p<=0)
    {
    alert("Please, enter a positive number greater than zero");
    document.getElementById("principal").value = "";
    document.getElementById("principal").focus();
    document.getElementById("principal").click();
    return null;
    }

    // Getting value of slider for rate of interest
    r = document.getElementById("rate").value;

    // Getting value of dropdown for years
    y = document.getElementById("years").value;

    // Computing the interest
    i = p*r*y/100;

    // Computing the year after which interest will be given
    final_year = Number(n)+Number(y);

    // Changing the final result
    document.getElementById("result").innerHTML = "If you deposit " + "<mark>" + p + "</mark>" + ",<br> at an interest rate of " + "<mark>" + r +"%" + "</mark>" + ".<br> You will receive an amount of " + "<mark>" + i + "</mark>" + ", <br>in the year "+ "<mark>" +final_year + "</mark>";
}

// Function triggered when slider changed
function changeRate(){
    rate = document.getElementById("rate").value;
    document.getElementById("rateSpan").innerHTML = rate.toString()+"%";
}