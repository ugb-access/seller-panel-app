import React from 'react';
import { ReactComponent as CameraIcon} from '../../images/icons/camera-icon.svg';
import { ReactComponent as LifestyleIcon} from '../../images/icons/lifestyle-icon.svg';
import { ReactComponent as EveryAngleIcon} from '../../images/icons/every-angle-icon.svg';
import { ReactComponent as PrimaryPhotosIcon} from '../../images/icons/primary-photos-icon.svg';
import { ReactComponent as EveryAngleIcon2} from '../../images/icons/every-angle-2.svg';
import { ReactComponent as EveryAngleIcon3} from '../../images/icons/every-angle-3.svg';
import { ReactComponent as InuseIcon} from '../../images/icons/inuse-icon.svg';
import { ReactComponent as SizeScaleIcon} from '../../images/icons/size_scale-icon.svg';
import { ReactComponent as AngleDetailIcon} from '../../images/icons/angle-detail.svg';
import { ReactComponent as VariationsIcon} from '../../images/icons/variations-icon.svg';

export default function PhotoGuideCard() {
    return(
        
        <div className="photo-guide-card-container d-flex flex-wrap ">
            <div className="photo-guide-card-inner-wrapper primary-card-container mr-4 mb-4 d-flex justify-center align-items-center flex-column">
                <div className="photo-guide-card-img">
                    <CameraIcon />
                </div>
                <div className="hoto-guide-card-content paragraph-bold card-content" >
                    Add a Photo
                </div>
            </div>
            <div className="photo-guide-card-inner-wrapper primary-card-container mr-4 mb-4 d-flex justify-center align-items-center flex-column">
                <div className="photo-guide-card-img">
                    <LifestyleIcon />
                </div>
                <div className="hoto-guide-card-content" >
                    Lifestyle Image
                </div>
            </div>
            <div className="photo-guide-card-inner-wrapper primary-card-container mr-4 mb-4 d-flex justify-center align-items-center flex-column">
                <div className="photo-guide-card-img">
                    <EveryAngleIcon />
                </div>
                <div className="hoto-guide-card-content" >
                    Every angle
                </div>
            </div>
            <div className="photo-guide-card-inner-wrapper primary-card-container mr-4 mb-4 d-flex justify-center align-items-center flex-column">
                <div className="photo-guide-card-img">
                    <PrimaryPhotosIcon />
                </div>
                <div className="hoto-guide-card-content" >
                    Primary Photos
                </div>
            </div>
            <div className="photo-guide-card-inner-wrapper primary-card-container mr-4 mb-4 d-flex justify-center align-items-center flex-column">
                <div className="photo-guide-card-img">
                    <EveryAngleIcon2 />
                </div>
                <div className="hoto-guide-card-content" >
                    Every angle
                </div>
            </div>
            <div className="photo-guide-card-inner-wrapper primary-card-container mr-4 mb-4 d-flex justify-center align-items-center flex-column">
                <div className="photo-guide-card-img">
                    <EveryAngleIcon3 />
                </div>
                <div className="hoto-guide-card-content" >
                    Every angle
                </div>
            </div>
            <div className="photo-guide-card-inner-wrapper primary-card-container mr-4 mb-4 d-flex justify-center align-items-center flex-column">
                <div className="photo-guide-card-img">
                    <InuseIcon />
                </div>
                <div className="hoto-guide-card-content" >
                    In use
                </div>
            </div>
            <div className="photo-guide-card-inner-wrapper primary-card-container mr-4 mb-4 d-flex justify-center align-items-center flex-column">
                <div className="photo-guide-card-img">
                    <SizeScaleIcon />
                </div>
                <div className="hoto-guide-card-content" >
                    Size and scale
                </div>
                
            </div>
            <div className="photo-guide-card-inner-wrapper primary-card-container mr-4 mb-4 d-flex justify-center align-items-center flex-column">
                <div className="photo-guide-card-img">
                    <AngleDetailIcon />
                </div>
                <div className="hoto-guide-card-content" >
                    Details
                </div>
            </div>
            <div className="photo-guide-card-inner-wrapper primary-card-container mr-4 mb-4 d-flex justify-center align-items-center flex-column">
                <div className="photo-guide-card-img">
                    <VariationsIcon />
                </div>
                <div className="hoto-guide-card-content" >
                    Variations
                </div>
            </div>
        </div>
    )
}