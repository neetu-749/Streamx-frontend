import React, {component} from "react";
export default class player extends component {
    constructor(props) {
        this.state = {
            videoId:this.props.match.params.id,
            videoData:{}
        }
    }
    async componentDidMount() {
        try{
            const res = await fetch('http://localhost:4000/video/${this.state.videoId}/data');
            const data = await res.json();
            this.setState({videoData: data});
        } catch(err){
            console.log(err);
        }
    }
    render(){
        return(
            <div className="App-header">
                <video controls muted autoplay>
                    <source src={'http://localhost:4000/video/${this.state.videoId}'} type="video/mp4"></source>
                </video>
                <h1>{this.state.videoData.name}</h1>
            </div>
        )
    }
}