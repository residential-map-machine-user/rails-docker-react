import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../components/Modal';
import {modalOpen} from '../actions/Modal';
import Form from './Form';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/Link';
import {Row, Col, Grid} from 'react-flexbox-grid';
import { DefaultPlayer as Video } from 'react-html5video';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import ReactDOM from 'react-dom';
import rd3 from 'rd3';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

class Live2d extends React.Component {
    componentDidMount(){
        let canvas = ReactDOM.findDOMNode(this.refs.glcanvas);
        let ctx = canvas.getContext('2d');
        let live2d = ReactDOM.findDOMNode(this.refs.live2d);
        let scriptsUrl = ["./live2d/live2d.min.js", "./live2d/Live2dFramework.js", "./live2d/utils/MatrixStack.js", "./live2d/utils/ModelSettingJson.js","./live2d/PlatformManager.js", "./live2d/LAppDefine.js","./live2d/LAppModel.js", "./live2d/LAppLive2DManager.js", "./live2d/SampleApp1.js"]
        scriptsUrl.map((url)=>{
            let script = document.createElement("script");
            script.setAttribute('src',url);
            live2d.appendChild(script);
        });
    }

    render(){
        return (
            <div ref="live2d" >
                <h3>Live2d</h3>
                <canvas style={{
                    backgroundSize: "150%",
                    backgroundImage: "url(./live2d/assets/image/back_class_normal.png)"
                }} ref="glcanvas"/>
            </div>
        )
    }
}

const ListTest = () => (
    <List selectable ripple>
        <ListSubHeader caption='Explore characters' />
        <ListItem
            avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
            caption='Dr. Manhattan'
            legend="Jonathan 'Jon' Osterman"
            rightIcon='star'
        />
        <ListItem
            avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
            caption='Ozymandias'
            legend='Adrian Veidt'
            rightIcon='star'
        />
        <ListItem
            avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
            caption='Ozymandias'
            legend='Adrian Veidt'
            rightIcon='star'
        />
        <ListItem
            avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
            caption='Rorschach'
            legend='Walter Joseph Kovacs'
            rightIcon='star'
        />
        <ListItem
            avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
            caption='Ozymandias'
            legend='Adrian Veidt'
            rightIcon='star'
        />
        <ListDivider />
        <ListItem caption='Contact the publisher' leftIcon='send' />
    </List>
);



const LineChart = rd3.LineChart;
const lineData = [
    {
        name: 'series1',
        values: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
        strokeWidth: 3,
        strokeDashArray: "5,5",
    },
    {
        name: 'series2',
        values : [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ]
    },
    {
        name: 'series3',
        values: [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ]
    }
];



const GithubIcon = () => (
    <svg viewBox="0 0 284 277">
      <g><path d="M141.888675,0.0234927555 C63.5359948,0.0234927555 0,63.5477395 0,141.912168 C0,204.6023 40.6554239,257.788232 97.0321356,276.549924 C104.12328,277.86336 106.726656,273.471926 106.726656,269.724287 C106.726656,266.340838 106.595077,255.16371 106.533987,243.307542 C67.0604204,251.890693 58.7310279,226.56652 58.7310279,226.56652 C52.2766299,210.166193 42.9768456,205.805304 42.9768456,205.805304 C30.1032937,196.998939 43.9472374,197.17986 43.9472374,197.17986 C58.1953153,198.180797 65.6976425,211.801527 65.6976425,211.801527 C78.35268,233.493192 98.8906827,227.222064 106.987463,223.596605 C108.260955,214.426049 111.938106,208.166669 115.995895,204.623447 C84.4804813,201.035582 51.3508808,188.869264 51.3508808,134.501475 C51.3508808,119.01045 56.8936274,106.353063 65.9701981,96.4165325 C64.4969882,92.842765 59.6403297,78.411417 67.3447241,58.8673023 C67.3447241,58.8673023 79.2596322,55.0538738 106.374213,73.4114319 C117.692318,70.2676443 129.83044,68.6910512 141.888675,68.63701 C153.94691,68.6910512 166.09443,70.2676443 177.433682,73.4114319 C204.515368,55.0538738 216.413829,58.8673023 216.413829,58.8673023 C224.13702,78.411417 219.278012,92.842765 217.804802,96.4165325 C226.902519,106.353063 232.407672,119.01045 232.407672,134.501475 C232.407672,188.998493 199.214632,200.997988 167.619331,204.510665 C172.708602,208.913848 177.243363,217.54869 177.243363,230.786433 C177.243363,249.771339 177.078889,265.050898 177.078889,269.724287 C177.078889,273.500121 179.632923,277.92445 186.825101,276.531127 C243.171268,257.748288 283.775,204.581154 283.775,141.912168 C283.775,63.5477395 220.248404,0.0234927555 141.888675,0.0234927555" /></g>
    </svg>
);

class App extends Component {
  componentWillMount() {}

  handleModalOpen(){
    this.props.modalOpen(true)
  }

  handleModalClose(){
    this.props.modalOpen(false)
  }

  onSubmitEvent(values){
    console.log('APIに送信したり色々するとこ')
    console.log(values)
  }

  render() {
    const {show} = this.props
    return (
      <div>
          <AppBar title="React Toolbox" rightIcon={<GithubIcon />}>
              <Navigation type="horizontal">
                  <Link href="http://" label="Inbox" icon="inbox" />
                  <Link href="http://" active label="Profile" icon="person" />
                  <Link href="http://" label="SginIn" icon="inbox" />
                  <Link href="http://" label="Register" icon="inbox" />
              </Navigation>
          </AppBar>
              <Row>
                  <Col xs={8} style={{padding:0}}>
                      <Video loop muted
                             controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                             poster="./proto.JPG"
                             style={{height:400}} onCanPlayThrough={() => {
                                 // Do stuffkk
                             }}>
                          <source src="./aa.mp4" type="video/mp4" />
                      </Video>
                  </Col>
                  <Col xs={4} style={{backgroundColor:"white", height:400, overflow: "scroll", boxShadow:" 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)"}}>
                      <ListTest></ListTest>
                  </Col>
              </Row>
              <Row style={{height:500}}>
                  <Col xs={8} style={{boxShadow:" 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)", backgroundColor:"white"}}>
                      <Tabs
                          onSelect={this.handleSelect}
                          selectedIndex={0}>
                          <TabList>
                              <Tab>Ref
                              </Tab>
                              <Tab>Stat</Tab>
                              <Tab>Friend</Tab>
                          </TabList>
                          <TabPanel>
                              <Card style={{width: '350px'}}>
                                  <CardMedia
                                      aspectRatio="wide"
                                      image="https://placeimg.com/800/450/nature"
                                  />
                                  <CardTitle
                                      title="Title goes here"
                                      subtitle="Subtitle here"
                                  />
                              </Card>
                          </TabPanel>
                          <TabPanel>
                              <LineChart
                                  legent={true}
                                  data={lineData}
                                  width="100%"
                                  height={400}
                                  viewBoxObject={{
                                  x:0,
                                  y:0,
                                  width: 500,
                                  height: 400
                                  }}
                                  title="Line Chart"
                                  yAxisLabel="Altitude"
                                  xAxisLabel="Elapsed Time"
                                  domain={{x:[,6],y: [-10,]}}
                                  gridHorizontal={true}>
                              </LineChart>
                          </TabPanel>
                          <TabPanel>
                              <h2>Hello from Baz</h2>
                          </TabPanel>
                      </Tabs>
                  </Col>
                  <Col xs={4} style={{background:"white", height:500, boxShadow:" 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)", padding:0}}>
                      <Live2d></Live2d>
                  </Col>
              </Row>
          <div className="l-wrapper">
              <div className="c-container">
                  <h1 className="c-title c-title--primary">Modal</h1>
                  <button className="c-btn c-btn-primary--flat" onClick={this.handleModalOpen.bind(this)}>Modal Open</button>
                  <Modal
                      handleModalOpen={this.handleModalOpen.bind(this)}
                      handleModalClose={this.handleModalClose.bind(this)}
                      show={show}
                      title='modalテスト'>
                      モーダル内容
                  </Modal>
              </div>
              <Form onSubmit={this.onSubmitEvent.bind(this)} />
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    show: state.Modal.show
  }
}

function mapDispatchToProps(dispatch) {
  //dispatchはstoreへ情報を渡す操作を表す
    //bindActionCreatorsは複数のアクションクリエーターをstoreへ通知するための関数
  return bindActionCreators(Object.assign({}, {modalOpen}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)