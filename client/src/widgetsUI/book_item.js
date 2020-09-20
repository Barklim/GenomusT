import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = (item) => {

/*    if (item.img_url === 'n/a') {
        item.img_url = 'https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png'
    }*/

    return (
        <Link to={`/books/${item._id}`} className="book_item">

            <div className="formatImg2">
                <img alt='gen-card' src={item.img_url}/>
            </div>
            
            <div>
            <div className="book_header">
                <h2>{item.name}</h2>
            </div>
            <div className="book_items">
                <div className="book_author">{item.author}</div>
               
                <div className="book_bubble">
                    <strong>Пол</strong>  {item.price}
                </div>

                <div className="book_bubble">
                    <strong>Возраст</strong>  {item.pages}
                </div>

                </div>

            </div>
        </Link>
    );
};

/*
                <div className="book_bubble rating">
                    <strong>Рейтинг</strong>☆  {item.rating}
                </div>
*/

export default BookItem;