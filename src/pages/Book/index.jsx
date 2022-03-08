import React, { Component } from 'react'
import { Card, WingBlank, WhiteSpace, SearchBar,Button} from 'antd-mobile';
import { Rate } from 'antd';
import { Divider } from 'antd';
import {PlusCircleTwoTone} from '@ant-design/icons'

import Img1 from '../../assets/images/1.png'
import Img2 from '../../assets/images/2.png'

import './index.scss'

const books = [
    {
        id:1,
        title:"在细雨中呼喊",
        date:"2022.03.01",
        img:Img1,
        star:4
    },
    {
        id:2,
        title:"兄弟",
        date:"2022.03.07",
        img:Img2,
        star:3
    },
    
]

export default class Book extends Component {
  
    componentDidMount() {
        this.autoFocusInst.focus();
    }

    searchContent = (e)=>{
        console.log(e)
    }
    
    onSubmit = ()=>{
        console.log(this.state.Search)
    }

    renderBook = () => {
        return books.map((item)=>{
            return (
            <WingBlank size="lg" key={item.id}>
                <WhiteSpace size="lg" />
                <Card>
                <Card.Header
                    title={item.title}
                    extra={<span className='date'>{item.date}</span>}
                />
                <Card.Body onClick={()=>{this.props.history.push('/book/content',{id:item.id} )}}>
                    <img className = "bookImg" src={item.img} alt="" />
                </Card.Body>
                <Divider/>
                <Card.Footer content={<Rate disabled defaultValue={item.star} />}/>
                </Card>
                <WhiteSpace size="lg" />
            </WingBlank>)
        })
    }


    render() {
        return (
            <div>
                <SearchBar placeholder="Please enter the book name" ref={ref => this.autoFocusInst = ref}
                    onSubmit={()=>{this.onSubmit()}}
                />
                <div className='tag'>
                    <span>{books.length}本书</span>
                </div>

                <div className='books'>
                    {this.renderBook()}    
                </div>

                <div className='addBook' onClick={()=>{this.props.history.push('/book/addBook')}}>+</div>
            </div>
        )
    }
}
