var count=0;
var totalQuantity=0;
var grandtotal =0;
var q= 0, t=0;
var totalquant =0;
var grandtot=0;

var imageData = 


{


 "tab1": {		

 			"images" : [
                    {
                    "url": "Resources/Images/Cooking.jpg",
                    "title": "Fashion & Beauty",
                    "price": "2000",
                    "add": "Add To Cart"
                    }, 
                    {
                    "url": "Resources/Images/Entertainment.jpg",
                    "title": "Fashion & Beauty",
                    "price": "2023",
                    "add": "Add To Cart"
                    },
                    {
                    "url": "Resources/Images/Entertainment.jpg",
                    "title": "Fashion & Beauty",
                    "price": "40323",
                    "add": "Add To Cart"
                    },
                    
                    {
                    "url": "Resources/Images/Entertainment.jpg",
                    "title": "Fashion & Beauty",
                    "price": "20233",
                    "add": "Add To Cart"
                  },
                  
                  {
                    "url": "Resources/Images/Entertainment.jpg",
                    "title": "Fashion & Beauty",
                    "price": "2000",
                    "add": "Add To Cart"
                    },
                    {
                    "url": "Resources/Images/Entertainment.jpg",
                    "title": "Fashion & Beauty",
                    "price": "2023",
                    "add": "Add To Cart"
                    },
                    {
                    "url": "Resources/Images/Entertainment.jpg",
                    "title": "Fashion & Beauty",
                    "price": "40323",
                    "add": "Add To Cart"
                    } 
                ]
               },
    
    "tab2": {
               "images" :	[
                    {
                    "url": "Resources/Images/Entertainment.jpg",
                    "title": "Fashion & Beauty",
                    "price": "2000",
                    "add": "Add To Cart"
                    },
                    {
                    "url": "Resources/Images/Cooking.jpg",
                    "title": "Fashion & Beauty",
                    "price": "2023",
                    "add": "Add To Cart"
                    },
                    {
                    "url": "Resources/Images/Health.jpg",
                    "title": "Fashion & Beauty",
                    "price": "40323",
                    "add": "Add To Cart"
                    },
                    
                    {
                    "url": "Resources/Images/Health.jpg",
                    "title": "Fashion & Beauty",
                    "price": "20233",
                    "add": "Add To Cart"
                    }
              ]
            },
            
    "tab3": {
            "images" :   [
                    {
                    "url": "Resources/Images/Golf.jpg",
                    "title": "Fashion & Beauty",
                    "price": "2000",
                    "add": "Add To Cart"
                    },
                    {
                    "url": "Resources/Images/Time.jpg",
                    "title": "Fashion & Beauty",
                    "price": "2023",
                    "add": "Add To Cart"
                    },
                    {
                    "url": "Resources/Images/Health.jpg",
                    "title": "Fashion & Beauty",
                    "price": "40323",
                    "add": "Add To Cart"

                    },
                    
                    {
                    "url": "Resources/Images/Sunset.jpg",
                    "title": "Fashion & Beauty",
                    "price": "20233",
                    "add": "Add To Cart"

                    }
             ]
            },
            
    "tab4": {	
    	"images" : [
                    {
                    "url": "Resources/Images/People.jpg",
                    "title": "Fashion & Beauty",
                    "price": "2000",
                    "add": "Add To Cart"
                    },
                    {
                    "url": "Resources/Images/Golf.jpg",
                    "title": "Fashion & Beauty",
                    "price": "2023",
                    "add": "Add To Cart"
                    },
                    {
                    "url": "Resources/Images/Cooking.jpg",
                    "title": "Fashion & Beauty",
                    "price": "40323",
                    "add": "Add To Cart"
                    },
                    
                    {
                    "url": "Resources/Images/Health.jpg",
                    "title": "Fashion & Beauty",
                    "price": "20233",
                    "add": "Add To Cart"
                    }
               ]
            }

		}; 



function AddtoCart(id, tabid, qid){
		

var quant, price, totalprice,j=0;

// console.log("in hello " + id);
console.log(qid);
console.log(tabid.id);
// console.log(oid);
		 var tid;
		 var Length = 0;
		 var tabContent ;

		if(tabid.id == "tab1"){
            Length = imageData.tab1.images.length;
            tid= 'tab1';
            console.log("tab1 length"+ Length);
            tabContent=imageData.tab1;
		}

		else if(tabid.id == "tab2"){
            Length = imageData.tab2.images.length;
            tid = 'tab2';
            console.log("tab2 length"+ Length);
            tabContent = imageData.tab2;

		}

		else if(tabid.id == "tab3"){
			Length = imageData.tab3.images.length;
			tid='tab3';
            console.log("tab3 length"+ Length);
            tabContent = imageData.tab3;


		}

		else{

			Length = imageData.tab4.images.length;
			tid= 'tab4';
            console.log("tab4 length"+ Length);
            tabContent = imageData.tab4;
		}



				var mcontent = document.getElementById("modal-content");
				console.log(mcontent);
				
				var outdiv = document.createElement("div");
				mcontent.appendChild(outdiv);


				var image = document.createElement("img");
				image.className ="cart-image";
				var url = tabContent.images[id].url;
				localStorage.setItem("url_"+q, tabContent.images[id].url);
				console.log(localStorage.getItem("url_"+q));
				image.setAttribute("src", url);
				outdiv.appendChild(image);


				var namediv = document.createElement("p");
				namediv.className="mtitle";
				namediv.innerHTML = tabContent.images[id].title;
				localStorage.setItem("title_"+q, tabContent.images[id].title);
				outdiv.appendChild(namediv);
				console.log(tabContent.images[id].title);
				
				var pricediv = document.createElement("p");
				pricediv.className="mprice";
				pricediv.innerHTML = tabContent.images[id].price;
				localStorage.setItem("price_"+q, tabContent.images[id].price);

				outdiv.appendChild(pricediv);

				var quantdiv = document.createElement("p");
				quantdiv.className ="mquant";
				var qi = document.getElementById(qid.id);
				console.log(qi);
				var value = qi.options[qi.selectedIndex].value;
				quantdiv.innerHTML = value;
				localStorage.setItem("quantity_"+q, value);
				console.log(value);
				outdiv.appendChild(quantdiv);

				var totalprice = document.createElement("p");
				totalprice.className = "mtotalPrice";
				var tprice = tabContent.images[id].price * value;
				localStorage.setItem("tprice_"+q, tprice);
				grandtotal+= tprice;
				console.log(grandtotal + "tprice" + tprice);
				totalprice.innerHTML = tprice;
				outdiv.appendChild(totalprice);

				totalquant = parseInt(totalquant)+ parseInt(value);
				document.getElementById("bcount").innerHTML= totalquant;
		

				localStorage.setItem("grandtotal_"+q, grandtotal);
				var mfooter = document.getElementById("grand-total");
				mfooter.innerHTML = "Grand Total : " + grandtotal;
				console.log(mfooter);
				q++;



				
				

	}


function tabContentCrete(tabid)
{
		var i, tid;
		 console.log("Hiiii in tabContentCrete" + tabid)
		 var Length = 0;
		 var tabContent ;

		if(tabid == 'tab1'){
            Length = imageData.tab1.images.length;
            tid= 'tab1';
            console.log("tab1 length"+ Length);
            tabContent=imageData.tab1;
		}

		else if(tabid == 'tab2'){
            Length = imageData.tab2.images.length;
            tid = 'tab2';
            console.log("tab2 length"+ Length);
            tabContent = imageData.tab2;

		}

		else if(tabid == 'tab3'){
			Length = imageData.tab3.images.length;
			tid="tab3";
            console.log("tab3 length"+ Length);
            tabContent = imageData.tab3;


		}

		else{

			Length = imageData.tab4.images.length;
			tid= "tab4";
            console.log("tab4 length"+ Length);
            tabContent = imageData.tab4;
		}
			
		

		var outerDiv = document.createElement('div');
		// outerDiv.id= tabid;
		// console.log(tabid);
		outerDiv.className='row';
		document.getElementById(tabid).appendChild(outerDiv);
		
		

		
			for (var i = 0; i < Length; i++) 
			{

		var containerDiv = document.createElement('div');
		containerDiv.className='col-lg-3 col-md-4 col-sm-6 card-container';
		outerDiv.appendChild(containerDiv);
		
		var cardDiv = document.createElement('div');
		cardDiv.className='card';
		containerDiv.appendChild(cardDiv);
		var image= document.createElement('img');

		image.className="image-container";
		image.setAttribute("src" , tabContent.images[i].url);
		cardDiv.appendChild(image);
		

		var para = document.createElement('div');
		para.className='price';
		cardDiv.appendChild(para);

		var ptitle = document.createElement('p');
		ptitle.setAttribute("id", "ptitle");
	   ptitle.innerHTML =  tabContent.images[i].title;
	   para.appendChild(ptitle);

	   var pprice =document.createElement("p");
	   pprice.setAttribute("id", "pprice");

	   pprice.innerHTML = "$" +" " + tabContent.images[i].price;
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
	   select.setAttribute("id", "sel"+i+tid);
	   var quantity_id = "sel"+i+tid;
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
	   	// select.setAttribute("onchange", "getSelectedValue(this.id)");
	   	// console.log(value);



        cartDiv.innerHTML = '<button type="button" id= "' + buttonId +'" value="Add to Cart" class="add-option btn" onclick="AddtoCart ('+buttonId+', '+tid+' ,'+quantity_id+')" />' + tabContent.images[buttonId].add;	    

	// cartDiv.onclick = function()
	//  {
	//  	alert("Hiii" + i);
	 // badgecount(document.getElementById('quantity').value, tabContent.images[i].title, tabContent.images[i].price);
	//  alert("Hiii");
	//  };
	}


}

function getSelectedValue(id)
{
	// console.log(tid);
	var p = document.getElementById(id);
	console.log(p);
	var value = p.selectedIndex;
	quantity[q++] = value;
	// push.quantity(value);
	console.log(quantity);
	
}



function selecttab( tabid)
	{
		var i,tabcontent, tabbutton;
		tabcontent = document.getElementsByClassName('tabContent');
		for(i = 0; i<tabcontent.length;i++)
		{
					
			tabcontent[i].style.display = "none";
		}

		if(tabid=='tab1')
		{
			tabContentCrete('tab1');


		}
		
		if(tabid=='tab2')
		{
			tabContentCrete('tab2');

		}
		else if(tabid=='tab3')
		{
			tabContentCrete('tab3');

		}
		else
		{

			tabContentCrete('tab4');
		}

		document.getElementById(tabid).style.display='block';

}

function Proceed()
{
	var content = document.getElementById('modal-content');
	console.log(content);
	window.location = "checkout.html";
}



