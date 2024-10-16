import { Link } from "react-router-dom"

const SocialIcon = () => {
   return (
      <>
         <li><Link to="#"><i className="fa-light fa-heart"></i></Link></li>
         <li><Link to="#"><i className="fa-light fa-bookmark"></i></Link></li>
         <li><Link to="#"><i className="fa-light fa-circle-plus"></i></Link></li>
      </>
   )
}

export default SocialIcon
