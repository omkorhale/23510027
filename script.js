document.addEventListener("DOMContentLoaded", function () {
   
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    const productNameElement = document.getElementById("product-name");
    const productImageElement = document.getElementById("product-image");
    const productPriceElement = document.getElementById("product-price");

    let productName = "Laptop XYZ";
    let productImage = "laptop.jpg";
    let productPrice = "₹79999.99";

   
        productName = "Laptop XYZ";
        productImage = "laptop.jpg";
        productPrice = "₹79999.99";
    }
  
    productNameElement.textContent = "Product: " + productName;
    productImageElement.src = productImage;
    productImageElement.alt = productName;
    productPriceElement.textContent = "Price: " + productPrice;
});
