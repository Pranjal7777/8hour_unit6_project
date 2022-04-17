import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap"
import Styles from "./Navbar.module.css"

import { Link } from "react-router-dom"
export const Header = () => {
    return <>

        <>

            <ReactBootStrap.Navbar bg="dark" variant="primary">
                <ReactBootStrap.Container>
                    <ReactBootStrap.Navbar.Brand style={{ textDecoration: 'none', color: "white" }} >Apartment </ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Nav className="me-auto">
                        <div className={Styles.headerbtn}>

                            <ReactBootStrap.Nav.Link><Link style={{ textDecoration: 'none', color: "white" }} to="/login"> Login </Link></ReactBootStrap.Nav.Link>

                        </div>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
        </>

    </>
}