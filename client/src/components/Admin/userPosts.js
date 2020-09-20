import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { getUserPosts } from '../../actions';
import { getAllUserPosts } from '../../actions';
import moment from 'moment';
import { Link } from 'react-router-dom';


class UserPosts extends Component {

    componentWillMount(){
        this.props.dispatch(getAllUserPosts(this.props.user.login.id));
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user.login.role === 1){
            this.props.history.push('/about')
        }
    }

    showUserPosts = (user) => (
        user.userPosts ? 
                        
            user.userPosts.map(item => (
                <tr key={item._id}>
                    <td>
                        {item.genId}
                    </td>
                    <td><Link to={
                        `/user/edit-post-admin/${item._id}`
                    }>
                        {item.name}
                    </Link></td>
                    <td>{item.author}</td>
                </tr>
            ))
        :null
    )
//{moment(item.createAt).format("DD/MM/YY")}

    render() {
        //console.log(this.props);
        //console.log(this.props.user.userGens);
        let user = this.props.user;
        
        return (
            <div className="user_posts">
                <h4>Все анкеты:</h4>
                <table>
                    <thead>
                        <tr>
                            <th>GenId</th>
                            <th>Name</th>
                            <th>University</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUserPosts(user)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserPosts)

// <th>Date</th>

                    // <td>
                    //     {moment(item.createAt).format("DD/MM/YY")}
                    // </td>