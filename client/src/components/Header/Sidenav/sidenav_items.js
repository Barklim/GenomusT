import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

const SidenavItems = ({user}) => {

//componentWillMount() {
//    this.props.dispatch(getUserRoleTest(${user}))
//}

/*
let response = axios.get(`/api/getUser?id=5bdff2418f4ec721b41264e0`)
            .then(response =>{
                //sconsole.log(user.login.id);
                response.data.role
            })
*/
//var testOfUndef = user.login.id;
//console.log(user.login);
//console.log(this.props.user);

    const t = {
        ru: {
            home: 'Домой',
            profile: 'Анкета',
            comp: 'Совместимость',
            users: 'Пользователи',
            login: 'Войти',
            reg: 'Регистрация',
            gens: 'Гены',
            mutation: 'Добавить мутацию',
            logout: 'Выйти',
            about: 'О проекте'
        },
        en: {
            home: 'Home',
            profile: 'Profile',
            comp: 'Compatibility',
            users: 'Users',
            login: 'Login',
            reg: 'Registration',
            gens: 'Gens',
            mutation: 'Add mutation',
            logout: 'Logout',
            about: 'About'
        }
    };

    let homeText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.home : t.en.home;
    let profileText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.profile : t.en.profile;
    let compText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.comp : t.en.comp;
    let usersText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.users : t.en.users;
    let loginText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.login : t.en.login;
    let regText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.reg : t.en.reg;
    let gensText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.gens : t.en.gens;
    let mutationText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.mutation : t.en.mutation;
    let logoutText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.logout : t.en.logout;
    let aboutText = localStorage.getItem('genomusLang') === 'ru' ? t.ru.about : t.en.about;
        
    const items = [
        {
            type:'navItem',
            icon:'home',
            text:homeText,
            link:'/',
            restricted:false
        },
        {
            type:'navItem',
            icon:'user-circle',
            text:profileText,
            link:'/user/user',
            restricted:true
        },
        {
            type:'navItem',
            icon:'venus-mars',
            text:compText,
            link:'/user/compat',
            restricted:true
        },
        {
            type:'navItem',
            icon:'address-card',
            text:usersText,
            link:'/user/register',
            restricted:true,
            exclude_for_user: true
        },
        {
            type:'navItem',
            icon:'angle-right',
            text:loginText,
            link:'/login',
            restricted:false,
            exclude:true,
            exclude_for_user: true
        },
        {
            type:'navItem',
            icon:'envelope-open',
            text:regText,
            link:'/user/registerScreen',
            restricted:false,
            exclude:true,
            exclude_for_user: true
        },
        // {
        //     type:'navItem',
        //     icon:'copy',
        //     text:'Анкеты',
        //     link:'/user/user-reviews',
        //     restricted:true,
        //     exclude_for_user: true
        // },
        {
            type:'navItem',
            icon:'edit',
            text:gensText,
            link:'/user/user-gens',
            restricted:true,
            exclude_for_user: true
        },
        // {
        //     type:'navItem',
        //     icon:'plus-circle',
        //     text:'Добавить анкету',
        //     link:'/user/add',
        //     restricted:true,
        //     exclude_for_user: true
        // },
        {
            type:'navItem',
            icon:'plus-circle',
            text:mutationText,
            link:'/gen/add',
            restricted:true,
            exclude_for_user: true
        },
        {
            type:'navItem',
            icon:'share-square',
            text:logoutText,
            link:'/user/logout',
            restricted:true,
        },
        {
            type:'navItem',
            icon:'question-circle',
            text:aboutText,
            link:'/about',
            restricted:false,
        }
    ]

    const element = (item,i) => (
        <div key={i} className={item.type}>
            <NavLink to={item.link}>
                <FontAwesome name={item.icon}/>
                {item.text}
            </NavLink>
        </div>
    )

/*
    const showItems = () => (
        user.login ?
            items.map((item,i)=>{
                if(user.login.isAuth) {
                    return !item.exclude ?
                        element(item,i)
                    :null
                } else { 
                    return !item.restricted ?
                        element(item,i)
                    :null
                }
            })
        :null
    )
    */
    const showItems = () => (
        user.login ?
            items.map((item,i)=>{
                if(user.login.isAuth) {
                    //console.log(user.login.role);
                    if (user.login.role === 0) {
                        return !item.exclude ?
                            element(item,i)
                        :null
                    } else { 
                        return !item.exclude_for_user ?
                            element(item,i)
                        :null
                    }
                } else { 
                    return !item.restricted ?
                        element(item,i)
                    :null
                } 
            })
        :null
    )
    return (
        <div>
            {showItems()}
        </div>
    );
};

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(SidenavItems)

