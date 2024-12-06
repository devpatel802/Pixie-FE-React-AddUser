import { useState, useEffect, useRef } from "react";
import Group from "../../../assets/LeasePixie.png";
import menu from "../../../assets/menu.svg";
import cross from "../../../assets/x.svg";
import down from "../../../assets/chevron-down.svg";
import right from "../../../assets/chevron-right.svg";
import style from './header.module.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAddOpen, setIsAddOpen] = useState(true); // Initially open
    const [isSettingsOpen, setIsSettingsOpen] = useState(false); // Initially closed

    const navRef = useRef(null); // Reference for the navbar

    // Toggle Add section
    const toggleAdd = () => {
        setIsAddOpen((prev) => !prev); // Toggle Add section
        setIsSettingsOpen(false); // Close Settings section
    };

    // Toggle Settings section
    const toggleSettings = () => {
        setIsSettingsOpen((prev) => !prev); // Toggle Settings section
        setIsAddOpen(false); // Close Add section
    };

    // Toggle Menu
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    // Close the menu when clicking outside the navbar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false); // Close menu if clicked outside
            }
        };

        // Attach the event listener
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up the event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav ref={navRef}>
            <div className={style.container}>
                <div className={style.left}>
                    <img src={Group} alt="group logo" />
                </div>
                <div className={style.right}>
                    <img
                        src={isMenuOpen ? cross : menu}
                        alt={isMenuOpen ? "cross menu" : "menu"}
                        onClick={toggleMenu}
                    />
                </div>

                {isMenuOpen && (
                    <div className={style.menu}>
                        {/* Mobile Menu */}
                        <div className={style.mobilemenu}>
                            <div className={style.left}>
                                <img src={Group} alt="group logo" />
                                <h3 className={style.logo}>Lease Pixie</h3>
                            </div>
                            <div className={style.right}>
                                <img
                                    src={isMenuOpen ? cross : menu}
                                    alt={isMenuOpen ? "cross menu" : "menu"}
                                    onClick={toggleMenu}
                                />
                            </div>
                        </div>

                        <dl>
                            {/* Add Section */}
                            <dt
                                onClick={toggleAdd}
                                className={`${style.menuTerm} ${
                                    isAddOpen ? style.bold : ""
                                }`}
                            >
                                Add{" "}
                                <img
                                    src={isAddOpen ? down : right}
                                    alt="toggle"
                                    className={style.chevronIcon}
                                />
                            </dt>
                            {isAddOpen && (
                                <>
                                    <dd>User</dd>
                                    <dd>Property</dd>
                                    <dd>Portfolio</dd>
                                </>
                            )}

                            {/* Settings Section */}
                            <dt
                                onClick={toggleSettings}
                                className={`${style.menuTerm} ${
                                    isSettingsOpen ? style.bold : ""
                                }`}
                            >
                                Settings{" "}
                                <img
                                    src={isSettingsOpen ? down : right}
                                    alt="toggle"
                                    className={style.chevronIcon}
                                />
                            </dt>
                            {isSettingsOpen && (
                                <>
                                    <dd>User</dd>
                                    <dd>Portfolio</dd>
                                </>
                            )}

                            <div className={style.signOut} style={{ marginTop: "32px" }}>
                                Sign out
                            </div>
                        </dl>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Header;
