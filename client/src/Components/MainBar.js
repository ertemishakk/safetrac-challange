import React, { Component } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
    Dropdown, DropdownMenu, DropdownToggle
} from 'reactstrap';
import abcCompany from '../images/abcCompany.png'
import man from '../images/man.png'
import user from '../images/user.png'
import calendar from '../images/calendar.png'
import SideBar from './SideBar';
import { Drawer } from '@material-ui/core';


class MainBar extends Component {

    state = {
        isOpen: false,
        isCalendarOpen: false,
        windowWidth: window.innerWidth,
        dropDown:false
    }

    toggleDropdown = a => {
        this.setState({
            dropDown: !this.state.dropDown
        })
    }

    toggleCalendar = (e) => {
        this.setState({
            isCalendarOpen: !this.state.isCalendarOpen
        })
    }

    toggleHamburger = (e) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    componentDidMount() {
        this.setState({
            windowWidth: window.innerWidth,
        })
        window.addEventListener('resize', this.updateWindowDimension);
        window.addEventListener('scroll', this.listenScrollEvent)

    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimension);
    }
    updateWindowDimension = (e) => {
        this.setState({
            windowWidth: window.innerWidth
        })
    }


    render() {
        return (
            <div className='position-relative' style={{ boxShadow: 'rgb(0 0 0 / 20%) -1px 2px 2px 0px', height: 80 }}>
                <Navbar
                    expand="md"
                    className='px-4 py-0'
                    style={{ height: 80 }}
                >

                    <NavbarToggler onClick={this.toggleHamburger} >
                        <i className="fas fa-bars"></i>
                    </NavbarToggler>

                    <NavbarBrand href='/' className={this.state.windowWidth > 767 ? 'text-center mr-auto my-auto' : 'text-center mx-auto my-auto'}>
                        <img src={abcCompany} style={{ maxHeight: 70 }} alt='abc company' />
                    </NavbarBrand>




                    {this.state.windowWidth > 767 && (
                        <Nav className="ml-auto font-weight-bold " navbar>
                            <NavItem >
                                <NavLink
                                    className='navbar-links'
                                    href="/"
                                    style={{ color: '#575655' }}
                                >
                                    <img src={man} style={{ height: 32 }} className='px-2' />
                                </NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink style={{ color: '#575655' }}
                                    href="/about"
                                    className='navbar-links'

                                >
                                    <img src={user} style={{ height: 32 }} className='px-2' />
                                    <p className='d-inline' style={{ fontSize: 14, color: '#40B5E6' }}>John Smith</p>
                                </NavLink>
                            </NavItem> */}
                               <Dropdown isOpen={this.state.dropDown}
                                            toggle={this.toggleDropdown}
                                        >
                                            <DropdownToggle tag='nav-link'
                                                data-toggle='dropdown'
                                                aria-expanded={this.state.dropDown}
                                            >
                                                <NavLink style={{ color: '#575655' }}
                                    href="#"
                                    className='navbar-links'

                                >
                                    <img src={user} style={{ height: 32 }} className='px-2' />
                                    <p className='d-inline' style={{ fontSize: 14, color: '#40B5E6' }}>John Smith</p>
                                </NavLink>
                                            </DropdownToggle>
                                            <DropdownMenu className='nav-dropdown-menu text-center border-0' >
                                                    <NavLink >John Smith</NavLink>
                                                    <NavLink>Edit profile</NavLink>
                                                    <NavLink >Logout</NavLink>
                                            </DropdownMenu>
                                        </Dropdown>

                            <NavItem>
                                <NavLink style={{ color: '#575655' }}
                                    href="#"
                                    className='navbar-links'

                                >
                                    <img src={calendar} onClick={this.toggleCalendar} style={{ height: 32 }} className='px-2' />
                                </NavLink>
                            </NavItem>
                        </Nav>
                    )}




                </Navbar>


                <Drawer
                    anchor='left'
                    open={this.state.isOpen}
                    onClose={this.toggleHamburger}
                >

                    <div
                        style={{ width: '167px', lineHeight: 1, backgroundColor: '#35507d', }}
                        role="presentation"
                    >
                        <SideBar isOpen={this.state.isOpen} />
                    </div>

                </Drawer>


                <Drawer
                    anchor='right'
                    open={this.state.isCalendarOpen}
                    onClose={this.toggleCalendar}
                >

                    <div
                        className='h-100 py-3 '
                        style={{ width: '300px', lineHeight: 1, backgroundColor: 'rgb(33, 41, 47)', }}
                        role="presentation"
                    >
                        <div onClick={this.toggleCalendar} className=' text-center position-absolute' style={{ cursor:'pointer',width: 50, height: 50, top: 0, backgroundColor: 'rgb(33, 41, 47)', left:0, zIndex:999 }}>
                            <p className='text-light' style={{ fontSize: 30, lineHeight: '50px' }}>&times; </p>
                        </div>
                        <div className='px-3 text-center'>
                            <p className='text-light' style={{ fontSize: 16 }} >COMPLIANCE CALENDAR</p>
                        </div>
                        <div className='px-3 py-3 text-light my-2' style={{ borderLeft: '6px solid', borderColor: 'rgb(125, 155, 245)', }}>
                            <p style={{ fontSize: 14 }}>01/08/2018, 3pm</p>
                            <p style={{ fontSize: 14 }}>Compliance Training</p>
                        </div>

                        <div className='px-3 py-3 text-light my-2' style={{ borderLeft: '6px solid', borderColor: 'rgb(240, 187, 74)', }}>
                            <p style={{ fontSize: 14 }}>21/08/2018, 3pm</p>
                            <p style={{ fontSize: 14 }}>Compliance Training</p>
                        </div>

                    </div>

                </Drawer>

            </div >
        )
    }
}



export default MainBar

