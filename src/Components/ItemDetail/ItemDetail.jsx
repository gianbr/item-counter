import React, { useState } from "react";
import ItemCount from "./ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = () => {
	const [stock, setStock] = useState(5);

	const handleStock = (qty) => {
		setStock(stock - qty);
	};

	return (
		<div className="detailContainer">
			<img src="https://placehold.co/200x200" alt="product" />

			<div className="detailsDescription">
				<h3>Producto piola</h3>
				<h6>ID: 21312412</h6>
				<p>
					Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Deleniti, ad?
				</p>
				<h2>$100</h2>
				<h5>Stock: {stock}</h5>
				<ItemCount
					initial={1}
					min={1}
					max={stock}
					onAdd={handleStock}
				/>
			</div>
		</div>
	);
};

export default ItemDetail;
