import React, { Component } from 'react';
import '../styles/styles.css';

class EmailContent_Action extends Component {
    render() {
        return (<section className="email-actions">
            <button>Reply</button>
            <button>Forward</button>
        </section>)
    }
}
export default EmailContent_Action;