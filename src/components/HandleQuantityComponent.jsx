import React from 'react';
import '../scss/products-inventory.scss';

export default function HandleQuantityComponent(props) {
    return(
        <div className="handle-quantity-component-container d-flex ">
            <div className="handle-quantity-incerment-container btn bg-primary border-0 d-flex justify-center align-items-center">
				+
			</div>
			<div className="handle-quantity-number">
				{props.quantity}
			</div>
            <div className="handle-quantity-incerment-container btn bg-primary border-0 d-flex justify-center align-items-center">
				-
			</div>
        </div>
    )
}