import React from 'react';

const User = (params) => {
    console.log(params);
    const {location} = params;
    const {state} = location;
    const {data} = state;
    return (
        <div> 
            <h1> {data.name}'s Details </h1>
        <table className="description" cellpadding="4" cellspacing="0">
                <tbody>
                    <tr><td width="20%"> <b>Repo Name</b> </td> <td> { data.name }</td></tr>
                    <tr> <td><b> Repo Description </b></td><td>{ data.description }</td></tr>
                    <tr>   <td><b> Owner Name</b> </td> <td> { data.owner.login }</td></tr>
                    <tr> <td> <b>Owner Avatar </b></td><td>{ data.owner.avatar_url }</td></tr>
                </tbody>
        </table>
        </div>
    );
};

export default User;