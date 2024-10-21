import React, { useState } from 'react';
import '../../Styles/Sidebar/Sidebar.css';
import { IoIosSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { MdAddToPhotos } from "react-icons/md";
import { FaCompass } from "react-icons/fa";

function Sidebar() {
    const [profileImage, setProfileImage] = useState('./animeDp.jpg');

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div id='Sidebar'>
            <div className="topSection">
                <div className="profilePic">
                    <img src={profileImage} alt="DP" />
                    {/* <input type="file" onChange={handleImageChange} /> */}
                </div>
                <div className="pageLinks">
                    <div className="links">
                        <FaCompass fontSize={20} />  Explore
                    </div>
                    <div className="links">
                        <MdAddToPhotos fontSize={20} />  Shared
                    </div>
                    <div className="links">
                        <FaStar fontSize={20} />  Favorite
                    </div>
                </div>
            </div>
            <div className="bottomSection">
                <div className="links">
                    <IoIosSettings fontSize={20} />  Settings
                </div>
                <div className="links">
                    <IoLogOut fontSize={20} />  Sign Out
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
