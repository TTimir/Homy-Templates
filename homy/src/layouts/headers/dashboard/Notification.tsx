const Notification = () => {
   return (
      <ul className="dropdown-menu" aria-labelledby="notification-dropdown">
         <li>
            <h4>Notification</h4>
            <ul className="style-none notify-list">
               <li className="d-flex align-items-center unread">
                  <img src="/assets/images/dashboard/icon/icon_36.svg" alt="" className="lazy-img icon" />
                  <div className="flex-fill ps-2">
                     <h6>You have 3 new mails</h6>
                     <span className="time">3 hours ago</span>
                  </div>
               </li>
               <li className="d-flex align-items-center">
                  <img src="/assets/images/dashboard/icon/icon_37.svg" alt="" className="lazy-img icon" />
                  <div className="flex-fill ps-2">
                     <h6>Your listing post has been approved</h6>
                     <span className="time">1 day ago</span>
                  </div>
               </li>
               <li className="d-flex align-items-center unread">
                  <img src="/assets/images/dashboard/icon/icon_38.svg" alt="" className="lazy-img icon" />
                  <div className="flex-fill ps-2">
                     <h6>Your meeting is cancelled</h6>
                     <span className="time">3 days ago</span>
                  </div>
               </li>
            </ul>
         </li>
      </ul>
   )
}

export default Notification
