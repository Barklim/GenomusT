import i18n from "i18next";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBook, clearNewBook } from '../../actions'

class AddBook extends Component {

    state = {
        formdata:{
            name:'name',
            author:'author',
            review:'review',
            pages: 25,
            //rating:9,
            price:'Муж',
            allowCheck: false,
            allowCompat: false,
            allowShow: false,
            img_url: 'https://robohash.org/set_set1/bgset_bg1/${this.props.user.login.id}?200x200?3'
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user.login.role === 1){
            this.props.history.push('/about')
        }
    }

    handleInput = (event,name) => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = event.target.value

/*        if ( this.state.allowCheck === true && name === 'allowCheck' ) {
            newFormdata[name] = false
        } else {
            newFormdata[name] = true
        }*/

        if ( name === 'allowCheck' ) {
            if ( this.state.formdata.allowCheck === true ) {
                 newFormdata[name] = false
            } else {
                newFormdata[name] = true
            }
        } 

        if ( name === 'allowCompat' ) {
            if ( this.state.formdata.allowCompat === true ) {
                 newFormdata[name] = false
            } else {
                newFormdata[name] = true
            }
        } 

        if ( name === 'allowShow' ) {
            if ( this.state.formdata.allowShow === true ) {
                 newFormdata[name] = false
            } else {
                newFormdata[name] = true
            }
        } 

        this.setState({
            formdata:newFormdata
        })

    }

    showNewBook = (book) => (
        book.post ?
            <div className="conf_link">
                Вы создали анкету !!! <Link to={`/books/${book.bookId}`}>
                    Нажмите на ссылку, чтобы ее посмотреть
                </Link>
            </div>
        :null
    )


    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(addBook({
            ...this.state.formdata,
            ownerId:this.props.user.login.id,
            genId:this.props.user.login.genId
        }))
    }

    handleClick = (props) => {
        let messageAllowCheck;
        let messageAllowCheckRu = this.state.formdata.allowCheck ? 'Вы разрешили проверять совместимость' : 'Вы запретили проверять совместимость!';
        let messageAllowCheckEn = this.state.formdata.allowCheck ? 'You are allowed to check compatibility' : 'You have forbidden to check compatibility!';
        messageAllowCheck = localStorage.getItem('genomusLang') === 'ru' ? messageAllowCheckRu : messageAllowCheckEn;

        let doMessage = function () {
            alert(messageAllowCheck);
            props.history.push('/user/compat');
        };
        setTimeout(doMessage, 500);
    }

    componentWillUnmount(){
        this.props.dispatch(clearNewBook())
    }

    render() {
        console.log(this.state);
        console.log(this.newFormdata);
        return (
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    <h2>{i18n.t('settingsPage_p1')}</h2>
                    
                    <div className="profile_table">
                    <table>
                        <thead>
                            <tr>
                                <td>{i18n.t('settingsPage_p2')}</td>
                                <th>
                                    <div>
                                        <input
                                            className="profile_checkbox"
                                            type="checkbox"
                                            checked={this.state.allowCompat}
                                            onChange={(event)=>this.handleInput(event,'allowCompat')}
                                        />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </table>
                    </div>

                    <button onClick={this.handleClick.bind(null, this.props)} type="submit">{i18n.t('settingsPage_p3')}</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        books:state.books
    }
}

export default connect(mapStateToProps)(AddBook)

                    // {
                    //     this.props.books.newbook ? 
                    //         this.showNewBook(this.props.books.newbook)
                    //     :null
                    // }

                    // <div className="form_element">
                    //     <input
                    //         type="text"
                    //         placeholder="Введите имя"
                    //         value={this.state.formdata.name}
                    //         onChange={(event)=>this.handleInput(event,'name')}
                    //     />
                    // </div>


                    // <div className="form_element">
                    //     <input
                    //         type="text"
                    //         placeholder="Введите университет"
                    //         value={this.state.formdata.author}
                    //         onChange={(event)=>this.handleInput(event,'author')}
                    //     />
                    // </div>

                    // <div className="form_element">
                    //     <input
                    //         type="number"
                    //         placeholder="Введите возраст"
                    //         value={this.state.formdata.pages}
                    //         onChange={(event)=>this.handleInput(event,'pages')}
                    //     />
                    // </div>

                    // <div className="form_element">
                    //     <select
                    //         className="select_box"
                    //         value={this.state.formdata.price}
                    //         onChange={(event)=>this.handleInput(event,'price')}
                    //     >   
                    //         <option val='Муж'>Муж</option>
                    //         <option val='Жен'>Жен</option>
                    //         <option val='Неизвестно'>Неизвестно</option>
                    //     </select>
                    // </div>


                    //     <tbody>
                    //         <tr>
                    //             <td>Отображать мою анкету для всех, в общем списке</td>
                    //             <td>
                    //                 <div>
                    //                     <input
                    //                         className="profile_checkbox"
                    //                         type="checkbox"
                    //                         checked={this.state.formdata.allowCompat}
                    //                         onChange={(event)=>this.handleInput(event,'allowCompat')}
                    //                     />
                    //                 </div>                        
                    //             </td>
                    //         </tr>
                    //     </tbody>
                    //     <tbody>
                    //         <tr>
                    //             <td>Отображать мою анкету при проверке совместимости</td>
                    //             <td>
                    //                 <div>
                    //                     <input
                    //                         className="profile_checkbox"
                    //                         type="checkbox"
                    //                         checked={this.state.formdata.allowShow}
                    //                         onChange={(event)=>this.handleInput(event,'allowShow')}
                    //                     />
                    //                 </div>                        
                    //             </td>
                    //         </tr>
                    //     </tbody>


                    // <p>Адрес картинки:</p>
                    // <div className="form_element">
                    //     <input
                    //         type="text"
                    //         placeholder="Введите url ..."
                    //         value={this.state.formdata.img_url}
                    //         onChange={(event)=>this.handleInput(event,'img_url')}
                    //     />
                    // </div>

                    // <p>Информация о вас:</p>
                    // <textarea
                    //     value={this.state.formdata.review}
                    //     onChange={(event)=>this.handleInput(event,'review')}
                    // />