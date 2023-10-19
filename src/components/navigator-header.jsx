import {Navbar} from 'flowbite-react';

export default function NavigatorHeader() {
    return (
        <Navbar fluid>
            <Navbar.Brand href="https://www.xxxx.co/">
                <img alt="logo"
                     className="mr-3 h-5 sm:h-8"
                     src="./Logo.png"/>
            </Navbar.Brand>
            <Navbar.Collapse>
                <Navbar.Link active href="#">
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">
                    About
                </Navbar.Link>
                <Navbar.Link href="#">
                    Services
                </Navbar.Link>
                <Navbar.Link href="#">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="#">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}