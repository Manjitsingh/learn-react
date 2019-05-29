import React from 'react';

class Addform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Add Form',
            datas: [],
        };
    }

    componentDidMount() {
        this.refs.firstName.focus();
    }

    // change = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        let datas = this.state.datas;
        let firstName = this.refs.firstName.value;
        let lastName = this.refs.lastName.value;
        let userName = this.refs.userName.value;
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        let data = {
            firstName, lastName, password, userName, email
        };
        datas.push(data);

        this.setState({
            datas: datas
        });

        this.refs.addForm.reset();
        this.refs.firstName.focus();
    };

    render() {
        let datas = this.state.datas;
        return(
                <div className="add-form">
                    <form ref="addForm">
                        <input type="text" ref="firstName" placeholder="First Name" value={this.state.firstName} /><br />
                        <input type="text" ref="lastName" placeholder="Last Name" value={this.state.lastName} /><br />
                        <input type="text" ref="userName" placeholder="Username" value={this.state.userName} /><br />
                        <input type="email" ref="email" placeholder="Email" value={this.state.email} /><br />
                        <input type="password" ref="password" placeholder="Password" value={this.state.password} /><br />
                        <button onClick={ (e) => this.onSubmit(e) }>Submit</button><br />
                    </form>
                    <pre>
                        { datas.map((data, i) =>
                            <li key={i} className="submittedValues">
                                {i+1} . {data.firstName}, {data.lastName},{data.userName},{data.email},{data.password},
                            </li>
                        )}
                    </pre>
                </div>
        )
    }
}

export default Addform;
