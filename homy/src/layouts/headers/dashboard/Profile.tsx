import { Link } from "react-router-dom"
import DeleteModal from "../../../modals/DeleteModal"

const Profile = () => {
   return (
      <>
         <div className="user-name-data">
            <ul className="dropdown-menu" aria-labelledby="profile-dropdown">
               <li>
                  <Link className="dropdown-item d-flex align-items-center" to="/profile"><img src="/assets/images/dashboard/icon/icon_23.svg" alt="" className="lazy-img" /><span className="ms-2 ps-1">Profile</span></Link>
               </li>
               <li>
                  <Link className="dropdown-item d-flex align-items-center" to="/account-settings"><img src="/assets/images/dashboard/icon/icon_23.svg" alt="" className="lazy-img" /><span className="ms-2 ps-1">Account Settings</span></Link>
               </li>
               <li>
                  <Link className="dropdown-item d-flex align-items-center" to="#" data-bs-toggle="modal" data-bs-target="#deleteModal"><img src="/assets/images/dashboard/icon/icon_23.svg" alt="" className="lazy-img" /><span className="ms-2 ps-1">Delete Account</span></Link>
               </li>
            </ul>
         </div>
         <DeleteModal />
      </>
   )
}

export default Profile
