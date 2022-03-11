import React, { Component } from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import './index.scss'
import Pic1 from '../../assets/images/WechatIMG9350.jpeg'
import Pic2 from '../../assets/images/WechatIMG9351.jpeg'
import Pic3 from '../../assets/images/WechatIMG9352.jpeg'
import Pic4 from '../../assets/images/WechatIMG9353.jpeg'
import Pic5 from '../../assets/images/WechatIMG9354.jpeg'
import Pic6 from '../../assets/images/WechatIMG9355.jpeg'
import Pic7 from '../../assets/images/WechatIMG9356.jpeg'
import Pic8 from '../../assets/images/avator.jpeg'

const photoList = [
    Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8
]


export default class Photo extends Component {

    state = {
        photoShow:'',
        isShow:false,
    }

    changeShowPhoto = (photoUrl) => {
        this.setState({photoShow:photoUrl});
        this.setState({isShow:true});
    }

    removeShadow = () => {
        this.setState({isShow:false});
    }

    renderAllPhotos = () => {
        return photoList.map(item=>{
            return (
                <div className='photo' key={item}  onClick={()=>{this.changeShowPhoto(item)}}  >
                    <img src={item}></img>
                </div>
            )
        })
    }

    render() {
        const {photoShow, isShow} =  this.state;
        return (
            <div className='photos'>
                <div className={`${isShow ? "shadow" : " "}`}
                    onClick = {()=>{this.removeShadow()}}></div>
                <div className='tag-book'>
                    <span>{photoList.length}张图片</span>
                </div>
                <div className='photo-list'>
                    {this.renderAllPhotos()}
                </div>
                <div className={`${isShow ? "card-show ":" card-hidden"}`}>
                    <WingBlank size="lg">
                        <WhiteSpace size="lg" />
                        <Card>
                            <Card.Body>
                                <div className='card-show-div'>
                                    <img className="card-show-img" src={photoShow} alt="" />
                                </div>
                            </Card.Body>
                        </Card>
                        <WhiteSpace size="lg" />
                    </WingBlank>
                </div>
            </div>
        )
    }
}
