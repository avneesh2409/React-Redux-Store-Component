import React, { Component } from 'react';
import { fetchUsers } from '../api/get';

class Customers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCustomer: 1,
      customerList: []
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getCustomerData();
  }

  //Function to get the Customer Data from json
  getCustomerData() {
    let url = 'https://jsonplaceholder.typicode.com/todos';
    fetchUsers(url).then(res => {
      console.log("response", res);
      let person = res.map((e, i) => {
        return (
          <div key={i}>
            <p><b>{i + 1}</b>{e.title}</p>
          </div >
        )
      })
      this.setState({ customerList: person })
    }).catch(err => {
      console.log(err);
    });

  }

  render() {
    return (
      < div className="jumbotron" >
        hey i am here
        {this.state.customerList}
      </div >
    )




  }
}

export default Customers