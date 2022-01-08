import React from "react";

function Footer() {
    const currYear = new Date().getFullYear();
    return(
        <footer className="footer">
            <p className="copyright">&copy; {currYear}. ReactFacts. All Rights Reserved</p>
        </footer>
    )
}

export default Footer