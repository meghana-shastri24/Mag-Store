
var count;
var totalQuantity=0;
var grandtotal =0;
var q, index;
var gtotalquant=0;
var grandtot=0;
var flag1=0, flag2=0, flag3=0, flag4=0;

var json = {
	
		"data" : [
				{
				"title" : "Golf",
				"price" : "10",
				"url"	: "Resources/Images/Golf.jpg",
				"cat" :   "trending, entertainment"
				},

				{
				"title" : "Cooking",
				"price" : "12",
				"url"	: "Resources/Images/Cooking.jpg",
				"cat" :   "trending,food"
				},

				{
				"title" : "Entertainment",
				"price" : "14",
				"url"	: "Resources/Images/Entertainment.jpg",
				"cat" :   "trending,entertainment"
				},

				{
				"title" : "Health",
				"price" : "20",
				"url"	: "Resources/Images/Health.jpg",
				"cat" :   "trending,food"
				},

				{
				"title" : "People",
				"price" : "13",
				"url"	: "Resources/Images/People.jpg",
				"cat" :   "trending,entertainment"
				},

				{
				"title" : "Sunset",
				"price" : "15",
				"url"	: "Resources/Images/Sunset.jpg",
				"cat" :   "trending,travel"
				}

				]
			};

function tabContentCrete(tabid)
{
		Length = json.data.length;
		console.log(Length);

		var outerDiv = document.createElement('div');
		// outerDiv.id= tabid;
		// console.log(tabid);
		outerDiv.className='row';
		document.getElementById(tabid).appendChild(outerDiv);
		
		
      for(var i =0; i<Length; i++)
            {
           	var category = json.data[i].cat;
           	var c = category.split(',');
           	console.log(c[0] + " " + c[1]);
           	if(tabid == c[0] || tabid == c[1])
           	{
           		
		var containerDiv = document.createElement('div');
		containerDiv.className='col-lg-3 col-md-4 col-sm-6 card-container';
		outerDiv.appendChild(containerDiv);
		
		var cardDiv = document.createElement('div');
		cardDiv.className='card';
		containerDiv.appendChild(cardDiv);
		var image= document.createElement('img');

		image.className="image-container";
		image.setAttribute("src" , json.data[i].url);
		cardDiv.appendChild(image);
		

		var para = document.createElement('div');
		para.className='price';
		cardDiv.appendChild(para);

		var ptitle = document.createElement('p');
		ptitle.setAttribute("id", "ptitle");
	   ptitle.innerHTML =  json.data[i].title;
	   para.appendChild(ptitle);

	   var pprice =document.createElement("p");
	   pprice.setAttribute("id", "pprice");

	   pprice.innerHTML = "$" +" " + json.data[i].price;
	   para.appendChild(pprice);

	   
	   var cartDiv=document.createElement("div");
	   // cartDiv.className='add';
	   cartDiv.id = "addCart-id"+i;
	   var buttonId = i;

	   console.log(buttonId);		
	   cardDiv.appendChild(cartDiv);

	   var values=['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
	   var opt;
	   var select = document.createElement('select');
	   select.setAttribute("id", "sel"+i+tabid);
	   var quantity_id = "sel"+i+tabid;
	   	for(var j=0; j<10; j++)
	   	{
	   			var k=j;
	   		    opt = document.createElement("option");
	   			opt.setAttribute("id", "options");
	   		    opt.setAttribute('text', values[j]);
	   			opt.setAttribute('value', values[j]);
	   			opt.innerHTML=values[j];
	   			select.appendChild(opt);

	   			// console.log(opt.id);
	   	
	   	}
	   			
	   	para.appendChild(select);
	    cartDiv.innerHTML = '<button type="button" id= "' + buttonId +'" value="Add to Cart" class="add-option btn" onclick="AddtoCart (json.data[this.id].url, json.data[this.id].price, json.data[this.id].title, '+quantity_id+')" />' + "Add to Cart";	    

         }

	}


}

		
function selecttab( tabid)
	{
		var i,tabcontent;
		tabcontent = document.getElementsByClassName('tabContent');
		for(i = 0; i<tabcontent.length;i++)
		{
					
			tabcontent[i].style.display = "none";
		}

		if(flag1==0 || flag2==0|| flag3==0 || flag4==0)
		{
		if(tabid=='trending')
		{	
			flag1 = 1;
			tabContentCrete('trending');


		}
		
		if(tabid=='entertainment')
		{	
			flag2=1;
			tabContentCrete('entertainment');

		}
		else if(tabid=='travel')
		{
			flag3=1;
			tabContentCrete('travel');

		}
		else if(tabid=='food')
		{

			flag4=1;
			tabContentCrete('food');
		}

		console.log(flag1 +"" + flag2 + "" + flag3 + "" + flag4);
	}
		document.getElementById(tabid).style.display='block';

}

function AddtoCart(url, price, title, qid)
{

		if(sessionStorage.getItem("count") == null || sessionStorage.getItem("count") == "undefined" || sessionStorage.getItem("count")==0)
		{
			sessionStorage.setItem("count", 0);	
		 	count=0;
		 	console.log(count);
		}

count = parseInt(sessionStorage.getItem("count")) + 1;
sessionStorage.setItem("count", count);

console.log("count " + sessionStorage.getItem("count"));
var quant, price, totalprice,j=0;

// console.log("in hello " + id);
// console.log(uid);
// console.log(tabid.id);
		
		if(sessionStorage.getItem("index") == null || sessionStorage.getItem("index") == "undefined")
		{
			sessionStorage.setItem("index", 0);	
			index = sessionStorage.getItem("index");
		 	console.log(index);
		}

		index = sessionStorage.getItem("index");
		console.log(index);
		q=index;
		console.log("q " + q + "index " + index);
		var mcontent = document.getElementById("modal-content");
		console.log(mcontent);
				
		var outdiv = document.createElement("div");
		outdiv.className="out-div";
		sessionStorage.setItem("outdivid_"+index, "outdivid_"+index);
		outdivid = sessionStorage.getItem("outdivid_"+index);
		console.log(outdivid);
		outdiv.setAttribute("id", outdivid);
		mcontent.appendChild(outdiv);


		var image = document.createElement("img");
		image.className ="cart-image";
		sessionStorage.setItem("url_"+index, url);
		console.log(sessionStorage.getItem("url_"+index));
		image.setAttribute("src", sessionStorage.getItem("url_"+index));
		outdiv.appendChild(image);


		var namediv = document.createElement("p");
		namediv.className="mtitle";
		sessionStorage.setItem("title_"+index, title);
		namediv.innerHTML = sessionStorage.getItem("title_"+index);
		outdiv.appendChild(namediv);
		console.log(title);
				
		var pricediv = document.createElement("p");
		pricediv.className="mprice";
		sessionStorage.setItem("price_"+index, price);
		pricediv.innerHTML = sessionStorage.getItem("price_"+index);
		outdiv.appendChild(pricediv);

		var quantdiv = document.createElement("p");
		quantdiv.className ="mquant";
		var qi = document.getElementById(qid.id);
		console.log(qi);
		var value = qi.options[qi.selectedIndex].value;
		sessionStorage.setItem("quantity_"+index, value);
		quantdiv.innerHTML = sessionStorage.getItem("quantity_"+index);
		console.log(value);
		outdiv.appendChild(quantdiv);

		var totalprice = document.createElement("p");
		totalprice.className = "mtotalPrice";
		var tprice = price * value;
		sessionStorage.setItem("tprice_"+index, tprice);
		grandtotal+= tprice;
		console.log(grandtotal + "tprice" + tprice);
		totalprice.innerHTML = "$ " + sessionStorage.getItem("tprice_"+index);
		outdiv.appendChild(totalprice);

		var totalquant = parseInt(gtotalquant)+ parseInt(value);
		gtotalquant = totalquant;
		console.log("TOTAL QUANTITY" + " " + totalquant);
		sessionStorage.setItem("totalquant", totalquant);
		document.getElementById("bcount").innerHTML= sessionStorage.getItem("totalquant");
		console.log(sessionStorage.getItem("totalquant"));
		
		var btnclose = document.createElement("div");
		btnclose.className="remove-btn";
		btnclose.setAttribute("btnid_", index);
		btnid = index;
		console.log("session btnid " + sessionStorage.getItem("btnid_"+q));
		console.log("btnid" + btnid);
		sessionStorage.setItem("btnid_"+index, index);

		btnclose.innerHTML = '<button type="button" id= "' + btnid +'" value="remove" class="remove btn" onclick="removeItem('+this.btnid+')" />' + "remove" ;	    
		outdiv.appendChild(btnclose);

		sessionStorage.setItem("grandtotal", grandtotal);
		var mfooter = document.getElementById("grand-total");
		mfooter.innerHTML = "Grand Total : $ " + sessionStorage.getItem("grandtotal");
		console.log(mfooter);
		q++;
			 sessionStorage.setItem("index", q);


		


	}



function Proceed()
{
	var content = document.getElementById('modal-content');
	var index = sessionStorage.getItem("index");
	console.log(index);
	console.log(content);
	if(index==0)
	{
		content.innerHTML = "Your cart is empty... Please add some items before you proceed";
	}
	else{

	content.innerHTML = " ";
	window.location = "checkout.html";
}
}


function reload()
{	
	 if(sessionStorage.getItem("count") == null || sessionStorage.getItem("count") == "undefined" || sessionStorage.getItem("count")==0 )
		{
			sessionStorage.setItem("count", 0);	
		 	count=0;
		 	console.log(count);
		}


		console.log("count " + sessionStorage.getItem("count"));


	 if(sessionStorage.getItem("index") == "undefined" || sessionStorage.getItem("index") == null )
		{
			sessionStorage.setItem("index", 0);	
			index = sessionStorage.getItem("index");
		 	console.log(index);
		}

		

	index = sessionStorage.getItem("index");
		 console.log(index);

	// sessionStorage.setItem("totalquant", gtotalquant);
	console.log("in reload");
	for(var j = 0, k=0; (j<=sessionStorage.getItem("count"))||(j<index); j++, k++)
	{

		// var img = document.getElementsByClassName("cart-image");
		// img.setAttribute("src", sessionStorage.getItem("url_"+k));


		var title = sessionStorage.getItem("title_"+k);
		var price = sessionStorage.getItem("price_"+k);
		var url = sessionStorage.getItem("url_"+k);

		console.log(title + " " + price + " " + url);

		var mcontent = document.getElementById("modal-content");
		console.log(mcontent);
		if(title != null || price != null || url != null)
		{		
		var outdiv = document.createElement("div");
		outdiv.className="out-div";
		var outdivid = sessionStorage.getItem("outdivid_"+k);
		console.log("in reload " + " " + outdivid);
		outdiv.setAttribute("id", outdivid);
		mcontent.appendChild(outdiv);


		var image = document.createElement("img");
		image.className ="cart-image";
		console.log(sessionStorage.getItem("url_"+k));
		image.setAttribute("src", sessionStorage.getItem("url_"+k));

		outdiv.appendChild(image);
		
		var namediv = document.createElement("p");
		namediv.className="mtitle";
		namediv.innerHTML = sessionStorage.getItem("title_"+k);
		outdiv.appendChild(namediv);
		// console.log(title);
		
		var pricediv = document.createElement("p");
		pricediv.className="mprice";
		var price = sessionStorage.getItem("price_"+k);
		pricediv.innerHTML = price;
		outdiv.appendChild(pricediv);

		var quantdiv = document.createElement("p");
		quantdiv.className ="mquant";
		var value = sessionStorage.getItem("quantity_"+k);
		quantdiv.innerHTML = value;
		// console.log(value);
		outdiv.appendChild(quantdiv);

		

		var totalprice = document.createElement("p");
		totalprice.className = "mtotalPrice";
		var tprice = price * value;
		grandtotal+= tprice;
		console.log(grandtotal + "tprice" + tprice);
		totalprice.innerHTML = "$ " + sessionStorage.getItem("tprice_"+k);
		outdiv.appendChild(totalprice);

		var btnclose = document.createElement("div");
		btnclose.className="remove-btn";
		btnid = sessionStorage.getItem("btnid_"+k);
		console.log("btnid" + btnid);
		btnclose.innerHTML = '<button type="button" id= "' + btnid +'" value="remove" class="remove btn" onclick="removeItem('+this.btnid+')" />' + "remove";	    
		outdiv.appendChild(btnclose);


		var totalquant = parseInt(gtotalquant)+ parseInt(value);
		gtotalquant = totalquant;
		console.log("TOTAL QUANTITY" + " " + totalquant);
		console.log(sessionStorage.getItem("totalquant"));

	}

		var mfooter = document.getElementById("grand-total");
		mfooter.innerHTML = "Grand Total : $ " + sessionStorage.getItem("grandtotal");
		console.log(mfooter);
		

	}

}			document.getElementById("bcount").innerHTML= sessionStorage.getItem("count");


function removeItem(i)
{
	console.log("in remove" + i);

	var ind = sessionStorage.getItem("index");
	console.log(ind);
	console.log(sessionStorage.getItem("grandtotal"));
	console.log(sessionStorage.getItem("tprice_"+i));
	grandtotal = parseInt(sessionStorage.getItem("grandtotal")) - parseInt(sessionStorage.getItem("tprice_"+i));
	console.log(grandtotal);
	sessionStorage.setItem("grandtotal", grandtotal);

	var mfooter = document.getElementById("grand-total");
		mfooter.innerHTML = "Grand Total : $ " + sessionStorage.getItem("grandtotal");
		console.log(mfooter);

	sessionStorage.removeItem("url_"+i);
	sessionStorage.removeItem("price_" + i);
	sessionStorage.removeItem("title_"+i);
	sessionStorage.removeItem("qid_"+i);
	sessionStorage.removeItem("quantity_"+i);
	sessionStorage.removeItem("tprice_"+i);
	sessionStorage.removeItem("outdivid_"+i);


	

	var mcontent = document.getElementById("modal-content");

	var outdiv = document.getElementById("outdivid_"+i);
	console.log(outdiv);
	mcontent.removeChild(outdiv);

	
	count = parseInt(sessionStorage.getItem("count"))-1;
	totalquant = parseInt(sessionStorage.getItem("totalquant"))-parseInt(sessionStorage.getItem("quantity_"+i));
	sessionStorage.setItem("totalquant", totalquant);
	console.log(gtotalquant);


	
	sessionStorage.setItem("count" , count);
	console.log(sessionStorage.getItem("count"));
}

reload();