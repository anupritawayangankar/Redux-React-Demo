import React from 'react'
import { connect } from 'react-redux'

class UserList extends React.Component{

    render() {
        return(
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>UserName</th>
                </tr>
                </thead>
                <tbody>
                {this.props.users.map((user, index) => {
                    return (
                        <tr key={user.ID}>
                            <td>{user.ID}</td>
                            <td>{user.UserName}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return({
        users : state.users,
    });
}

export default connect(mapStateToProps)(UserList);