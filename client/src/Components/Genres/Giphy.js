import React, { Component } from 'react';
import axios from 'axios';
// import API_KEY from '../../config.js'



export default class Giphy extends Component {
    constructor(props){
        super(props)
        this.state = {
          giphy: []
        }
      }

      componentDidMount(){
        axios.get(`https://api.giphy.com/v1/gifs/search?q=rainbow&api_key=zBgx2F4PBeszRUFVWpmuY6EDmaRQgdVA"`)
        .then(json => {
          this.setState({giphy:json.data.results})
            console.log(this.state.giphy)

        })

    
      }

    render(){

        return(

          <div>
          Giphy
          </div>

        )
      }
  }




