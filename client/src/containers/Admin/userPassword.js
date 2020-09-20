import i18n from "i18next";
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { userChangePassword } from '../../actions';
import axios from 'axios';

class UserPassword extends PureComponent {

    state ={
        //_id:this.props.match.params.id,
        _id:this.props.user.login.id,
        name:'',
        lastname:'',
        email:this.props.user.login.email,
        password:'',
        newPassword:'',
        doublePassword:'',
        genId:this.props.user.login.genId,
        role: 1,
        error:'',
        token: ''
    }

        // возвращает куки с указанным name,
        // или undefined, если ничего не найдено
        //function getCookie(name) {
        //submitForm = (e) =>

    // handleInputEmail = (event) => {
    //     this.setState({email:event.target.value})
    // } 
    handleInputPassword= (event) => {
        this.setState({password:event.target.value})
    } 
    handleInputNewPassword= (event) => {
        this.setState({newPassword:event.target.value})
    } 
    handleInputDoublePassword= (event) => {
        this.setState({doublePassword:event.target.value})
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
                newPassword:'',
                doublePassword:'',
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
            alert('Вы успешно изменили пароль!');

                let request = axios.get(`/api/logout`)
                .then(request =>{
                    setTimeout(()=>{
                        this.props.history.push('/')
                    },100)
                })
             console.log(request);

            this.props.history.push('/login')
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        this.setState({error:''});
        console.log('TEST')
        console.log(this.props)
        console.log(this.state)

        this.getCookie = (name) => {
          let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
          ));
          return matches ? decodeURIComponent(matches[1]) : undefined;
        }
        var currentToken = this.getCookie('auth');

        this.props.dispatch(userChangePassword({
            _id:this.state._id,

            email:this.state.email,
            password:this.state.password,
            newPassword:this.state.newPassword,
            doublePassword:this.state.doublePassword,
            genId:this.state.genId,
            token:currentToken
            //genId:this.state.password,
        },this.props.user.users));
        
    }

    render() {
        //let user = this.props.user;
        // console.log(this.props);
        let oldPasText = localStorage.getItem('genomusLang') === 'ru' ? 'Старый пароль' : 'Old Password';
        let newPasText = localStorage.getItem('genomusLang') === 'ru' ? 'Новый пароль' : 'New password';
        let confirmText = localStorage.getItem('genomusLang') === 'ru' ? 'Повторите пароль' : 'Confirm password';

        return (
            <div className="rl_container">
                <form onSubmit={this.submitForm}>
                    <h2>{i18n.t('changePasPage_p1')}</h2>

                    <div className="form_element">
                        <input
                            type="password"
                            placeholder={oldPasText}
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                         />
                    </div>

                    <div className="form_element">
                        <input
                            type="password"
                            placeholder={newPasText}
                            value={this.state.newPassword}
                            onChange={this.handleInputNewPassword}
                         />
                    </div>

                    <div className="form_element">
                        <input
                            type="password"
                            placeholder={confirmText}
                            value={this.state.doublePassword}
                            onChange={this.handleInputDoublePassword}
                         />
                    </div>

                    <button type="submit">{i18n.t('changePasPage_p2')}</button>
                    <div className="error">
                        {this.state.error}
                    </div>

                    <h5>{i18n.t('changePasPage_p3')}</h5>
                    <h5>{i18n.t('changePasPage_p4')}</h5>
                    <h5>{i18n.t('changePasPage_p5')}</h5>

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

export default connect(mapStateToProps)(UserPassword)

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