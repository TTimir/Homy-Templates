import { Link } from "react-router-dom"

const MailOffcanvas = () => {
   return (
      <div className="offcanvas compose-mail-offcanvas" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
         <div className="compose-new-email-container">
            <div className="new-email-header position-relative">
               <div className="btn-group">
                  <Link data-bs-toggle="collapse" to="#CC-input" role="button" aria-expanded="false" aria-controls="collapseExample">Cc</Link>
                  <Link data-bs-toggle="collapse" to="#BCC-input" role="button" aria-expanded="false" aria-controls="collapseExample">Bcc</Link>
               </div>
               <div className="input-group d-flex align-items-center">
                  <div className="text-center" style={{ width: "60px" }}>To</div>
                  <input type="email" className="flex-fill" placeholder="payoneer@inquiry.com" />
               </div>
               <div className="collapse" id="CC-input">
                  <div className="input-group d-flex align-items-center">
                     <div className="text-center" style={{ width: "60px" }}>Cc</div>
                     <input type="email" className="flex-fill" placeholder="payoneer@inquiry.com" />
                  </div>
               </div>
               <div className="collapse" id="BCC-input">
                  <div className="input-group d-flex align-items-center">
                     <div className="text-center" style={{ width: "60px" }}>Bcc</div>
                     <input type="email" className="flex-fill" placeholder="payoneer@inquiry.com" />
                  </div>
               </div>
            </div>
            <div className="compose-body">
               <textarea defaultValue="Hi, Mary Cooper! Thanks for your invitation for the account manager position for you company. I Will back to you soon with all the require documents." />
            </div>

            <div className="compose-email-footer d-flex justify-content-between">
               <div className="d-flex align-items-center">
                  <div className="insert-file position-relative me-3">
                     <img src="/assets/images/dashboard/icon/icon_32.svg" alt="" className="lazy-img" />
                     <input type="file" name="uploadImg" placeholder="" title="Insert File" />
                  </div>
                  <button className="insert-emoji me-3"><img src="/assets/images/dashboard/icon/icon_33.svg" alt="" className="lazy-img" /></button>
                  <div className="insert-file position-relative me-3">
                     <img src="/assets/images/dashboard/icon/icon_34.svg" alt="" className="lazy-img" />
                     <input type="file" name="uploadImg" placeholder="" title="Insert img" />
                  </div>
               </div>

               <div className="d-flex align-items-center">
                  <Link to="#" className="delete-mail me-3"><img src="/assets/images/dashboard/icon/icon_35.svg" alt="" className="lazy-img" /></Link>
                  <Link to="#" className="reply-btn tran3s">Reply</Link>
               </div>
            </div>
         </div>
         <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
   )
}

export default MailOffcanvas
