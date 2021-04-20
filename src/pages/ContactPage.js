import React from 'react';
import { Prompt } from "react-router-dom";
import "../styles/ContactPage.css";

class ContactPage extends React.Component {
    state = {
        value: "",
    }

    handleChange = (e) => {

        this.setState({
            value: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            value: "",
        })
    }
    render () {
        return (
            <div className="contact">
                <h3>Napisz do nas</h3>
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.value} onChange={this.handleChange} placeholder="Wpisz wiadomość ..."></textarea>
                    <button>Wyślij</button>
                </form>

                <Prompt
                    when={this.state.value}
                    message="Form not completed. Are you sure you want to leave this page?"
                />
            </div> 
        );
    }
    
}
 
export default ContactPage;