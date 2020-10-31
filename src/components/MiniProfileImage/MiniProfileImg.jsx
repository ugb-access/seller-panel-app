import React from 'react';

export default function MiniprofilePic() {
    return(
        <div className="mini-profile-pic-container border-rounded m-2-primary">
            <img src={require('../../images/icons/user-profile-demo-pic.svg')} alt="user profile pic" />
        </div>
    )
}

