import React from 'react';
import { PrimaryCard } from '../components/Cards'
import AddProductUploadPhoto from './AddProductUploadPhoto';

export default function AddProductMediaSection() {
    return(
        <PrimaryCard cardMainHeading="Media" headers={2} secondHeaderType="dropdown" >
            <p className="card-content">
				Add as many as you can so buyers can see every detail.
			</p>
			<p className="paragraph-bold card-content">
				Photos *
			</p>
			<p className="card-content">
				Use up to ten photos to show your item's most important qualities.
			</p>
			<ul className="paragraph-bold card-content">
				<li className="card-content">Use natural light and no flash.</li>
				<li className="card-content">Include a common object for scale.</li>
				<li className="card-content">Show the item being held, worn, or used.</li>
				<li className="card-content">Shoot against a clean, simple background.</li>
			</ul>
			<p className="paragraph-bold card-content">
				Link photos to variations
			</p>
			<p>
				Add photos to your variations so buyers can see all their options. 
				<span className="link card-content ml-1">
					Try it out
				</span>
			</p>
			<AddProductUploadPhoto />
			
        </PrimaryCard>
    )
}