import React, { Component } from 'react'
import {Modal, NavBar, WingBlank, Card, WhiteSpace} from 'antd-mobile';
import { Empty } from 'antd';
import './index.scss'



const alert = Modal.alert;



export default class About extends Component {

    state = {
        todoContent:[
            {
                id:1,
                content:'我要睡觉',
                done:false
            },
            {
                id:2,
                content:'我要吃饭',
                done:false
            },
            {
                id:3,
                content:'我想发呆',
                done:false
            },
            {
                id:4,
                content:'我想发呆',
                done:false
            },
            {
                id:5,
                content:'我想发呆',
                done:false
            },
            {
                id:6,
                content:'我想发呆',
                done:false
            },
            {
                id:7,
                content:'我想发呆',
                done:false
            },
            {
                id:8,
                content:'我想发呆55',
                done:false
            }
        ]
    }

    deleteTodo = (id)=>{
        const {todoContent} = this.state;
        todoContent.forEach((item, index)=>{
            if(item.id == id){
                todoContent.splice(index,1)
            }
        })
        this.setState({todoContent});
    }

    showAlert = (id) => {
        const alertInstance = alert('Delete', 'Are you sure?', [
          { text: 'Cancel', onPress: () => console.log('cancel'), style: 'warning' },
          { text: 'OK', onPress: () => {this.deleteTodo(id)} },
        ]);
        setTimeout(() => {
          // 可以调用close方法以在外部close
          console.log('auto close');
          alertInstance.close();
        }, 500000);
      };

    changeState = (id) => {
        console.log(id);
        const {todoContent} = this.state;
        todoContent.forEach((item)=>{
            if(item.id == id){
                item.done = !item.done;
            }
        })
        this.setState({todoContent})
    }

    startTouch = () => {
        this.beforeTime = new Date();        
    }

    endTouch = (id) => {
        this.endTime = new Date();
        if(this.endTime - this.beforeTime >= 300){
            this.showAlert(id)
        }

    }

    showTodo = () => {
        const {todoContent} = this.state;
        return todoContent.map((item)=>{
            return (
                <div className='contents' onTouchStart = {this.startTouch} onTouchEnd={()=>{this.endTouch(item.id)}}>
                    <WingBlank size="lg" key={item.id}>
                        <WhiteSpace size="lg" />
                        <Card>
                        <Card.Body>
                            <div className={item.done ? "specific-content":""}>{item.content}</div>
                        </Card.Body>
                        <Card.Footer extra={<div className={`circle  ${item.done ? "fill-circle":" "}`} onClick={()=>{this.changeState(item.id)}}></div>} />
                        </Card>
                        <WhiteSpace size="lg" />
                    </WingBlank>  
                </div>
            )
        })
    }

    render() {
        const {todoContent} = this.state;
        return (
            <div className='todo-list'>
                <div className='todo-title'>🗓📌待办事项</div>
                <div className='todo-content'>
                    {
                        todoContent.length == 0 ? <Empty/>:this.showTodo()
                    }
                </div>
            </div>
        )
    }
}
