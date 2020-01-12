import React, { Component } from "react";
import { postusers } from '../api/post';
import OneSignalApi from './oneSignalApi';

class Fetch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.postdata = this.postdata.bind(this);
    }
    componentDidMount() {
        let url = "https://onesignal.com/api/v1/notifications";
        let data = {
            app_id: "2a76d0a5-e360-438c-a9dc-d21faaa6e175",
            contents: { "en": "English Message" },
            title:"this.is title",
            url:"http://localhost:3000/fetch",
            included_segments: ["All"]
        }
        let options = {
            body: JSON.stringify(data),
            port: 443,
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Basic MTk5YmI4ZTItMmFkMS00NmU3LWJhZmQtZDlkYWM5OTFjMGQ5"
            },

        }
        this.postdata(url, options);
    }
    postdata = (url, options) => {
        postusers(url, options).then(res => console.log(res)).catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <div>
                <h1>hey Ia m Here in Fetch functional component</h1>
                <OneSignalApi />
            </div>
        )
    }

}
export default Fetch;


