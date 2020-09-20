import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="footer__sub1">
                    <Link to="/" className="footer__sub1__text">
                        Главная 
                    </Link>
                    <div>
                        Контакты
                        <a href="https://github.com/Barklim">
                        <FontAwesome name="vk"
                            style={{
                                color:'#69DAEA',
                                padding:'4px',
                                cursor:'pointer'
                            }}
                        /> 
                        </a>
                    </div>
                    <Link to="/about" className="footer__sub1__text">
                        O нас 
                    </Link>
                </div>

                <div className="footer__sub2">
                    <div>
                        Tел: (499) 973-30-76
                    </div>
                    <div>
                        Разработка
                        <a href="https://github.com/Barklim">
                        <FontAwesome name="github"
                            style={{
                                color:'#69DAEA',
                                padding:'4px',
                                cursor:'pointer'
                            }}
                        /> 
                        </a>
                    </div>
                    <div>
                        © 2018 - 2019 "Genomus"
                    </div>
                </div>
       
            </footer>
        );
    }
}

export default Footer;