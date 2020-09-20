import React, { Component } from 'react';
import { getBookWithReviewer, clearBookWithReviewer } from '../../actions';
import { connect } from 'react-redux';

class BookView extends Component {

    componentWillMount(){
        this.props.dispatch(getBookWithReviewer(this.props.match.params.id))
    }

    componentWillUnmount(){
        this.props.dispatch(clearBookWithReviewer())
    }
    
//<div className="br_reviewer">
//<span>Review by:</span> {books.reviewer.name} {books.reviewer.lastname}
//</div>
    renderBook = (books) => (
        books.book ? 
            <div className="br_container">
                <div className="br_header">
                    <h2>{books.book.name}</h2>
                    <h5>{books.book.author}</h5>
                </div>
                <div className="br_review">
                    {books.book.review}
                </div>
                <div className="br_box">
                    <div className="left">
                        <div>
                            <span>Возраст:</span> {books.book.pages}
                        </div>
                        <div>
                            <span>Пол:</span> {books.book.price}
                        </div>
                    </div>
                    <div className="right">
                        
                    </div>
                </div>
            </div>
        :null
    )
    //<span>Рейтинг:</span>
    //<div>{books.book.rating}/10</div>

                    //<div className="br_reviewer">
                    //    <span>Добавил:</span> {books.reviewer.name} {books.reviewer.lastname}
                    //</div>

    render() {
        let books = this.props.books;
        return (
            <div>
                {this.renderBook(books)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BookView)