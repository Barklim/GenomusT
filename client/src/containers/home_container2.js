import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { getBooks } from '../actions';

//import BookItem from '../widgetsUI/book_item';

class HomeContainer extends Component {
    render() {
    
        return (
            <div className="rl_container">
                <div className="format_about">
                    <h2>Информация о нас</h2>
                    <h4>Мы в социальных сетях: <a href="https://vk.com/genomusApp">https://vk.com/genomusApp</a></h4>
                    <h4>Обратная связь: example@gmail.com</h4>
                    <h4>Выкладывая свою анкету, её автоматически будут видить все люди</h4>
                    <h4>Здесь можно будет скачать файл apk. для Android  </h4>
                    <h2>F.A.Q.</h2>
                    <p>Что это?</p> 
                    <p>Веб-приложение для "мониторинга" здоровья</p> 
                    <p>Как пользоваться?</p> 
                    <p>Зарегиструйтесь и залогинтись</p> 
                    <p>Как рассчитывается рейтинг?</p> 
                    <p>Вручную администратором. Оценка зависит от "полноты" данных анкеты</p>
                </div>
            </div>
        );
    }
}

function mapStateProps(state) {
    return {
        user:state.user
    }
}

export default connect(mapStateProps)(HomeContainer)