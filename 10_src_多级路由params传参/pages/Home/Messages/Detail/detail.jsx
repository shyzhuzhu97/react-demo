import React, {Component} from 'react';

class Detail extends Component {
    state = {
        detailData: [
            {id: "01", message: "我是你好张三的详情"},
            {id: "02", message: "我是你好李四的详情"},
            {id: "03", message: "我是你好王五的详情"},
            {id: "04", message: "我是你好刘六的详情"},
        ]
    }

    render() {
        const {id} = this.props.match.params
        const messageObj = this.state.detailData.find((obj)=>{
            return obj.id === id
        })
        return (
            <div>
                {messageObj.message}
            </div>
        );
    }
}

export default Detail;