import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

export default class Badges extends Component {
    state = {
        windowWidth: window.innerWidth
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


            <div style={{ marginTop: 45 }}>

                {this.props.badges ?.map((badge, index) => (
                    this.state.windowWidth > 767 ?
                        <div key={index} className='child pr-4' style={{paddingLeft:15}}>
                            <Row >
                                <Col className={badge.notificationNo? 'text-left' :'text-center'} style={{ backgroundColor: badge.bgColor,  borderRadius: '4px', height: badge.height, width: badge.width, boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 2px 1px', marginRight: 35 }}>
                                    <div>
                                    <p  style={{ fontSize: 14, color: 'white', lineHeight: `${badge.height}px` }} >{badge.title.toUpperCase()}</p>
                                    {badge.notificationNo && (
                                                    <span className='text-light mr-1  text-center position-absolute ' style={{ display: 'inline-block', height: 29, width: 29, lineHeight: '29px', backgroundColor: 'rgb(242, 112, 99)', borderRadius: '4px', margin: 'auto', top: 0, bottom: 0, right: 10 }}>
                                                        {badge.notificationNo}
                                                    </span>
                                                )}
                                        </div>

                                </Col>


                            </Row>


                        </div> :
                        (
                            <div key={index}>
                                <Row className='mb-3'>
                                    <Col >
                                        <div className='w-100 position-relative' style={{ backgroundColor: badge.bgColor, padding: '0px 0px 0px 20px', borderRadius: '4px', height: badge.height, boxShadow: 'rgb(0 0 0 / 20%) 0px 1px 2px 1px' }}>
                                            <p style={{ fontSize: 14, color: 'white', lineHeight: `${badge.height}px` }} >{badge.title.toUpperCase()}
                                                {badge.notificationNo && (
                                                    <span className='  text-center position-absolute ' style={{ display: 'inline-block', height: 29, width: 29, lineHeight: '29px', backgroundColor: 'rgb(242, 112, 99)', borderRadius: '4px', margin: 'auto', top: 0, bottom: 0, right: 10 }}>
                                                        {badge.notificationNo}
                                                    </span>
                                                )}

                                            </p>

                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        )
                ))
    }
            </div>

        )
    }
}
