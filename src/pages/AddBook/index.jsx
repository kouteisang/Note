import React, { Component } from 'react'
import moment from 'moment'
import { NavBar, Icon, TextareaItem, List} from 'antd-mobile';

import { Upload, message, Divider } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import Img1 from '../../assets/images/1.png'
import './index.scss'

const monthToEnglish = {
    1:"Jan.",
    2:"Feb.",
    3:"Mar.",
    4:"Apr.",
    5:"May.",
    6:"Jun.",
    7:"Jul.",
    8:"Aug.",
    9:"Sept.",
    10:"Oct.",
    11:"Nov.",
    12:"Dec.",
    
}


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }


export default class AddBook extends Component {

    state = {
        loading: false,
        // imageUrl:Img1
    }

    getNowDate = () =>{
        console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
        const year = moment().get('year')
        const month = moment().get('month')+1
        const day = moment().get('date')
        const hour = moment().hours()
        const minute = moment().minutes()
        return (monthToEnglish[month] + " " + day + ", " + year + " at " + hour+":"+minute)
    }

    handleChange = info => {
        console.log("xx")
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
        }
      };


    render() {
        const { loading, imageUrl } = this.state;
        const uploadButton = (
          <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        );
        return (
            <div className='add-book-page'>
                    <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {this.props.history.push('/book')}}
                    >添加图书</NavBar>

                    <div className='nowTime'>
                        {this.getNowDate()}
                    </div>
                    <input
                    className='input-book-title'
                     type="text" placeholder="Title" />
                    <Divider />

                    <TextareaItem                 
                        rows={15}
                        count={200}
                        placeholder="Please Input the content"
                    />

                    <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img className="book-img" src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>

            </div>
        )
    }
}
