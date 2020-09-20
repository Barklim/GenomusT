import i18n from "i18next";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserPosts } from '../../actions';

class User extends Component {

    state = {
        visible: false, 
        img_url: 'https://robohash.org/set_set1/bgset_bg1/${this.props.user.login.id}?200x200?3`'
    }

    componentDidMount(){
        this.props.dispatch(getUserPosts(this.props.user.login.id));
    }

    componentDidUpdate(){
    }

    componentWillReceiveProps(nextProps){

        if ( nextProps.user.userPosts === undefined ) {
            this.setState({visible: true}); 
            this.setState({
                img_url: 'https://robohash.org/set_set1/bgset_bg1/${this.props.user.login.id}?200x200?3`'
            })
        }  else {
            this.setState({visible: false});  

            if (nextProps.user.userPosts.length === 0) {
                console.log('donothing'); 
                this.setState({visible: true}); 
            } else {

            this.setState({
                    img_url: nextProps.user.userPosts[0].img_url
                })

        }

/*            fetch(nextProps.user.userPosts[0].img_url).then(function(response) {
                if(response.ok) {
                    console.log('Fack Yeah!');
                  } 
                  throw new Error('Network response was not ok.');
                }).catch(function(error) {
                  console.log('There has been a problem with your fetch operation: ' + error.message);
                });*/
                // https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscap.jpg
        }

    }

    showUserConfig = (user) => (
        user.userPosts ? 
            
            user.userPosts.map(item => (
                <div key={item._id}>
                    <Link to={
                        `/user/edit-post/${item._id}`
                    }>
                    <button type="submit">
                        {i18n.t('userUserPage_p1')}
                    </button>

                    </Link>
                </div>
            ))
        :null
    )

    showUserAdd = () => (
        this.state.visible ? 
            
                <Link to={`/user/add`}>        
                    <div className={this.state.visible}>
                        <button type="submit">{i18n.t('userUserPage_p1')}</button>
                    </div>
                </Link>
        :null
    )


    render() {
        let user = this.props.user;
        let user2 = this.props.user.login;
        
        console.log(this.props);
        console.log(this.state);
        console.log(this.state);
        /*console.log(this.state);*/
/*       
        console.log(this.props.user.userPosts);
        console.log(this.state);
        console.log(user.userPosts === true );*/

    return (
        <div className="user_container">
            <div className="nfo">
                <div className="formattext">
                    <div><span>Email:</span> {user2.email}</div>
                    <div><span>GenId:</span> {user2.genId}</div>
                </div>
                    <div className="rl_container article">

                <Link to={`/user/profile`}>
                    <div>
                    <button type="submit">{i18n.t('userUserPage_p2')}</button>
                    </div>
                </Link>

                {this.showUserAdd()}

                {this.showUserConfig(user)}

                <Link to={`/user/userPassword`}>
                    <button type="submit">{i18n.t('userUserPage_p3')}</button>
                </Link>
    
                </div>
            </div>
        </div>
    );
};
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(User)

                    // <div className="formatImg">
                    //     <img alt='gen-profile' src={this.state.img_url} />
                    // </div>
                    // <div><span>Name:</span> {user2.name}</div>
                    // <div><span>Lastname:</span> {user2.lastname}</div>

// {this.showUserConfig(user)}