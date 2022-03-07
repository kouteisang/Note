import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import {BookOutlined, EditOutlined, 
  CameraOutlined,PushpinOutlined,
  BookFilled,EditFilled,
  CameraFilled,PushpinFilled
} from '@ant-design/icons'
import './index.scss'
import { withRouter } from 'react-router-dom';


const list = [
  {
    title:"Book",
    key:"book",
    path:"/home/book",
    icon:<BookOutlined/>,
    iconClick:<BookFilled />
  },
  {
    title:"Journal",
    key:"journal",
    path:'/home/journal',
    icon:<EditOutlined />,
    iconClick:<EditFilled />
  },
  {
    title:"Photo",
    key:"photo",
    path:'/home/photo',
    icon:<CameraOutlined />,
    iconClick:<CameraFilled />
  },
  {
    title:"About",
    key:"about",
    path:'/home/about',
    icon:<PushpinOutlined />,
    iconClick:<PushpinFilled />
  }
]

class Index extends Component {
    
  state = {
    selectItem:"Book"
  }

  renderTabBar = () => {
    return list.map((item)=>{
      return (<TabBar.Item
        title={item.title}
        key={item.key}
        icon={item.icon}
        selectedIcon={item.iconClick}
        onPress={() => {
          this.setState({selectItem:item.title})
          this.props.history.push(item.path);
        }}
        selected={this.state.selectItem == item.title}
      />)
    })
  }

  render(){
    return (
      <div className='index'>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
            {
              this.renderTabBar()
            }
        </TabBar>
      </div>
    );
  }
}    

export default withRouter(Index)