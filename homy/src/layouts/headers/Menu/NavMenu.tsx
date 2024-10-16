import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menu_data from "../../../data/home-data/MenuData";

const NavMenu = () => {

    const [navTitle, setNavTitle] = useState("");

    // openMobileMenu
    const openMobileMenu = (menu: any) => {
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };

    const [navClick, setNavClick] = useState<any>();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [navClick]);

    return (
        <ul className="navbar-nav align-items-lg-center">
            <li className="d-block d-lg-none"><div className="logo"><Link to="/" className="d-block"><img src="/assets/images/logo/logo_01.svg" alt="" /></Link></div></li>
            <li className="nav-item dashboard-menu">
                <Link onClick={() => setNavClick(!navClick)} className="nav-link" to="/dashboard/dashboard-index" target="_blank">Dashboard</Link>
            </li>
            {menu_data.map((menu: any) => (
                <li onClick={() => openMobileMenu(menu.title)} key={menu.id} className={`nav-item dropdown ${menu.class_name}`}>
                    <Link onClick={() => setNavClick(!navClick)} to={menu.link} className={`nav-link dropdown-toggle ${navTitle === menu.title ? "show" : ""}`}>
                        {menu.title}
                    </Link>
                    {menu.has_dropdown && (
                        <>
                            <ul className={`dropdown-menu ${navTitle === menu.title ? "show" : ""}`}>
                                {menu.sub_menus && menu.sub_menus.map((sub_m: any, i: any) => (
                                    <li key={i}>
                                        <Link onClick={() => setNavClick(!navClick)} to={sub_m.link} className={`dropdown-item`}>
                                            <span>{sub_m.title}</span>
                                        </Link>
                                    </li>
                                ))}
                                {menu.menu_column && (
                                    <li className="row gx-1">
                                        {menu.menu_column.map((item: any) => (
                                            <div key={item.id} className="col-lg-4">
                                                <div className="menu-column">
                                                    <h6 className="mega-menu-title">{item.mega_title}</h6>
                                                    <ul className="style-none mega-dropdown-list">
                                                        {item.mega_menus.map((mega_m: any, i: any) => (
                                                            <li key={i}><Link onClick={() => setNavClick(!navClick)} to={mega_m.link} className={`dropdown-item`}><span>{mega_m.title}</span></Link></li>))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </li>
                                )}
                            </ul>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavMenu;

