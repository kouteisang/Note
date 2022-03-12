import React, { Component } from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import './index.scss'
export default class Journal extends Component {
    render() {
        return (
            <div className='journal'>
                <div className='search-wrapper'>
                    <i className='iconfont icon-seach'></i>
                    <input className='search-area' type="text" placeholder="Search"/>
                </div>

                <div className='tag3'>
                    <span>1篇日记</span>
                </div>

                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                    <Card.Header
                        title="This is title"
                        extra={<span>this is extra</span>}
                    />
                    <Card.Body>
                        <div className='journal-content'>This is content of `Card`This is content of `CardThis is content of `CardThis is content of `CardThis is content of `CardThis is content of `CardThis is content of `CardThis is content of `Card</div>
                    </Card.Body>
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>

                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                    <Card.Header
                        title="This is title"
                        extra={<span>this is extra</span>}
                    />
                    <Card.Body>
                        <div className='journal-content'>This is content of `Card`This is content of `CardThis is content of `CardThis is content of `CardThis is content of `CardThis is content of `CardThis is content of `CardThis is content of `Card</div>
                    </Card.Body>
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>


            </div>
        )
    }
}
