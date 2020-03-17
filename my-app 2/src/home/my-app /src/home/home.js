import React, { Component } from 'react';
import { BrowserRouter as BR, Link } from 'react-router-dom';
import Loading_icon from '../image/Loading_icon.gif';

class Home  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch("https://api.github.com/repositories").then(res => res.json())
            .then(
                    (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    componentWillMount() {
        console.log('componentWillMount');
    };
    render(){
    const { error, isLoaded, items } = this.state;
    console.log('::::::::::::::::items',items);
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return (<div><img src={Loading_icon}/></div>);
    } else {
        return (
            <div>
                <h1> User's List </h1>
                <table cellpadding="6" cellspacing="0">
                    <thead>
                        <tr>
                            <th className="header"> Name </th>
                            <th className="header"> Link to details </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map( (eachObj) => {
                                return (
                                    <tr key={eachObj.id}>
                                        <td>{eachObj.name} </td>
                                        <td><Link to={ { pathname : eachObj.name, state:{data:eachObj} } }> {eachObj.name} </Link></td>
                                    </tr>
                                );
                            } )
                            }
                    </tbody>
                </table>
            </div>
        );
    }
    }
}

export default Home;