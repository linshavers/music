import React, { Component } from 'react';
import '../App.css';

class Interview extends Component {
    render() {
        return(
            <div className="Main">
                <section className='title white'>
                  <div className="container">
                    <div className='contentTitle'>
                        <img src={require('../images/ahardfela.png')} />
                    </div>
                        <h1>A Hard Fela to Follow: The Origin Story of Afrobeat</h1>
                        <p>In the video, A Hard Fela to Follow: The Origin Story of Afrobeat, we interview some students to discuss the narrative of Fela Kuti’s Afrobeat. Through this process, interviewees are asked a series of questions that deal with Afrobeat and Afrobeats. With this engaging dialogue, interviewees analyze Fela's work and songs that have sampled his work. Ultimately, the interviewees are asked whether these Afrobeats' songs are paying homage to Fela or just a strategic ploy to get more viewers?</p>

                 </div>
                </section>

                <section className='content interview black'>
                    <div class="container">
                    {/*<p>Content: 1. [Insert video as an embedded youtube video.  2. a timeline</p>*/}
                          <h1>Coming Soon!</h1>
                    </div>
                </section>

            </div>

        )
    }
}

export default Interview;
