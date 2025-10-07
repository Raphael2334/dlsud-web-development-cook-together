import React, { useEffect, useState } from "react";

const SearchBar = () => {
    const [visible, setVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < lastScrollY) {
                setVisible(false); // Scrolling up
            } else if (currentScrollY > lastScrollY) {
                setVisible(true); // Scrolling down
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                padding: "1rem",
                zIndex: 1000,
                transition: "transform 0.3s",
                transform: visible ? "translateY(0)" : "translateY(-100%)",
            }}
        >
            <input
                type="text"
                placeholder="Search..."
                style={{
                    flex: 1,
                    maxWidth: 400,
                    padding: "0.5rem 1rem",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                }}
            />
        </div>
    );
};

export default SearchBar;