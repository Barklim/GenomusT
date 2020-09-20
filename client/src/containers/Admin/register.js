import i18n from "i18next";
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUsers, userRegister } from '../../actions';
import { Link } from 'react-router-dom';

class Register extends PureComponent {

    state ={
        name:'',
        lastname:'',
        email:'',
        password:'',
        error:'',
        genId:'',
        role: 1
    }

    componentWillMount(){
        //this.props.dispatch(getUsers())
        this.props.dispatch(getUsers(this.props.user.login.id))
        //console.log(this.props.user.login.id);
    }


    handleInputEmail = (event) => {
        this.setState({email:event.target.value})
    } 
    handleInputPassword= (event) => {
        this.setState({password:event.target.value})
    } 
    handleInputName = (event) => {
        this.setState({name:event.target.value})
    } 
    handleInputLastname = (event) => {
        this.setState({lastname:event.target.value})
    } 
    handleInputGenId = (event) => {
        this.setState({genId:event.target.value})
    } 
    handleInputRole = (event) => {
        this.setState({role:event.target.value})
    } 

    componentWillReceiveProps(nextProps){
        if(nextProps.user.login.role === 1){
            this.props.history.push('/about')
        }

        if(nextProps.user.register === false){
            this.setState({error:'Error,try again'})
        } else{
            this.setState({
                name:'',
                lastname:'',
                email:'',
                password:'',
                genId:'',
                role:1
            })
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        this.setState({error:''});

        this.props.dispatch(userRegister({
            email:this.state.email,
            password:this.state.password,
            name:this.state.name,
            lastname:this.state.lastname,
            //genId:this.state.genId,
            genId:this.state.password,
            role:this.state.role
        },this.props.user.users))
        
    }

    showUsers = (user) =>(
        user.users ? 
            user.users.map(item => (
                <tr key={item._id}>
                    <td>{item.email}</td>
                    <td><Link to={
                        `/user/edit-user/${item._id}`}>
                        {item.genId}
                        </Link>
                    </td>
                    <td>{item.role}</td>
                </tr>
            ))
        :null
    )


    render() {
        let user = this.props.user;
        let emailText = localStorage.getItem('genomusLang') === 'ru' ? 'Ввести Email' : 'Enter email';
        let pasText = localStorage.getItem('genomusLang') === 'ru' ? 'Ввести genId' : 'Enter genId';
        let roleText = localStorage.getItem('genomusLang') === 'ru' ? 'Ввести Role' : 'Enter role';

        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                    <h2>{i18n.t('addUserPage_p1')}</h2>

                    <div className="form_element">
                        <input
                            type="email"
                            placeholder={emailText}
                            value={this.state.email}
                            onChange={this.handleInputEmail}
                         />
                    </div>

                    <div className="form_element">
                        <input
                            type="string"
                            placeholder={pasText}
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                         />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder={roleText}
                            value={this.state.role}
                            onChange={this.handleInputRole}
                         />
                    </div>

                    <button type="submit">{i18n.t('addUserPage_p2')}</button>
                    <div className="error">
                        {this.state.error}
                    </div>

                </form>
                <div className="current_users">
                    <h4>{i18n.t('addUserPage_p3')}</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>genId</th>
                                <th>role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showUsers(user)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(Register)


                    // <div className="form_element">
                    //     <input
                    //         type="text"
                    //         placeholder="Ввести имя"
                    //         value={this.state.name}
                    //         onChange={this.handleInputName}
                    //      />
                    // </div>

                    // <div className="form_element">
                    //     <input
                    //         type="text"
                    //         placeholder="Ввести фамилию"
                    //         value={this.state.lastname}
                    //         onChange={this.handleInputLastname}
                    //      />
                    // </div>

                    // <td>{item.name}</td>
                    // <td>{item.lastname}</td>

                                // <th>Name</th>
                                // <th>Lastname</th>


                    // <div className="form_element">
                    //     <input
                    //         type="string"
                    //         placeholder="Ввести genId"
                    //         value={this.state.genId}
                    //         onChange={this.handleInputGenId}
                    //      />
                    // </div>