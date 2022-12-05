import products from "./data.js";

function getSaleItems(data) {
	let newArr = data.filter((item) => item.type === "sweet");
	return newArr.map((item) => ({ item: item.item, price: item.price }));
}

console.log(getSaleItems(products));
