import React from 'react'
import MainBar from './MainBar'
import {
    Row
} from 'reactstrap';
import Title from './Title';
import Badges from './Badges';
import MainContainer from './MainContainer';
import SideBar from './SideBar';



const badgeOptions = [{
    title: 'Compliance',
    notificationNo: 4,
    bgColor: 'rgb(19, 187, 183)',
    height: 45,
    width: 175
},
{
    title: 'Soft Skills',
    notificationNo: 3,
    bgColor: 'rgb(137, 138, 142)',
    height: 45,
    width: 175


}]


class Main extends React.Component {
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
            <div >
                <Row className='mx-0'>
                    <SideBar />
                    <div className='content' style={{ minHeight: '100vh', width: this.state.windowWidth > 767 ? 'calc(100vw - 167px)' : '100vw' }}>
                        <MainBar />
                        <div style={{ backgroundColor: 'whitesmoke', paddingLeft: 30, paddingRight: 30, paddingTop: 35, marginTop: 2, height: '1894px' }}>
                            <Title title='MY TRAINING' />
                            <Badges badges={badgeOptions} />
                            <MainContainer />

                        </div>
                    </div>
                </Row>

            </div>
        )
    }
}




export default Main;
