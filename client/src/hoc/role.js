import React,{ Component } from 'react';
import { auth } from '../actions'
import {connect} from 'react-redux';

export default function(ComposedClass,reload){
    // console.log('warmimR0le!')
    class RoleCheck extends Component {

        state = {
            loading:true
        }

        componentWillMount(){
            this.props.dispatch(auth())
            console.log('warmimR0le!')
        }

        componentWillReceiveProps(nextProps){
            this.setState({loading:false})

            if(!nextProps.user.login.isAuth){
                if(reload){
                    this.props.history.push('/login');
                }
            } else {
                if(reload === false) {
                    this.props.history.push('/user')
                }
            }
        }

        render(){
            if(this.state.loading){
                return <div className="loader">Загрузка...</div>
            }
            return(
                <ComposedClass {...this.props} user={this.props.user}/>
            )
        }
    }

    function mapStateToProps(state){
        return{
            user:state.user
        }
    }
    return connect(mapStateToProps)(RoleCheck)

}