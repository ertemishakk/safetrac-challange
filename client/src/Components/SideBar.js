import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import myTraining from '../images/myTraining.png'
import dashboard from '../images/dashboard.png'
import task from '../images/task.png'
import account from '../images/account.png'


const navbarLinks = [{
    id: 1,
    linkName: 'DASHBOARD',
    route: '/dashboard',
    image: dashboard

},
{
    id: 2,
    linkName: ' MY TRAINING',
    route: '/mytraining',
    linkLogo: 'fas fa-tv pr-2',
    image: myTraining

},
{
    id: 3,
    linkName: 'MY ACCOUNT',
    route: '/myaccount',
    linkLogo: 'fas fa-tv pr-2',
    image: account


},
{
    id: 4,
    linkName: 'TASK',
    route: '/task',
    linkLogo: 'fas fa-tv pr-2',
    image: task


},
]
export default class SideBar extends Component {
    state = {
        isOpen: false,
        windowWidth: window.innerWidth
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
    Z
    render() {
        return (
            <div style={{ marginLeft: this.state.windowWidth < 768 && !this.props.isOpen && - 167 }}>
                <Navbar className='px-0 ' style={{ minHeight: '1973px', display: 'block', width: 167, backgroundColor: '#35507d', }} light expand="md">
                    <Nav className="mt-3 flex-column" navbar style={{ top: 0 }}>
                        {navbarLinks.map(link => (
                            <NavItem key={link.id} className='py-1' style={{ borderLeft: link.id === 2 ? '5px solid rgb(236, 124, 23)' : '5px solid #35507d' }}>
                                <NavLink href={link.route} className='font-weight-bold text-left py-3 ' style={{ color: 'white', fontSize: '12px', verticalAlign: 'middle' }}>
                                    <img src={link.image} style={{ height: 15 }} className='px-2' />
                                    {link.linkName}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
