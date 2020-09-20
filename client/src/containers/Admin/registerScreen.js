import i18n from "i18next";
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { userRegisterScreen } from '../../actions';

class RegisterScreen extends PureComponent {

    state ={
        name:'',
        lastname:'',
        email:'',
        password:'',
        genId:'',
        role: 1,
        error:''
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

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        console.log(nextProps);
        if(nextProps.user.register.success === false){
            this.setState({
                //error:'Ошибка,попробуйте еще.'
                error: nextProps.user.register.message
            })
        } else {
            this.setState({
                name:'',
                lastname:'',
                email:'',
                password:'',
                //genId:'',
                role: 1,
            })
            // this.setState({
            //     genId: this.state.password
            // })
            // console.log('h!!');
            // console.log(this.state);
            // console.log(this.state.password);
            //console.log(nextProps);
        
            // Вернуть
            //this.props.history.push('/login')
        }
        if(nextProps.user.register.success === true){
            this.setState({
                //error:'Ошибка,попробуйте еще.'
            //error: nextProps.user.register.message
            })
            let alertText = localStorage.getItem('genomusLang') === 'ru' ? 'Вы успешно зарегестрировались! \n Войдите пожалуйста в приложение' : 'You have successfully registered! \n Please enter the application';
            alert(alertText);
            this.props.history.push('/login');
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        this.setState({error:''});

        this.props.dispatch(userRegisterScreen({
            email:this.state.email,
            password:this.state.password,
            name:this.state.name,
            lastname:this.state.lastname,
            //genId:this.state.genId,
            genId:this.state.password,
            role:this.state.role
        },this.props.user.users));
        
    }

    render() {
        //let user = this.props.user;
        // console.log(this.props);
        let emailText = localStorage.getItem('genomusLang') === 'ru' ? 'Введите email' : 'Enter your email';
        let pasText = localStorage.getItem('genomusLang') === 'ru' ? 'Введите genId' : 'Enter your genId';

        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                    <h2>{i18n.t('regPage_p1')}</h2>
                    <h5>{i18n.t('regPage_p2')}</h5>

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
                            type="password"
                            placeholder={pasText}
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                         />
                    </div>

                    <button type="submit">{i18n.t('regPage_p3')}</button>
                    <div className="error">
                        {this.state.error}
                    </div>

                </form>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(RegisterScreen)

                    // <div className="form_element">
                    //     <input
                    //         type="text"
                    //         placeholder="Введите имя"
                    //         value={this.state.name}
                    //         onChange={this.handleInputName}
                    //      />
                    // </div>

                    // <div className="form_element">
                    //     <input
                    //         type="text"
                    //         placeholder="Введите фамилию"
                    //         value={this.state.lastname}
                    //         onChange={this.handleInputLastname}
                    //      />
                    // </div>

                    // <div className="form_element">
                    //     <input
                    //         type="text"
                    //         placeholder="Введите GenId"
                    //         value={this.state.genId}
                    //         onChange={this.handleInputGenId}
                    //      />
                    // </div>

            


                    // <h5>Пароль должен сордержать цифры и буквы!</h5>
                    // <h5>Запишите ваш пароль и email!</h5>