//create array that will hold all the ordered products
var shoppingCart = [];

//used to display the content of my shopping cart
function displayShoppingCart(){
    var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
    //Makes sure to delete the previews rows 
    while(orderedProductsTblBody.rows.length>0) {
        orderedProductsTblBody.deleteRow(0);
      
    }
  

    //the variable that will hold the total cost of the products
    var cart_total_price=0;
    //loops through array of objects
    for(var product in shoppingCart){
        //new row added    
        var row=orderedProductsTblBody.insertRow();
        //creates three cells to describe the products features 
        var cellName = row.insertCell(0);
        var cellDescription = row.insertCell(1);
        var cellPrice = row.insertCell(2);
        cellPrice.align="right";
        //add the information from the product into the empty cells 
        cellName.innerHTML = shoppingCart[product].Name;
        cellDescription.innerHTML = shoppingCart[product].Description;
        cellPrice.innerHTML = shoppingCart[product].Price;
        cart_total_price+=shoppingCart[product].Price;
    }
    //add the total cost of the shopping cart at the end 
    document.getElementById("cart_total").innerHTML=cart_total_price;
}


function AddtoCart(name,description,price){
   //javascript objects that will hold the properties that were eariler entered 
   var singleProduct = {};
   //Add data to the products objects 
   singleProduct.Name=name;
   singleProduct.Description=description;
   singleProduct.Price=price;
   //new products added to our table 
   shoppingCart.push(singleProduct);
   //This calls the function to display on screen 
   displayShoppingCart();
 
}  

