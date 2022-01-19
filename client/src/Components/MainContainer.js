import React, { Component } from 'react'
import Badges from './Badges'
import Title from './Title'
import Courses from './Courses'

const badgeOptions = [{
    title: 'Assigned',
    bgColor: 'rgb(19, 187, 183)',
    height: 38,
    width: 150

},
{
    title: 'Optional',
    bgColor: 'rgb(137, 138, 142)',
    height: 38,
    width: 150

}]


export default class MainContainer extends Component {

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
            <div style={{ backgroundColor: 'white', width: this.state.windowWidth > 1600 && 1408, minHeight: 1506, marginTop: 40, paddingTop: 30, paddingLeft: 30, paddingRight: 30, borderRadius: '4px', boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 12px 2px' }}>

                <Title title='COMPLIANCE COURSES' />
                <Badges badges={badgeOptions} />
                <Courses />

            </div>
        )
    }
}
