import { Link } from "react-router-dom"

const OpenEmail = () => {
   return (
      <div className="col-lg-8">
         <div className="open-email-container pb-40">
            <div className="email-header divider d-flex justify-content-between ps-4 pe-4 ps-xxl-5 pe-xxl-5">
               <div className="sender-info d-flex align-items-center">
                  <img src="/assets/images/dashboard/logo_02.png" alt="" className="lazy-img logo" />
                  <div className="ps-3">
                     <div className="sender-name">Killwake</div>
                     <div className="sender-email">kilwakesales@inquiry.com</div>
                  </div>
               </div>

               <div className="email-info">
                  <div className="time">4:45AM (3 hours ago)</div>
                  <div className="d-flex align-items-center justify-content-end">
                     <button className="delete-email"><img src="/assets/images/dashboard/icon/icon_29.svg" alt="" className="lazy-img" /></button>
                     <button className="reply-email ms-3 me-3"><img src="/assets/images/dashboard/icon/icon_30.svg" alt="" className="lazy-img" /></button>
                     <div className="action-dots float-end">
                        <button className="action-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                           <span></span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                           <li><Link className="dropdown-item" to="#">Reply</Link></li>
                           <li><Link className="dropdown-item" to="#">Fowrward</Link></li>
                           <li><Link className="dropdown-item" to="#">Block</Link></li>
                           <li><Link className="dropdown-item" to="#">Delete</Link></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>

            <div className="email-body divider">
               <div className="ps-4 pe-4 ps-xxl-5 pe-xxl-5">
                  <h2>Payment Verification</h2>
                  <p>Hello, Greeting from Uber. Hope you doing great. I am approaching to you for as our company need a great & talented account manager. </p>
                  <p>What we need from you to start:</p>
                  <ul className="style-none mb-30">
                     <li>- Your CV</li>
                     <li>- Verified Gov ID</li>
                  </ul>
                  <p>After that we need to redesign our landing page because the current one doesn&apos;t carry any information. If you have any question don’t hesitate to contact us.</p>
                  <p>Our Telegram <Link to="#" className="fw-500">@rainbow</Link> <br />Thank you!</p>
               </div>
            </div>

            <div className="email-footer">
               <div className="ps-4 pe-4 ps-xxl-5 pe-xxl-5">
                  <div className="attachments mb-30">
                     <div className="d-flex justify-content-between mb-5">
                        <h6 className="m0">2 Attachment</h6>
                        <Link to="#" className="all-download">Download All</Link>
                     </div>
                     <div className="d-flex">
                        <Link to="#" className="file tran3s d-flex align-items-center mt-10" download>
                           <div className="icon rounded-circle d-flex align-items-center justify-content-center"><img src="/assets/images/dashboard/icon/icon_31.svg" alt="" className="lazy-img" /></div>
                           <div className="ps-2">
                              <div className="file-name">project-details.pdf</div>
                              <div className="file-size">2.3mb</div>
                           </div>
                        </Link>
                        <Link to="#" className="file tran3s d-flex align-items-center mt-10" download>
                           <div className="icon rounded-circle d-flex align-items-center justify-content-center"><img src="/assets/images/dashboard/icon/icon_31.svg" alt="" className="lazy-img" /></div>
                           <div className="ps-2">
                              <div className="file-name">form.pdf</div>
                              <div className="file-size">1.3mb</div>
                           </div>
                        </Link>
                     </div>
                  </div>

                  <div className="compose-new-email-container">
                     <div className="new-email-header position-relative">
                        <div className="btn-group">
                           <Link data-bs-toggle="collapse" to="#CC-input" role="button" aria-expanded="false" aria-controls="collapseExample">Cc</Link>
                           <Link data-bs-toggle="collapse" to="#BCC-input" role="button" aria-expanded="false" aria-controls="collapseExample">Bcc</Link>
                        </div>
                        <div className="input-group d-flex align-items-center">
                           <div className="text-center" style={{ width: "60px" }}>To</div>
                           <input type="email" className="flex-fill" placeholder="rainbowsales@inquiry.com" />
                        </div>
                        <div className="collapse" id="CC-input">
                           <div className="input-group d-flex align-items-center">
                              <div className="text-center" style={{ width: "60px" }}>Cc</div>
                              <input type="email" className="flex-fill" placeholder="zoonwala@inquiry.com" />
                           </div>
                        </div>
                        <div className="collapse" id="BCC-input">
                           <div className="input-group d-flex align-items-center">
                              <div className="text-center" style={{ width: "60px" }}>Bcc</div>
                              <input type="email" className="flex-fill" placeholder="mojobdltd@inquiry.com" />
                           </div>
                        </div>
                     </div>
                     <div className="compose-body">
                        <textarea defaultValue="Hi, Mary Cooper!" />
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
                              <input type="file" name="uploadImg" placeholder="" title="Insert Image" />
                           </div>
                        </div>

                        <div className="d-flex align-items-center">
                           <Link to="#" className="delete-mail me-3"><img src="/assets/images/dashboard/icon/icon_35.svg" alt="" className="lazy-img" /></Link>
                           <Link to="#" className="reply-btn tran3s">Reply</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default OpenEmail
