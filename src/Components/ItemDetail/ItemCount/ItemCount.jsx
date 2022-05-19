import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, min, max, onAdd }) => {
	const [counter, setContador] = useState(initial);

	const handleSum = () => {
		if (counter >= min && counter < max) {
			setContador(counter + 1);
		}
	};

	const handleSubstract = () => {
		if (counter > min) {
			setContador(counter - 1);
		}
	};

	return (
		<div className="counterWrapper">
			<div className="counterContainer">
				<button
					disabled={counter === min || max === 0}
					onClick={handleSubstract}
				>
					-
				</button>
				<p>{counter}</p>
				<button
					disabled={counter === max || max === 0}
					onClick={handleSum}
				>
					+
				</button>
			</div>
			<button
				disabled={max === 0}
				className="counterAdd"
				onClick={(e) => onAdd(counter)}
			>
				Agregar al carrito
			</button>
		</div>
	);
};

export default ItemCount;
