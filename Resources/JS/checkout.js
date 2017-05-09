var grandtotal;

var couponcodes = ["awsome", "time", "newyear", "summer", "offer"];
	
function promocode(){

	var div1 = document.createElement('div');
	div1.id = 'myModal';
	div1.className = 'modal fade';
	div1.setAttribute("role", "dialog");     

	var innerDiv1m = document.createElement('div');
	innerDiv1m.className = 'modal-dialog modal-sm';
	div1.appendChild(innerDiv1m);              

	var innerDiv2m = document.createElement('div');
	innerDiv2m.className = 'modal-content';
	innerDiv1m.appendChild(innerDiv2m);

	var innerDiv3 = document.createElement('div');
	innerDiv3.className = 'modal-header';
	innerDiv3.innerHTML = "<span style = 'color:red; font-size:large; font-style:italic;' >OFFER OFFER OFFER</style>";
	innerDiv2m.appendChild(innerDiv3);

	var buttonM = document.createElement("button");
	buttonM.className = 'close';
	buttonM.setAttribute("data-dismiss", "modal");
	buttonM.setAttribute("aria-hidden", "true");
	buttonM.setAttribute("value", "No");
	innerDiv3.appendChild(buttonM); 

	
	var headerM = document.createElement("H4");
	headerM.className = 'modal-title';
	innerDiv3.appendChild(headerM);

	var innerDiv31 =  document.createElement('div');
	innerDiv31.className = 'modal-body';
	innerDiv2m.appendChild(innerDiv31);

	var para =  document.createElement('p'); 
	innerDiv31.appendChild(para);
	para.innerHTML = "Hi today is offer day...You can avail offers by entering the promo code if you have any...Do you have the promo code???";

	var innerDiv32 =  document.createElement('div');
	innerDiv32.className = 'modal-footer';
	innerDiv2m.appendChild(innerDiv32);

	var closeButton = document.createElement("input");
	closeButton.className = 'btn btn-default';
	closeButton.setAttribute("data-dismiss", "modal");
	closeButton.setAttribute("type", "button");
	closeButton.setAttribute("value", "No");
	closeButton.setAttribute("onclick", "nopromo()");
	innerDiv32.appendChild(closeButton);

	var closeButton1 = document.createElement("input");
	closeButton1.className = 'btn btn-default';
	closeButton1.setAttribute("data-dismiss", "modal");
	closeButton1.setAttribute("type", "button");
	closeButton1.setAttribute("value", "Yes");
	closeButton1.setAttribute("onclick", "promo()");
	innerDiv32.appendChild(closeButton1);

	document.getElementById("promo").appendChild(div1);


}
	
function promo()
{   		
   document.getElementById("promobtn").disabled = true;
	var promo = document.getElementById("promo");

	var input = document.createElement("input");
	input.setAttribute("type", "text");
	input.setAttribute("id", "promocode");
	input.setAttribute("placeholder", "Enter promo code");
	input.setAttribute("onchange", "calculate()");
	promo.appendChild(input);
}

function nopromo()
{    document.getElementById("promobtn").disabled = true;

for (var q=0; q<sessionStorage.getItem("count");q++) {
		
	var sub = document.getElementById("subtotal");
	var index = sessionStorage.getItem("index");
	console.log(index);
	grandtotal = sessionStorage.getItem("grandtotal");

}
var d = document.getElementById("discount");
var discount = document.createElement("div");
discount.innerHTML = "Grand Total : $ "+ grandtotal;
d.appendChild(discount);

}

function calculate()
{
	
	
	for (var q=0; q<sessionStorage.getItem("count");q++) {
		
	var sub = document.getElementById("subtotal");
	var index = sessionStorage.getItem("index");
	console.log(index);
	grandtotal = sessionStorage.getItem("grandtotal");

	}

var coupon = document.getElementById("promocode");
var couponcode = coupon.value;

if(couponcode == "awsome" )
{
	alert("Congrats you have availed 10% offer on your grand total");
	grandtotal = grandtotal - (grandtotal * 10.0)/100.0;
	
}

else if(couponcode == "time"){

	alert("Congrats you have availed 20% offer on your grand total");
	grandtotal = grandtotal - (grandtotal * 20.0)/100.0;
	

}

else if(couponcode == "newyear"){

	alert("Congrats you have availed 50% offer on your grand total");
	grandtotal = grandtotal - (grandtotal * 50.0)/100.0;
	

}

else if(couponcode == "summer"){

	alert("Congrats you have availed 5% offer on your grand total");
	grandtotal = grandtotal - (grandtotal * 5.0)/100.0;
	

}

else if(couponcode == "offer"){

	alert("Congrats you have availed 15% offer on your grand total");
	grandtotal = grandtotal - (grandtotal * 15.0)/100.0;

}

else
{
		alert("Sorryy... You Entered a wrong promo code..");
}


var d = document.getElementById("discount");
var discount = document.createElement("div");
discount.innerHTML = "Discount Price : $ "+ grandtotal;
d.appendChild(discount);
console.log(couponcode);

console.log(grandtotal);


}
	
function finish(){

	alert("Thank you for shopping with us.....:) Hope u enjoyed...:)");
	window.location.href="index.html";
	sessionStorage.clear();

}


for(var q=0; (q<=sessionStorage.getItem("count"))|| (q<sessionStorage.getItem("index"));q++)
{
	var title = sessionStorage.getItem("title_"+q);

	

	var sub = document.getElementById("subtotal");
	var index = sessionStorage.getItem("index");
	console.log(index);
	console.log(sessionStorage.getItem("grandtotal"));
	sub.innerHTML = "$ " + sessionStorage.getItem("grandtotal");

	if(title != null)
	{

    var tr = document.createElement("tr"); 
    var tbody = document.getElementById("tbody");
    tbody.appendChild(tr);

    var td = document.createElement("td");
    td.className = "col-md-3";
    tr.appendChild(td);

    var imagecontainer = document.createElement("div");
    imagecontainer.className="media"; 

	var imagediv = document.createElement("img");
	imagediv.className= "image-container";
	imagediv.setAttribute("src", sessionStorage.getItem("url_"+q));
	imagecontainer.appendChild(imagediv);

	td.appendChild(imagecontainer);

	var td1 = document.createElement("td");
	var innerdiv = document.createElement("div");
	innerdiv.className= "mtitle text-center";
	innerdiv.setAttribute("id", "innerdiv");
	innerdiv.innerHTML = sessionStorage.getItem("title_"+q);
	td1.appendChild(innerdiv);
    tr.appendChild(td1);

	
	var td2 = document.createElement("td");
	var pricediv = document.createElement("div");
	pricediv.className ="mprice text-center";
	pricediv.innerHTML = sessionStorage.getItem("price_"+q);
	td2.appendChild(pricediv);
    tr.appendChild(td2);

	var td3 = document.createElement("td");
	var quantdiv = document.createElement("div");
	quantdiv.className ="mquant text-center";
	quantdiv.innerHTML = sessionStorage.getItem("quantity_"+q);
	td3.appendChild(quantdiv);
    tr.appendChild(td3);

	var td4 = document.createElement("td");
	var tpricediv = document.createElement("div");
	tpricediv.className ="mtprice";
	tpricediv.innerHTML = sessionStorage.getItem("tprice_"+q);
	td4.appendChild(tpricediv);
    tr.appendChild(td4);

	}



console.log(sessionStorage.getItem("title_"+q));
console.log(sessionStorage.getItem("url_"+q));
}