export const cart = [
	{
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
		quantity: 2
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    quantity: 1
  },
];

export function addCartItem(productId) {
	let cartItem;

	cart.forEach((item) => {
		if (item.productId === productId) {
			cartItem = item;
		}
	});

	if (cartItem) {
		cartItem.quantity++;
	}	else {
			cart.push({
				productId: productId,
				quantity: 1
			})
		}
}

export function getCartCount() {
	let cartCount = 0;

	cart.forEach((item) => {
		cartCount += item.quantity;
	})

	document.querySelector(".js-cart-quantity").innerHTML = cartCount;
}