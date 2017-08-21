import React from 'react';
import styles from './Subscribe.css';

class Subscribe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '' };
    }

    handleSubscriptionChange(target) {
        this.setState({ [target.name]: target.value })
    }

    handleSubscription() {
        console.log('e.name', this.state.name);
        console.log('e.email', this.state.email);
        event.preventDefault();
    }


    render() {
        return (
            <form className={styles.subscriptionWrapper} onSubmit={this.handleSubscription.bind(this)}>
                <div className={styles.inputWrapper}>
                    <label> Name:
                        <input type="text"
                            name="name"
                            value={this.state.name}
                            autoComplete
                            required
                            onChange={(e) => this.handleSubscriptionChange(e.target)} />
                    </label>

                    <label> Email:
                        <input type="text"
                            name="email"
                            value={this.state.email}
                            autoComplete
                            required
                            onChange={(e) => this.handleSubscriptionChange(e.target)} />
                    </label>
                </div>

                <input type="submit" 
                       className={styles.submitAction}
                       value="Submit" />
            </form>
        )
    }
}

export default Subscribe;