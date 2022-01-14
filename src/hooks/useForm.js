import React, { useState } from 'react';
// write your custom hook here to control your checkout form
class UseForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showSuccessMessage: false,
            values: {},
        }
    }
    componentDidMount() {
        this.setState({
            ...this.state,
            values: this.props.initialValue
        })
    }

    handleChanges = (e) => {
        this.setState(prevState => ({
            ...this.state,
            values: {
                ...prevState.values,
                [e.target.name]: e.target.value
            }
        }))
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.state.setState({
            ...this.state,
            showSuccessMessage: true
        })
        
    };
    render() {
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                <h2>Checkout Form</h2>
                <label>
                    First Name:
                    <input
                    name="firstName"
                    value={this.state.values.firstName}
                    onChange={this.handleChanges}
                />
                </label>
                <label>
                    Last Name:
                    <input
                    name="lastName"
                    value={this.state.values.lastName}
                    onChange={this.handleChanges}
                />
                </label>
                <label>
                    Address:
                    <input
                    name="address"
                    value={this.state.values.address}
                    onChange={this.handleChanges}
                />
                </label>
                <label>
                    City:
                    <input
                    name="city"
                    value={this.state.values.city}
                    onChange={this.handleChanges} />
                </label>
                <label>
                    State:
                    <input
                    name="state"
                    value={this.state.values.state}
                    onChange={this.handleChanges} />
                </label>
                <label>
                    Zip:
                    <input
                    name="zip"
                    value={this.state.values.zip}
                    onChange={this.handleChanges} />
                </label>
                <button>Checkout</button>
                </form>

                {this.state.showSuccessMessage && (
                <div className="success-message" data-testid="successMessage">
                    <p>
                    You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
                    </p>
                    <p>Your new green friends will be shipped to:</p>
                    <br />
                    <br />
                    <p>
                    {this.state.values.firstName} {this.state.values.lastName}
                    </p>
                    <p>{this.state.values.address}</p>
                    <p>
                    {this.state.values.city}, {this.state.values.state} {this.state.values.zip}
                    </p>
                </div>
                )}
            </>
        )
    }
}
export default UseForm;