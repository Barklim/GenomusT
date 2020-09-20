import i18n from "i18next";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGen, clearNewGen } from '../../actions'

class AddGen extends Component {

    state = {
        formdata:{
            rule_0:'0',
            rule_1:'0',
            rule_2:'0',
            rule_3:'0',
            rule_4:'0',
            rule_5:'0',
            rule_6:'0',
            rule_7:'0',
            rule_8:'0',
            rule_9:'0',
            rule_10:'0',
            rule_11:'0',
            rule_12:'0',
            rule_13:'0',
            rule_14:'0',
            rule_15:'0',
            rule_16:'0',
            rule_17:'0',
            rule_18:'0',
            rule_19:'0',
            rule_20:'0',
            rule_21:'0',
            rule_22:'0',
            rule_23:'0',
            rule_24:'0',
            rule_25:'0',
            rule_26:'0',
            rule_27:'0',
            rule_28:'0',
            rule_29:'0',
            genId:''
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
    //<Link to={`/gens/${gen.gId}`}>

    showNewGen = (gen) => (
        gen.post ?
            <div className="conf_link">
                {i18n.t('addGenPage_p8')} {this.state.formdata.genId}!! 
            </div>
        :null
    )


    submitForm = (e) => {
        e.preventDefault();
        //console.log(this.state.formdata)
        this.props.dispatch(addGen({
            ...this.state.formdata,
            ownerGenId:this.props.user.login.id
        }))
    }

    componentWillUnmount(){
        this.props.dispatch(clearNewGen())
    }

    render() {
        console.log(this.props);
        if (this.props.user.login.role === 1){
            this.props.history.push('/about')
        }

        return (
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    <h2>{i18n.t('addGenPage_p1')}</h2>

                    <h3>{i18n.t('addGenPage_p2')}</h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter genId"
                            value={this.state.formdata.genId}
                            onChange={(event)=>this.handleInput(event,'genId')}
                        />
                    </div>

                    <h3>{i18n.t('addGenPage_p3')}</h3>

                    <h3>1 : CFTR: 3944delGT  </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_0}
                            onChange={(event)=>this.handleInput(event,'rule_0')}
                        />
                    </div>

                    <h3>2 : CFTR: F508del</h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_1"
                            value={this.state.formdata.rule_1}
                            onChange={(event)=>this.handleInput(event,'rule_1')}
                        />
                    </div>

                    <h3>3 : CFTR: K285N  </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_2"
                            value={this.state.formdata.rule_2}
                            onChange={(event)=>this.handleInput(event,'rule_2')}
                        />
                    </div>

                    <h3>4 : CFTR: N1303K  </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_3"
                            value={this.state.formdata.rule_3}
                            onChange={(event)=>this.handleInput(event,'rule_3')}
                        />
                    </div>

                    <h3>5 : CFTR: 1677delTA   </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_"
                            value={this.state.formdata.rule_4}
                            onChange={(event)=>this.handleInput(event,'rule_4')}
                        />
                    </div>

                    <h3>6 : CFTR: 3849+10kbC>T   </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_5}
                            onChange={(event)=>this.handleInput(event,'rule_5')}
                        />
                    </div>

                    <h3>7 : PAH: IVS10nt546  </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_6}
                            onChange={(event)=>this.handleInput(event,'rule_6')}
                        />
                    </div>

                    <h3>8 : CFTR: W1282X   </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_7}
                            onChange={(event)=>this.handleInput(event,'rule_7')}
                        />
                    </div>

                    <h3>9 : PAH: R261Q   </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_8"
                            value={this.state.formdata.rule_8}
                            onChange={(event)=>this.handleInput(event,'rule_8')}
                        />
                    </div>

                    <h3>10 : CFTR: E92K  </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_9}
                            onChange={(event)=>this.handleInput(event,'rule_9')}
                        />
                    </div>

                    <h3>11 : PAH: E280K  </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_10}
                            onChange={(event)=>this.handleInput(event,'rule_10')}
                        />
                    </div>

                    <h3>12 : PAH: R408W   </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_11}
                            onChange={(event)=>this.handleInput(event,'rule_11')}
                        />
                    </div>

                    <h3>13 : PAH: P281L   </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_12}
                            onChange={(event)=>this.handleInput(event,'rule_12')}
                        />
                    </div>

                    <h3>14 : CFTR: G542X   </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_13}
                            onChange={(event)=>this.handleInput(event,'rule_13')}
                        />
                    </div>

                    <h3>15 : PAH: IVS12+1G>A  </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_14}
                            onChange={(event)=>this.handleInput(event,'rule_14')}
                        />
                    </div>

                    <h3>16 : PAH: Y414C   </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_15}
                            onChange={(event)=>this.handleInput(event,'rule_15')}
                        />
                    </div>

                    <h3>17 : PAH: IVS4+5G>T  </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_16}
                            onChange={(event)=>this.handleInput(event,'rule_16')}
                        />
                    </div>

                    <h3>18 : PAH: R158Q   </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_17}
                            onChange={(event)=>this.handleInput(event,'rule_17')}
                        />
                    </div>

                    <h3>19 : CFTR: 2143delT  </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_18}
                            onChange={(event)=>this.handleInput(event,'rule_18')}
                        />
                    </div>

                    <h3>20 : CFTR: R334W   </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_19}
                            onChange={(event)=>this.handleInput(event,'rule_19')}
                        />
                    </div>

                    <h3>21 : PAH: R252W  </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_20}
                            onChange={(event)=>this.handleInput(event,'rule_20')}
                        />
                    </div>

                    <h3>22 : CFTR: 394delTT   </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_21}
                            onChange={(event)=>this.handleInput(event,'rule_21')}
                        />
                    </div>

                    <h3>23 : CFTR: 2184insA  </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_22}
                            onChange={(event)=>this.handleInput(event,'rule_22')}
                        />
                    </div>

                    <h3>24 : CFTR: 3821delT   </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_23}
                            onChange={(event)=>this.handleInput(event,'rule_23')}
                        />
                    </div>

                    <h3>25 : CFTR: S466X   </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_24}
                            onChange={(event)=>this.handleInput(event,'rule_24')}
                        />
                    </div>

                    <h3>26 : GALT: N314D  </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_25}
                            onChange={(event)=>this.handleInput(event,'rule_25')}
                        />
                    </div>

                    <h3>27 : GJB2: 35delG </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_26}
                            onChange={(event)=>this.handleInput(event,'rule_26')}
                        />
                    </div>

                    <h3>28 : CFTR: dele2,3 (21kb)   </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_27}
                            onChange={(event)=>this.handleInput(event,'rule_27')}
                        />
                    </div>

                    <h3>29 : PAH: D222X  </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_28}
                            onChange={(event)=>this.handleInput(event,'rule_28')}
                        />
                    </div>

                    <h3>30 : GALT: Q188R  </h3>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Введите rule_0"
                            value={this.state.formdata.rule_29}
                            onChange={(event)=>this.handleInput(event,'rule_29')}
                        />
                    </div>

                    <button type="submit">{i18n.t('addGenPage_p4')}</button>

                    {
                        this.props.gens.newgen ? 
                            this.showNewGen(this.props.gens.newgen)
                        :null
                    }

                    <h2>{i18n.t('addGenPage_p5')}</h2>
                    <h5>{i18n.t('addGenPage_p6')}</h5>
                    <h5>{i18n.t('addGenPage_p7')}</h5>
                
                </form>
            </div>
        );
    }
}



function mapStateToProps(state){
    return {
        gens:state.gens
    }
}

export default connect(mapStateToProps)(AddGen)


      /*
                    {
                        this.props.gens.newgen ? 
                            this.showNewGen(this.props.gens.newgen)
                        :null
                    }
    */