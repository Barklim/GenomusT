import i18n from "i18next";
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser, updateUser, clearUser, deleteUser } from '../../actions'

class EditGenom extends PureComponent {

    state = {
        formdata:{
            _id:this.props.match.params.id,
            name:'',
            lastname:'',
            genId:''
        }
    }


    handleInput = (event,name) => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = event.target.value

        this.setState({
            formdata:newFormdata
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(updateUser(this.state.formdata))
    }

    deleteUser = () => {
        this.props.dispatch(deleteUser(this.props.match.params.id))
    }
    redirectUser = () => {
        setTimeout(()=>{
            this.props.history.push('/user/register')
        },1000)
    }

    componentWillMount(){
        this.props.dispatch(getUser(this.props.match.params.id))
    }

    componentWillReceiveProps(nextProps){
        //console.log(nextProps);
        //let user = nextProps.users.user;
        let user = nextProps.user.user;
        this.setState({
            formdata:{
                _id:user._id,
                name:user.name,
                lastname:user.lastname,
                genId:user.genId
            }
        })
    }

    componentWillUnmount(){
        this.props.dispatch(clearUser())
    }

    render() {
        console.log(this.props)
        //let users = this.props.users;
        let users = this.props.user;
        return (
            <div className="rl_container article">

             {
                    users.updateUser ? 
                        <div className="edit_confirm">
                            {i18n.t('editUsersPage_p4')} , <Link to={`/user/register`}>
                                {i18n.t('editUsersPage_p5')}
                            </Link>
                        </div>
                    :null
                }
                {
                    users.userDeleted ? 
                        <div className="red_tag">
                            {i18n.t('editUsersPage_p6')}
                            {this.redirectUser()}
                        </div>
                    :null
                }
            
                <form onSubmit={this.submitForm}>
                    <h2>{i18n.t('editUsersPage_p1')}</h2>

                    <p>GenId:</p>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter Genocode"
                            value={this.state.formdata.genId}
                            onChange={(event)=>this.handleInput(event,'genId')}
                        />
                    </div>

                    <button type="submit">{i18n.t('editUsersPage_p2')}</button>

                    <div className="delete_post">
                        <div className="button"
                            onClick={this.deleteUser}
                        >
                            {i18n.t('editUsersPage_p3')}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        users:state.users
    }
}

export default connect(mapStateToProps)(EditGenom)

                    // <p>Имя, фамилия:</p>

                    // <div className="form_element">
                    //     <input
                    //         type="text"
                    //         placeholder="Enter name"
                    //         value={this.state.formdata.name}
                    //         onChange={(event)=>this.handleInput(event,'name')}
                    //     />
                    // </div>

                    // <div className="form_element">
                    //     <input
                    //         type="text"
                    //         placeholder="Enter lastname"
                    //         value={this.state.formdata.lastname}
                    //         onChange={(event)=>this.handleInput(event,'lastname')}
                    //     />
                    // </div>