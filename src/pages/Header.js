import React, { useState, useEffect } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import useAxios from '../useAxios';

const Header = () => {
    const { response, loading, error } = useAxios({
        method: 'get',
        url: '/user',
    });

    const [user, setUser] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (response !== null) {
            setUser(response);
        }
    }, [response]);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='bg-dark'>
            <Navbar color="dark" expand="md" className='container'>
                <NavbarBrand href="/" className='text-white'>Over Clocked Technology</NavbarBrand>
                <NavbarToggler onClick={() => toggle()} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav style={{ marginLeft: 'auto' }} navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className='text-white'>
                                User Profile
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    {user.name}
                                </DropdownItem>
                                <DropdownItem>
                                    {user.email}
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header
