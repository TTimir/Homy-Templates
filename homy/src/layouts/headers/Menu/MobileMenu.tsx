import NavMenu from "./NavMenu"

const MobileMenu = ({ isActive }: any) => {
   return (
      <div className={isActive ? "mobile-menu-visible theme-main-menu" : "theme-main-menu eg-mobile-menu "}>
         <nav className="navbar navbar-expand-lg p0 order-lg-2">
            <div className={`collapse navbar-collapse ${isActive ? "show" : ""}`} id="navbarNav">
               <NavMenu />
            </div>
         </nav>
      </div>
   )
}

export default MobileMenu
