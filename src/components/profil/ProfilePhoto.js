import React from 'react';
import monImage from "./profilPic.jpg";

const ProfilePhoto = () => {
    return (
        <div>
            <img src={monImage} alt="this is a profile pic" width="400"/>
        </div>
    )
}

export default ProfilePhoto