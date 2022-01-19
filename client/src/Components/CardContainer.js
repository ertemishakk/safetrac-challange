import React, { Component } from 'react'
import {
    Row, Col
} from 'reactstrap';
import EachCard from './EachCard';
import image1 from '../images/ux-image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import SubCard from './SubCard';

const cards = [{
    showOverdue: true,
    title: 'Anti Discrimination and Harrasment in workplace',
    showIcons: true,
    showDueDate: true,
    showScroll: true,
    image: image1

},
{
    showOverdue: true,
    title: 'Discrimination',
    showIcons: true,
    showDueDate: true,
    showScroll: false,
    image: image2


},
{
    showOverdue: true,
    title: 'Consumer Protection',
    showIcons: false,
    showDueDate: true,
    showScroll: false,
    image: image3,
    courses: [{
        showOverDue: true,
        title: 'Introduction',
        showIcons: true,
        showDueDate: true
    },
    {
        showOverDue: false,
        title: 'Introduction Part 2',
        showIcons: true,
        showDueDate: true
    }]



},
{
    showOverdue: false,
    title: 'Work Health and Safety',
    subTitles: ['Test is not currently open.', 'Reopens: 30 Nov 2024'],
    showIcons: false,
    showDueDate: true,
    showScroll: false,
    image: image4


},
{
    showOverdue: false,
    title: 'Consumer Protection',
    showIcons: true,
    showDueDate: true,
    showScroll: false,
    image: image5


}]

export default class CardContainer extends Component {
    state = {
        windowWidth: window.innerWidth,
        isOpen: false,
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
            <div style={{ marginTop: 75 }}>
                <Row>
                    {cards.map((card, index) => (
                        <Col key={index} md={this.state.windowWidth > 1600 ? 2 : 12} className='mr-3 h-100 my-4'>
                            <div className={`position-relative ${this.state.windowWidth < 769 && 'mx-auto'}`} style={{ width: '219px', }}>
                                <EachCard data={card} index={index} setOpen={() => this.setState({ isOpen: !this.state.isOpen, index: index })} />
                            </div>
                        </Col>
                    ))}
                </Row>

                {this.state.isOpen && (
                    <div className=' py-3 px-3' style={{ backgroundColor: 'rgb(240, 241, 236)' }}>
                        <div>
                            <p style={{ color: 'rgb(102, 102, 102)', fontSize: 18, }} className='ml-2'>{cards[this.state.index].title}</p>
                        </div>
                        <Row>

                            {cards[this.state.index].courses ?.map(course => (
                                <Col md={this.state.windowWidth > 1600 && 2} style={{ display: this.state.windowWidth < 1600 && 'none' }}>
                                    <SubCard card={cards[this.state.index]} course={course} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                )}

            </div>
        )
    }
}
