import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

import styles from "./NavBar.module.css";
import { Menu } from '@mui/icons-material';

const NavBar = () => {

    const {user} = useAuthValue();
    const {logout} = useAuthentication();

    //hamburguer menu
    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

  return (
    <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>Mini <span>Blog</span></NavLink>

        <button onClick={onClick} className={styles.open__menu}>
            <Menu />
        </button>
        

        <ul className={`menu ${isActive ? "active" : "inactive"}`} ref={dropDownRef}>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            {!user && (
                <>
                    <li>
                        <NavLink to="/login">Entrar</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">Cadastrar</NavLink>
                    </li>
                </>
            )}
            {user && (
                <>
                <li>
                    <NavLink to="/posts/create">Novo Post</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
            </>
            )}
            <li>
                <NavLink to="/about">Sobre</NavLink>
            </li>
            {user && (
                <li>
                    <button onClick={logout}>Sair</button>
                </li>
            )}
        </ul>
    </nav>
  );
};

export default NavBar