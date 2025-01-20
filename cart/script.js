var products = [
    { name: "Blue Chair", headline: "Wooden Stool", price: "10,000", image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D" },
    { name: "White Chair", headline: "Soft like Cloud", price: "15,000", image: "https://images.unsplash.com/photo-1506326426992-32b61983f2fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYWlyfGVufDB8fDB8fHww" },
    { name: "Chair cum Sofa", headline: "Can sleep on it", price: "16,500", image: "https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D" }
];

var popular = [{ name: "White Chair", headline: "luxury Item", price: "10,000", image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D" },
    { name: "Red Chair", headline: "Red and Rare", price: "15,000", image: "https://images.unsplash.com/photo-1462212210333-335063b676bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D" },
    { name: "Grey Chair", headline: "Pretty Asthetic", price: "16,500", image: "https://plus.unsplash.com/premium_photo-1683133939183-edd5476e6200?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYWlyfGVufDB8fDB8fHww" }
];

var cart = [];

function addProducts() {
    var clutter = "";
    products.forEach((product, index) => {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                    <img class="w-full h-full object-cover" src="${product.image}">
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">&#8377;${product.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400"><i
                                data-index="${index}" class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
    });

    document.querySelector(".products").innerHTML = clutter;
}

function addPopulars() {
    var clutter = ""; 
    popular.forEach((popular) => {
        clutter += `<div class="popular bg-white p-5 rounded-2xl flex items-start gap-3 w-[50%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${popular.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${popular.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${popular.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">&#8377;${popular.price}</h4>
                    </div>
                </div>`;
    });

    document.querySelector(".populars").innerHTML = clutter;
}

function addToCart() {
    document.querySelector(".products").addEventListener("click", (des) => {
        if (des.target.classList.contains('add')) {
            cart.push(products[des.target.dataset.index]);
        }
    });
}

function showCart() {

    var flag = 0;
    document.querySelector(".carticon").addEventListener("click", () => {

        if (flag == 0) {
            document.querySelector(".cartexpnd").style.display = "block";
            flag = 1;

            var clutter = "";
            cart.forEach((prod, index) => {
                clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                    <div class="w-10 h-10 flex-shrink-0 rounded-lg">
                        <img class="w-full h-full object-cover"
                            src="${prod.image}">
                    </div>
                    <div>
                        <h3 class="font-semibold">${prod.name}</h3>
                        <h4 class="text-sm font-semibold opacity-80">&#8377;${prod.price}</h4>
                    </div>
                </div>`;
            });

            document.querySelector(".cartexpnd").innerHTML = clutter;
        }
        else if (flag == 1) {
            document.querySelector(".cartexpnd").style.display = "hidden";
            flag = 0;
        }
        
    });
}

showCart();
addProducts();
addPopulars();
addToCart();

