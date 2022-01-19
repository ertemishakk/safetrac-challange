import React, { Component } from 'react'
import {
    Card, CardBody, Badge, CardImg,
} from 'reactstrap';
import book from '../images/book.png'
import puzzle from '../images/puzzle.png'
import pen from '../images/pen.png'
import scrollBar from '../images/scrollBar.png'
import arrow from '../images/arrow.png'


export default class EachCard extends Component {
    state = {
        windowWidth: window.innerWidth,
        isCoursesOpen: false
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
            <div className='h-100 '>
                <div className='position-relative' >
                    {this.props.data.showOverdue && (
                        <div className='position-absolute' style={{ width: 177, height: 32, backgroundColor: 'rgb(240, 63, 66)', borderRadius: '4px 4px 0px 0px', zIndex: 999, top: -32, right: 9 }}>
                            <p className='text-light text-center' style={{ fontSize: 12, lineHeight: '32px' }}>10 DAYS OVERDUE</p>
                        </div>
                    )}

                </div>
                <Card
                    className='border'
                    style={{ filter: this.props.index === 2 && 'drop-shadow(rgb(19, 187, 183) 0px 0px 6.5px)', boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 10px 0px', borderRadius: '6px', borderColor: 'rgb(102, 102, 102)', borderStyle: 'solid' }}
                >
                    <CardBody style={{ height: 331 }}>
                        <div>
                            <p style={{ color: 'rgb(102, 102, 102)', fontSize: 14, overflow: 'scroll' }}>
                                {this.props.data.title}
                            </p>
                            {this.props.data.showScroll && (
                                <div className='position-absolute' style={{ right: 0, top: 0 }}>
                                    <img style={{ width: '9px', height: '98px' }} src={scrollBar} alt='scrollBar' />
                                </div>
                            )}

                        </div>

                        {this.props.data.subTitles && (
                            <div>
                                {this.props.data.subTitles.map((subTitle, index) => (
                                    <p className='my-0' key={index} style={{ color: 'rgb(102, 102, 102)', fontSize: 14 }}>{subTitle}</p>
                                ))}
                            </div>
                        )}


                        {this.props.data.showIcons && (
                            <div className='mt-5 position-absolute' style={{ bottom: 180 }}>
                                <img src={book} alt='book' style={{ height: 23.22, width: 21.35, marginRight: 30 }} />
                                <img src={puzzle} alt='puzzle' style={{ height: 25, width: 25, marginRight: 30 }} />
                                <img src={pen} alt='pen' style={{ height: 25, width: 25, marginRight: 30 }} />

                            </div>
                        )}
                        {
                            this.state.windowWidth > 1600 && this.props.data.courses && (
                                <div onClick={() => this.props.setOpen(this.props.index)} className='position-absolute' style={{ bottom: 190, cursor: 'pointer' }}>
                                    <p className='m-0' style={{ fontSize: 14, color: 'rgb(19, 187, 183)' }}>You have {this.props.data.courses.length} modules
                                    <img src={arrow} alt='arrow' style={{ height: 18, width: 18, marginLeft: 10, marginBottom: 2 }} />
                                    </p>
                                </div>
                            )
                        }



                        <div className='mt-2 position-absolute' style={{ bottom: 150 }}>
                            <Badge size='sm' className='p-1' style={{ backgroundColor: 'rgb(222, 222, 222)', color: 'rgb(102, 102, 102)', fontSize: 11 }}>
                                DUE DATE: 27/03/2019
                                </Badge>
                        </div>



                    </CardBody>

                    <CardImg
                        alt="Card image cap"
                        src={this.props.data.image}
                        bottom
                        className='position-absolute'
                        width="100%"
                        style={{ bottom: 0, height: 141 }}
                    />
                </Card>





            </div>
        )
    }
}
