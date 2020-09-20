import i18n from "i18next";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserGens } from '../../actions';
import { Link } from 'react-router-dom';

class UserGens extends Component {

    componentWillMount(){
        this.props.dispatch(getUserGens(this.props.user.login.id))
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user.login.role === 1){
            this.props.history.push('/about')
        }
    }

    // renderQr = (value) =>  (//=== true ? false;
    //     value === true ? false
    //     )
    // renderQr = value === true ? true : false
    renderQr = (value) => (
        value ?  "✔" : "✘"
    )

    showUserGens = (user) => (
        user.userGens ? 
            user.userGens.map(item => (
                <tr key={item._id}>
                    <td><Link to={
                        `/user/edit-genom/${item._id}`
                    }>
                        {item.genId}
                    </Link></td>
                    <td>{item.rule_0}</td>
                    <td>{item.rule_1}</td>
                    <td>{item.rule_2}</td>
                    <td>{item.rule_3}</td>
                    <td>{item.rule_4}</td>
                    <td>{item.rule_5}</td>
                    <td>{item.rule_6}</td>
                    <td>{item.rule_7}</td>
                    <td>{item.rule_8}</td>
                    <td>{item.rule_9}</td>
                    <td>{item.rule_10}</td>
                    <td>{item.rule_11}</td>
                    <td>{item.rule_12}</td>
                    <td>{item.rule_13}</td>
                    <td>{item.rule_14}</td>
                    <td>{item.rule_15}</td>
                    <td>{item.rule_16}</td>
                    <td>{item.rule_17}</td>
                    <td>{item.rule_18}</td>
                    <td>{item.rule_19}</td>
                    <td>{item.rule_20}</td>
                    <td>{item.rule_21}</td>
                    <td>{item.rule_22}</td>
                    <td>{item.rule_23}</td>
                    <td>{item.rule_24}</td>
                    <td>{item.rule_25}</td>
                    <td>{item.rule_26}</td>
                    <td>{item.rule_27}</td>
                    <td>{item.rule_28}</td>
                    <td>{item.rule_29}</td>
                    <td>{this.renderQr(item.templateQr)}</td>
                </tr>
            ))
        :null
    )

    render() {
        let user = this.props.user;
        return (
            <div className="user_posts">
                <h4>{i18n.t('userGensPage_p1')}</h4>
                <table>
                    <thead>
                        <tr>
                            <th>GenId</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                            <th>11</th>
                            <th>12</th>
                            <th>13</th>
                            <th>14</th>
                            <th>15</th>
                            <th>16</th>
                            <th>17</th>
                            <th>18</th>
                            <th>19</th>
                            <th>20</th>
                            <th>21</th>
                            <th>22</th>
                            <th>23</th>
                            <th>24</th>
                            <th>25</th>
                            <th>26</th>
                            <th>27</th>
                            <th>28</th>
                            <th>29</th>
                            <th>30</th>
                            <th>Qr</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUserGens(user)}
                    </tbody>
                </table>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserGens)