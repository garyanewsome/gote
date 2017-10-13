import React from 'react'

import Dispatches from '../actions/dispatches'
import Store      from '../stores/appStore'

import Loading from '../components/loading'

const goteStyle = {
  marginTop: '2em',
  padding: '1em',
  backgroundColor: '#AAAAAA',
  color: '#FFFFFF',
  border: '1px solid #000000',
  borderRadius: '8px'
}

const goteAudioControl = { display: 'none' }

class Gote extends React.Component {

  constructor(){
    super()
    this.state = {loaded: false}
  }

  componentDidMount(){
    Dispatches.boot({
      originalElement: this.props.originalElement
    })
    Dispatches.gote()
    this.setState({loaded: true})
  }

  render(){
    if(this.state.loaded) {
      return (
        <div className="gote-container">
          <div className="row">
            <div className="col s12">
              <div className="gote">
                <div className="row">
                  <div id="seven" className="button col s4"></div>
                  <audio id="audio-seven" controls style={goteAudioControl}>
                    <source src="./sounds/7.mp3" type="audio/mpeg" /> Your browser does not support the audio element.
                  </audio>            
                  
                  <div id="eight" className="button col s4"></div>
                  <audio id="audio-eight" controls style={goteAudioControl}>
                    <source src="./sounds/8.mp3" type="audio/mpeg" /> Your browser does not support the audio element.
                  </audio>            
                  
                  <div id="nine" className="button col s4"></div>
                  <audio id="audio-nine" controls style={goteAudioControl}>
                    <source src="./sounds/9.mp3" type="audio/mpeg" /> Your browser does not support the audio element.
                  </audio>

                  <div id="four" className="button col s4"></div>
                  <audio id="audio-four" controls style={goteAudioControl}>
                    <source src="./sounds/4.mp3" type="audio/mpeg" /> Your browser does not support the audio element.
                  </audio>            
                  
                  <div id="five" className="button col s4"></div>
                  <audio id="audio-five" controls style={goteAudioControl}>
                    <source src="./sounds/5.mp3" type="audio/mpeg" /> Your browser does not support the audio element.
                  </audio>            
                  
                  <div id="six" className="button col s4"></div>
                  <audio id="audio-six" controls style={goteAudioControl}>
                    <source src="./sounds/6.mp3" type="audio/mpeg" /> Your browser does not support the audio element.
                  </audio>   

                  <div id="one" className="button col s4"></div>
                  <audio id="audio-one" controls style={goteAudioControl}>
                    <source src="./sounds/1.mp3" type="audio/mpeg" /> Your browser does not support the audio element.
                  </audio>

                  <div id="two" className="button col s4"></div>
                  <audio id="audio-two" controls style={goteAudioControl}>
                    <source src="./sounds/2.mp3" type="audio/mpeg" /> Your browser does not support the audio element.
                  </audio>            
                  
                  <div id="three" className="button col s4"></div>
                  <audio id="audio-three" controls style={goteAudioControl}>
                    <source src="./sounds/3.mp3" type="audio/mpeg" /> Your browser does not support the audio element.
                  </audio>            
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return <span><Loading /></span>
    }
  }
}

export default Gote
