import i18n from "i18next";
import React from 'react';
import axios from 'axios';

const Logout = (props) => {

    let request = axios.get(`/api/logout`)
                .then(request =>{
                    setTimeout(()=>{
                        props.history.push('/')
                    },2000)
                })
    console.log(request);

    return (
        <div className="logout_container">
            <h1>
                {i18n.t('logoutPage')}
            </h1>
        </div>
    );
};

export default Logout;