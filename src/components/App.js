import React from 'react';
/*import UserList from './UserList';*/
import { connect } from 'react-redux'
import { Table, Button, Glyphicon , Link , Pagination } from "react-bootstrap"

/*export default class App extends React.Component {*/

class App extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <div className="page-wrapper">
                    <div className="row">
                        <div className="panel panel-default margin-top-15">
                            <div className="panel-heading">
                                <div className="panel-body no-padding">
                                    <div className="pull-left">
                                        <h3 className="no-margin padding-top-5">User List</h3>
                                    </div>
                                    <div className="pull-right">
                                        <Button
                                            bsStyle="primary"
                                            bsSize="large"
                                            onClick={this.open}>
                                            Create
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body">
                                <Table width="100%"
                                       className="table table-striped table-bordered table-hover dataTable no-footer dtr-inline">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>UserName</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.props.users.map((user, index) => {
                                        return (
                                            <tr key={user.ID}>
                                                <td>{user.ID}</td>
                                                <td>{user.UserName}</td>
                                                <td><Button bsSize="xsmall" data-id={user.ID}>Delete <Glyphicon
                                                    glyph="remove-circle"/></Button></td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({
        users: state.users,
    });
}

export default connect(mapStateToProps)(App);