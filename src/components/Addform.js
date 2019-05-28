import React from 'react';

class Addform extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: ""
    };

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = () => {
        console.log(this.state);
        debugger;
    };

    render() {
        return(
                <div className="add-form">
                    <form>
                        <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={ e => this.change(e) } /><br />
                        <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={ e => this.change(e) } /><br />
                        <input type="text" name="userName" placeholder="Username" value={this.state.userName} onChange={ e => this.change(e) } /><br />
                        <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={ e => this.change(e) } /><br />
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={ e => this.change(e) } /><br />
                        <button onClick={ () => this.onSubmit() }>Submit</button><br />
                    </form>
                </div>
        )
    }

}

export default Addform;
