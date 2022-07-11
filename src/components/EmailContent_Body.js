import React, { Component } from 'react';
import '../styles/styles.css';

import flaticonWelcomeImage from '../assets/images/flaticon-welcome-image.png'

class EmailContent_Body extends Component {
    render() {
        return (<section className="email-body">
            <div className="content">
                <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
        </section>)
    }
}
export default EmailContent_Body;