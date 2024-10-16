import UserAvatarSetting from "./UserAvatarSetting"
import AddressAndLocation from "./AddressAndLocation"
import SocialMediaLink from "./SocialMediaLink"
import DashboardHeaderTwo from "../../../layouts/headers/dashboard/DashboardHeaderTwo"
import { Link } from "react-router-dom"

const ProfileBody = () => {
   return (
      <div className="dashboard-body">
         <div className="position-relative">
            <DashboardHeaderTwo title="Profile" />
            <h2 className="main-title d-block d-lg-none">Profile</h2>

            <div className="bg-white card-box border-20">
               <div className="user-avatar-setting d-flex align-items-center mb-30">
                  <img src="/assets/images/dashboard/avatar_02.jpg" alt="" className="lazy-img user-img" />
                  <div className="upload-btn position-relative tran3s ms-4 me-3">
                     Upload new photo
                     <input type="file" id="uploadImg" name="uploadImg" placeholder="" />
                  </div>
                  <button className="delete-btn tran3s">Delete</button>
               </div>
               <UserAvatarSetting />
            </div>
            <SocialMediaLink />
            <AddressAndLocation />

            <div className="button-group d-inline-flex align-items-center mt-30">
               <Link to="#" className="dash-btn-two tran3s me-3">Save</Link>
               <Link to="#" className="dash-cancel-btn tran3s">Cancel</Link>
            </div>
         </div>
      </div>
   )
}

export default ProfileBody
