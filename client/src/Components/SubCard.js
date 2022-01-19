import React, { Component } from 'react'
import {
    Card, CardBody, Badge, CardImg,
} from 'reactstrap';
import book from '../images/book.png'
import puzzle from '../images/puzzle.png'
import pen from '../images/pen.png'
import scrollBar from '../images/scrollBar.png'
import arrow from '../images/arrow.png'

export default class SubCard extends Component {
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
            <div>
                <div className='mt-5'>
                    <div className='position-relative' >
                        {this.props.course.showOverDue && (
                            <div className='position-absolute' style={{ width: 177, height: 32, backgroundColor: 'rgb(240, 63, 66)', borderRadius: '4px 4px 0px 0px', zIndex: 999, top: -32, right: 9 }}>
                                <p className='text-light text-center' style={{ fontSize: 12, lineHeight: '32px' }}>10 DAYS OVERDUE</p>
                            </div>
                        )}

                    </div>


                    <Card
                        className='border'
                        style={{ boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 10px 0px', borderRadius: '6px', borderColor: 'rgb(102, 102, 102)', borderStyle: 'solid' }}
                    >
                        <CardBody style={{ height: 181 }}>
                            <div>
                                <p style={{ color: 'rgb(102, 102, 102)', fontSize: 14, }}>
                                    {this.props.course.title}
                                </p>

                            </div>


                            <div className='mt-5 position-absolute' style={{ bottom: 40 }}>
                                <img src={book} alt='book' style={{ height: 23.22, width: 21.35, marginRight: 30 }} />
                                <img src={puzzle} alt='puzzle' style={{ height: 25, width: 25, marginRight: 30 }} />
                                <img src={pen} alt='pen' style={{ height: 25, width: 25, marginRight: 30 }} />

                            </div>



                            <div className='mt-2 position-absolute' style={{ bottom: 10 }}>
                                <Badge size='sm' className='p-1' style={{ backgroundColor: 'rgb(222, 222, 222)', color: 'rgb(102, 102, 102)', fontSize: 11 }}>
                                    DUE DATE: 27/03/2019
            </Badge>
                            </div>



                        </CardBody>

                    </Card>

                </div>
            </div>
        )
    }
}
