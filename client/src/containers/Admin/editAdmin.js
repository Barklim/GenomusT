import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBook, updateBook, clearBook, deleteBook } from '../../actions'

class EditBook extends PureComponent {

    state = {
        formdata:{
            _id:this.props.match.params.id,
            name:'',
            author:'',
            review:'',
            pages:'',
            //rating:'',
            price:''
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
        this.props.dispatch(updateBook(this.state.formdata))
    }

    deletePost = () => {
        this.props.dispatch(deleteBook(this.props.match.params.id))
    }
    redirectUser = () => {
        setTimeout(()=>{
            this.props.history.push('/')
        },1000)
    }


    componentWillMount(){
        this.props.dispatch(getBook(this.props.match.params.id))
    }

    componentWillReceiveProps(nextProps){
        let book = nextProps.books.book;
        this.setState({
            formdata:{
                _id:book._id,
                name:book.name,
                author:book.author,
                review:book.review,
                pages:book.pages,
                //rating:book.rating,
                price:book.price
            }
        })
    }

    componentWillUnmount(){
        this.props.dispatch(clearBook())
    }

    render() {
        let books = this.props.books;
        console.log(this.props);
        return (
            <div className="rl_container article">
                {
                    books.updateBook ? 
                        <div className="edit_confirm">
                            анкета обновлена , <Link to={`/books/${books.book._id}`}>
                                Кликните сюда чтобы посмотреть анкету
                            </Link>
                        </div>
                    :null
                }
                {
                    books.postDeleted ? 
                        <div className="red_tag">
                            Пост Удалён
                            {this.redirectUser()}
                        </div>
                    :null
                }

                <form onSubmit={this.submitForm}>
                    <h2>Редактировать</h2>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите имя"
                            value={this.state.formdata.name}
                            onChange={(event)=>this.handleInput(event,'name')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите университет"
                            value={this.state.formdata.author}
                            onChange={(event)=>this.handleInput(event,'author')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Введите возраст"
                            value={this.state.formdata.pages}
                            onChange={(event)=>this.handleInput(event,'pages')}
                        />
                    </div>

                    <div className="form_element">
                        <select
                            className="select_box"
                            value={this.state.formdata.price}
                            onChange={(event)=>this.handleInput(event,'price')}
                        >   
                            <option val='Муж'>Муж</option>
                            <option val='Жен'>Жен</option>
                            <option val='Неизвестно'>Неизвестно</option>
                        </select>
                    </div>
                    
                    <p>Информация о вас:</p>
                    <textarea
                        value={this.state.formdata.review}
                        onChange={(event)=>this.handleInput(event,'review')}
                    />

                    <button type="submit">Принять</button>
                    <div className="delete_post">
                        <div className="button"
                            onClick={this.deletePost}
                        >
                            Удалить
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
/*

                    <div className="form_element">
                        <select
                            value={this.state.formdata.rating}
                            onChange={(event)=>this.handleInput(event,'rating')}
                        >
                            <option val="1">5</option>
                            <option val="2">6</option>
                            <option val="3">7</option>
                            <option val="4">8</option>
                            <option val="5">9</option>
                            <option val="5">10</option>
                        </select>
                    </div>

*/

function mapStateToProps(state){
    return {
        books:state.books
    }
}

export default connect(mapStateToProps)(EditBook)