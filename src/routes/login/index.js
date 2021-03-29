import React, {Component} from 'react';

import './login.scss';
import {Card, Col, Container, Row} from "reactstrap";
import logo from '../../assets/images/placeholder.jpg';
import MaskedInput from "react-text-mask";
import {parsePhoneNumber} from 'libphonenumber-js'
import {connect} from "react-redux";
import {onAuthUser, updateState} from "../../redux/auth/action";

class Login extends Component {
    constructor(props) {
        super(props);
        // state + redux // 0x38Fa
        this.state = {
            fields: {
                phoneNumber: '+998',
                password: '',
                isRemember: false
            },
            errors: {
                hasError: false,
                message: ''
            },
            isDisable: false,
            isLock: false
        }


    }

    inputChange = (value, name) => {
        const {phoneNumber, password} = this.state.fields;
        this.setState(state => {
            const newState = {...state};
            newState.fields[name] = value;
            return newState;
        });
        this.setState({isDisable: true})
        // console.log(this.state);
        // if (phoneNumber.startsWith('+998') && !phoneNumber.includes('_') && phoneNumber.length === 13 && password.length > 1 && parsePhoneNumber(phoneNumber).isValid()){
        //     console.log("true ", phoneNumber);
        //     this.setState({isDisable: false});
        // }else{
        //     this.setState({isDisable: true});
        //     console.log("false ", phoneNumber);
        // }
    }

    onSubmit = () => {
        const {updateState} = this.props
        const {phoneNumber, password, isRemember} = this.state.fields;
        // console.log(this.props.routing)
        if (phoneNumber.startsWith('+998') && !phoneNumber.includes('_') && phoneNumber.length === 13 && password.length > 4 && parsePhoneNumber(phoneNumber).isValid()){
            console.log("true ", phoneNumber);
            // updateState({authUser: this.state.fields});
            updateState({
                authUser: {
                    phoneNumber,
                    password,
                    isRemember,
                }
            });
            console.log("onSubmit");
            this.setState({isDisable: false})
        }else{
            console.log("false ", phoneNumber);
            this.setState({isDisable: true})
        }

    }

    unlock = () => {
        this.setState({
            isLock: !this.state.isLock
        })
    }

    render() {
        const {inputChange, onSubmit, unlock} = this;
        const {phoneNumber, password, isRemember} = this.state.fields;
        const {isDisable} = this.state;
        return (
            <div className="loginPage">
                <Container fluid>
                    <Row>
                        <Col lg={{size: 3, offset: 4}}>
                            <h5>{this.props.auth.authUser.phoneNumber}</h5>
                            <div className="cardCol ml-lg-5">
                                <Card className="loginCard">
                                    <div className="cardHead">
                                        <div>SIGN IN</div>
                                    </div>
                                    <div className="cardLogo">
                                        <img src={logo} className="userAvater" alt=""/>
                                    </div>
                                    <div className="cardForm">
                                        <div className="cardFormInputs">
                                            <div className={`${isDisable ? 'input-group mb-3 input-group-lg face' : 'input-group mb-3 input-group-lg'}`}>
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <b className="icon icon-number-key1"/>
                                                    </span>
                                                </div>
                                                <MaskedInput
                                                    placeholder="+998"
                                                    className="form-control input-username"
                                                    id="login"
                                                    name="phoneNumber"
                                                    value={phoneNumber}
                                                    onChange={(e)=>inputChange(e.target.value, e.target.name)}
                                                    mask={["+", "9", "9", "8", /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                                                />
                                            </div>
                                            <div className={`${isDisable ? 'input-group mb-1 input-group-lg face' : 'input-group mb-1 input-group-lg'}`}>
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <b className={`${this.state.isLock ? 'icon icon-pointer icon-unlock' : 'icon icon-pointer icon-lock'}`} onClick={unlock}/>
                                                    </span>
                                                </div>
                                                <input
                                                    type={`${this.state.isLock ? 'text' : 'password'}`}
                                                    className="form-control input-password"
                                                    placeholder="password"
                                                    name="password"
                                                    value={password}
                                                    onChange={(e)=>inputChange(e.target.value, e.target.name)}
                                                />
                                            </div>
                                            <div className="custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    id="checkbox"
                                                    className="custom-input"
                                                    name="isRemember"
                                                    checked={isRemember}
                                                    onChange={(e)=>inputChange(e.target.checked, e.target.name)}
                                                />
                                                <label
                                                    htmlFor="checkbox"
                                                    className="custom-label"
                                                />
                                                <label htmlFor="checkbox">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="cardFormButton">
                                            <button
                                                type="button"
                                                // disabled={isDisable}
                                                onClick={onSubmit}
                                                className="button"
                                            >Login</button>
                                        </div>
                                    </div>
                                </Card>
                                <div className="card-shadow">
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = {
    updateState,
    onAuthUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);