import React, { Component } from 'react';
import '../styles/styles.css';


import EmailToolbar from './EmailToolbar.js';
import EmailContent_Title from './EmailContent_Title.js';
import EmailContent_Header from './EmailContent_Header.js';
import EmailContent_Body from './EmailContent_Body.js';
import EmailContent_Action from './EmailContent_Action.js';
class Main extends Component {
    render() {
        // You can use them as regular CSS styles
        return (<main className="email-view">
            < EmailToolbar />
            <article className="email-content">
                < EmailContent_Title />
                < EmailContent_Header />
                < EmailContent_Body />
                < EmailContent_Action />
            </article>
        </main>)


    }
}
export default Main;
