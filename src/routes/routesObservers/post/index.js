import React, {Component} from 'react';
import Modal from './components/Modal'
import {FileUpload} from "../../../components/CustomComponents";
import ApiRequest from "../../../services";
import {message, Popover} from "antd";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            file:null,
            file1:null,
            file2:null,
            file3:null,
            file4:null,
            file5:null,
            file6:null,
            file7:null,
            file8:null,
        }
    }

    onCancel = () => {
        console.log("Cancel - Cancel")
        this.setState({modalVisible: false})
    };

    selectRukn = () =>{
        console.log("selectRukn");
        this.setState({modalVisible:true})
    }

    onChangeFile1 = (file) => {

        console.log("file - ", file);

        // const {file} = files;

        // console.log("file[0] - ", file[0]);
        // console.log("file.file[0] - ", files.file[0]);

        // const data = {
        //     file: [file[0]],
        //     fileUpload: true
        // }

        this.setState({
            file1: file
        })
    };

    onChangeFile2 = (file) => {
        this.setState({
            file2: file
        })
    };
    onChangeFile3 = (file) => {
        this.setState({
            file3: file
        })
    };
    onChangeFile4 = (file) => {
        this.setState({
            file4: file
        })
    };
    onChangeFile5 = (file) => {
        this.setState({
            file5: file
        })
    };
    onChangeFile6 = (file) => {
        this.setState({
            file6: file
        })
    };
    onChangeFile7 = (file) => {
        this.setState({
            file7: file
        })
    };
    onChangeFile8 = (file) => {
        this.setState({
            file8: file
        })
    };

    render() {
        const {selectRukn, onCancel, onChangeFile1, onChangeFile2, onChangeFile3, onChangeFile4, onChangeFile5, onChangeFile6, onChangeFile7, onChangeFile8} = this;
        const {modalVisible, file1, file2, file3, file4, file5, file6, file7, file8} = this.state;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                justify: "center"
            },
            wrapperCol: {
                justify: "center",
                xs: 24,
            },
        };
        const ColProps = {
            xs: 24,
            sm: 24,
            md: 24,
            xl: 24,
            ld: 24
        };

        const content = (
            <div>
                <p>Content</p>
                <p>Content</p>
            </div>
        );

        return (
            <div>

                {modalVisible && <Modal
                    modalVisible={modalVisible}
                    onCancel={onCancel}
                />}

                <div className="body-content">
                    <div className="wrapper">
                        <div className="title-content">
                            <h4>OLX da bepul e‘lon berish</h4>
                        </div>
                    </div>
                    <div className="wrapper">
                        <form action="#">
                            <div className="content">
                                <div className="content-box">
                                    <div className="sarlavha">
                                        <h5>Sarlavxa</h5>
                                    </div>
                                    <Popover placement="rightTop" content={content} title="Title">
                                        <div className="custom-form-group">
                                            <label htmlFor="title">Sarlavxa <span>*</span></label>
                                            <div className="custom-icon">
                                                <input type="text"
                                                       id="title"
                                                       className="custom-form custom-form-error"
                                                       maxLength="70"
                                                />
                                                <b className="icon icon-check"/>
                                            </div>
                                            <div className="label-bottom">70 belgi qoldi</div>
                                            <div className="custom-input-error d-none">Sarlavhani ko'rsating</div>
                                        </div>
                                    </Popover>

                                    <div className="custom-form-group">
                                        <label htmlFor="title">Rukn <span>*</span></label>
                                        <div className="custom-icon" onClick={selectRukn}>
                                            <input type="text"
                                                   id="title"
                                                   className="custom-form"
                                                   disabled
                                            />
                                            <b className="icon icon-down-arrow"/>
                                        </div>
                                        <div className="label-bottom d-none custom-input-error">Ruknni tanlang</div>
                                    </div>
                                </div>
                            </div>

                            <div className="content">
                                <div className="content-box">

                                    <div className="custom-form-group">
                                        <label htmlFor="title">Naxt <span>*</span></label>

                                        <div className="custom-radio-input mb-4">
                                            <ul>
                                                <li>
                                                    <div className="custom-radio-input-item">
                                                        <input type="radio" id="ayrboshlash" name="pricetype" value="ayrboshlash" hidden/>
                                                        <label htmlFor="ayrboshlash" className="label1">Ayrboshlash</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-radio-input-item">
                                                        <input type="radio" id="naxt" defaultChecked="checked"  name="pricetype" value="naxt" hidden/>
                                                        <label htmlFor="naxt" className="label2">Naxt</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="custom-input-select-group">
                                            <ul>
                                                <li>
                                                    <div className="custom-input-item">
                                                        <input type="text" className="custom-form custom-form-success"/>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-select-item">
                                                        <select id="cars" defaultValue="uzb" className="custom-form custom-form-success">
                                                            <option value="uzb">Sum</option>
                                                            <option value="ye">y.e.</option>
                                                        </select>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="custom-switch-box">
                                            <label htmlFor="price_arranged" className="custom-check-switch-left">Kelishilgan</label>
                                            <input type="checkbox" name="price_arranged" id="price_arranged" hidden value="price_arranged"/>
                                            <label htmlFor="price_arranged" className="custom-check-switch" />
                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div className="content">
                                <div className="content-box">
                                    <div className="sarlavha">
                                        <h5>Bog‘lanish uchun ma‘lumotlar</h5>
                                        <p>Qulaylik uchun biz ushbu ma`lumotlarni saqlaymiz. O`zgartirishlarni kiritishingiz mumkin sozlamalarda</p>
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="cars">Shahar joylashishi qoshildi <span>*</span></label>
                                        <select id="cars" defaultValue="saab" className="custom-form">
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="vw">VW</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                        <div className="custom-input-error d-none">Sarlavhani ko'rsating</div>
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="cars">Shahar joylashishi qoshildi <span>*</span></label>
                                        <select id="cars" defaultValue="saab" className="custom-form">
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="vw">VW</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                        <div className="custom-input-error d-none">Sarlavhani ko'rsating</div>
                                    </div>
                                    <div className="custom-form-group custom-add">
                                        <label htmlFor="phone">Telefon raqami</label>
                                        <div className="custom-icon">
                                            <input type="text"
                                                   id="phone"
                                                   name="phone"
                                                   className="custom-form custom-form-error"
                                                   maxLength="13"
                                            />
                                            <b className="icon icon-check"/>
                                        </div>
                                        <div className="custom-input-error d-none">Sarlavhani ko'rsating</div>
                                    </div>
                                    <div className="custom-form-group custom-add">
                                        <label htmlFor="phone">Telefon raqami</label>
                                        <div className="custom-icon">
                                            <input type="text"
                                                   id="phone"
                                                   name="phone"
                                                   className="custom-form custom-form-error"
                                                   maxLength="13"
                                            />
                                            <b className="icon">km</b>
                                        </div>
                                        <div className="custom-input-error d-none">Sarlavhani ko'rsating</div>
                                    </div>

                                    <div className="custom-form-group custom-radio-button">
                                        <label htmlFor="phone">Uzatmalar qutisi <span>*</span></label>
                                        <div className="custom-radio-button">
                                            <ul>
                                                <li>
                                                    <div className="custom-radio-button-item">
                                                        <input type="radio" id="Mexanik" hidden name="karobka" value="male"/>
                                                        <label htmlFor="Mexanik">Mexanik</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-radio-button-item">
                                                        <input type="radio" id="Avtomatik" hidden name="karobka" value="male"/>
                                                        <label htmlFor="Avtomatik">Avtomatik</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-radio-button-item">
                                                        <input type="radio" id="male31" hidden name="karobka" value="male"/>
                                                        <label htmlFor="male31">Boshqa</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="custom-input-error d-none">Sarlavhani ko'rsating</div>
                                    </div>

                                    <div className="custom-form-group">
                                        <label htmlFor="cars">Shahar joylashishi qoshildi <span>*</span></label>
                                        <select id="cars" defaultValue="saab" className="custom-form">
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="vw">VW</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                        <div className="custom-input-error d-none">Sarlavhani ko'rsating</div>
                                    </div>
                                    <div className="custom-form-group custom-add">
                                        <label htmlFor="phone">Telefon raqami</label>
                                        <div className="custom-icon">
                                            <input type="text"
                                                   id="phone"
                                                   name="phone"
                                                   className="custom-form custom-form-error"
                                                   maxLength="13"
                                            />
                                            <b className="icon">km</b>
                                        </div>
                                        <div className="custom-input-error d-none">Sarlavhani ko'rsating</div>
                                    </div>
                                    <div className="custom-form-group custom-radio-button">
                                        <label htmlFor="phone">Yoqilg'i turi <span>*</span></label>
                                        <div className="custom-radio-button">
                                            <ul>
                                                <li>
                                                    <div className="custom-radio-button-item">
                                                        <input type="radio" id="Benzin" hidden name="yoqilgi" value="male"/>
                                                        <label htmlFor="Benzin">Benzin</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-radio-button-item">
                                                        <input type="radio" id="Dizel" hidden name="yoqilgi" value="male"/>
                                                        <label htmlFor="Dizel">Dizel</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-radio-button-item">
                                                        <input type="radio" id="Boshqa" hidden name="yoqilgi" value="male"/>
                                                        <label htmlFor="Boshqa">Boshqa</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="custom-input-error d-none">Sarlavhani ko'rsating</div>
                                    </div>
                                    <div className="custom-form-group custom-radio-button">
                                        <label htmlFor="phone">Mashina holati <span>*</span></label>
                                        <div className="custom-radio-button">
                                            <ul>
                                                <li>
                                                    <div className="custom-radio-button-item">
                                                        <input type="radio" id="Ideal" hidden name="mashina" value="male"/>
                                                        <label htmlFor="Ideal">Ideal</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-radio-button-item">
                                                        <input type="radio" id="Yaxshi" hidden name="mashina" value="male"/>
                                                        <label htmlFor="Yaxshi">Yaxshi</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-radio-button-item">
                                                        <input type="radio" id="male33" hidden name="mashina" value="male"/>
                                                        <label htmlFor="male33">O'rta</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-radio-button-item">
                                                        <input type="radio" id="male44" hidden name="mashina" value="male"/>
                                                        <label htmlFor="male44">Ta'mir talab</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="custom-input-error d-none">Sarlavhani ko'rsating</div>
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="cars">Shahar joylashishi qoshildi <span>*</span></label>
                                        <select id="cars" defaultValue="saab" className="custom-form">
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="vw">VW</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                        <div className="custom-input-error d-none">Sarlavhani ko'rsating</div>
                                    </div>
                                    <div className="custom-form-group checkbox-custom">
                                        <label htmlFor="phone">Telefon raqami</label>
                                        <div className="checkbox-custom">
                                            <ul>
                                                <li>
                                                    <div className="checkbox-box">
                                                        <div className="checkbox-item">
                                                            <input type="checkbox" id="checkbox1" hidden className="custom-check-input"/>
                                                            <label htmlFor="checkbox1" className="custom-check-label"/>
                                                        </div>
                                                        <label htmlFor="checkbox1" className="checkbox-item-title ml-2 mr-3">Bojxonada rasmiylashtirilgan</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="checkbox-box">
                                                        <div className="checkbox-item">
                                                            <input type="checkbox" id="checkbox2" hidden className="custom-check-input"/>
                                                            <label htmlFor="checkbox2" className="custom-check-label"/>
                                                        </div>
                                                        <label htmlFor="checkbox2" className="checkbox-item-title ml-2 mr-3">Bojxonada rasmiylashtirilgan</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="checkbox-box">
                                                        <div className="checkbox-item">
                                                            <input type="checkbox" id="checkbox3" hidden className="custom-check-input"/>
                                                            <label htmlFor="checkbox3" className="custom-check-label"/>
                                                        </div>
                                                        <label htmlFor="checkbox3" className="checkbox-item-title ml-2 mr-3">Bojxonada rasmiylashtirilgan</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="checkbox-box">
                                                        <div className="checkbox-item">
                                                            <input type="checkbox" id="checkbox4" hidden className="custom-check-input"/>
                                                            <label htmlFor="checkbox4" className="custom-check-label"/>
                                                        </div>
                                                        <label htmlFor="checkbox4" className="checkbox-item-title ml-2 mr-3">Bojxonada rasmiylashtirilgan</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="checkbox-box">
                                                        <div className="checkbox-item">
                                                            <input type="checkbox" id="checkbox5" hidden className="custom-check-input"/>
                                                            <label htmlFor="checkbox5" className="custom-check-label"/>
                                                        </div>
                                                        <label htmlFor="checkbox5" className="checkbox-item-title ml-2 mr-3">Bojxonada rasmiylashtirilgan</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="checkbox-box">
                                                        <div className="checkbox-item">
                                                            <input type="checkbox" id="checkbox6" hidden className="custom-check-input"/>
                                                            <label htmlFor="checkbox6" className="custom-check-label"/>
                                                        </div>
                                                        <label htmlFor="checkbox6" className="checkbox-item-title ml-2 mr-3">Bojxonada rasmiylashtirilgan</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="custom-input-error d-none">Sarlavhani ko'rsating</div>
                                    </div>

                                    <div className="custom-form-group custom-radio-button">
                                        <label htmlFor="phone">Jismoniy/yuridik shaxs <span>*</span></label>
                                        <div className="custom-radio-button">
                                            <ul>
                                                <li>
                                                    <div className="custom-radio-button-item">
                                                        <input type="radio" id="Jismoniy" hidden name="person" value="male"/>
                                                        <label htmlFor="Jismoniy">Jismoniy shaxs</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="custom-radio-button-item">
                                                        <input type="radio" id="Biznes" hidden name="person" value="male"/>
                                                        <label htmlFor="Biznes">Biznes</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="custom-input-error d-none">Sarlavhani ko'rsating</div>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="content-box custom-textarea">
                                    <div className="sarlavha">
                                        <h5>Sarlavxa</h5>
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="textarea">Tavsif <span>*</span></label>
                                        <div className="custom-icon">
                                            <textarea
                                                id="textarea"
                                                className="custom-form custom-form-success"
                                                maxLength="9000"
                                            />
                                        </div>
                                        <div className="label-bottom">9000 belgi qoldi</div>
                                        <div className="custom-input-error d-none">Tavsifni ko'rsating</div>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="content-box box-file">
                                    <div className="sarlavha">
                                        <h5>Fotosuratlar</h5>
                                    </div>
                                    <div className="custom-form-group">
                                        <div className="file-title">Fotosuratli e‘lonlar o‘rtacha … 3-5 marta yana ham ko‘proq javoblar</div>
                                        <div className="custom-files ">
                                            <div className="file-item">
                                                <FileUpload
                                                    name={"file1"}
                                                    types={["image/jpeg",
                                                        "image/png",
                                                        "image/jpg"]}
                                                    size={50}
                                                    file={file1}
                                                    onChangeFile={onChangeFile1}
                                                    formItemLayout={formItemLayout}
                                                    colLayout={ColProps}
                                                />
                                            </div>
                                            <div className="file-item">
                                                <FileUpload
                                                    name={"file2"}
                                                    types={["image/jpeg",
                                                        "image/png",
                                                        "image/jpg"]}
                                                    size={50}
                                                    file={file2}
                                                    onChangeFile={onChangeFile2}
                                                    formItemLayout={formItemLayout}
                                                    colLayout={ColProps}
                                                />
                                            </div>
                                            <div className="file-item">
                                                <FileUpload
                                                    name={"file3"}
                                                    types={["image/jpeg",
                                                        "image/png",
                                                        "image/jpg"]}
                                                    size={50}
                                                    file={file3}
                                                    onChangeFile={onChangeFile3}
                                                    formItemLayout={formItemLayout}
                                                    colLayout={ColProps}
                                                />
                                            </div>
                                            <div className="file-item">
                                                <FileUpload
                                                    name={"file4"}
                                                    types={["image/jpeg",
                                                        "image/png",
                                                        "image/jpg"]}
                                                    size={50}
                                                    file={file4}
                                                    onChangeFile={onChangeFile4}
                                                    formItemLayout={formItemLayout}
                                                    colLayout={ColProps}
                                                />
                                            </div>

                                        </div>
                                        <div className="custom-files ">
                                            <div className="file-item">
                                                <FileUpload
                                                    name={"file5"}
                                                    types={["image/jpeg",
                                                        "image/png",
                                                        "image/jpg"]}
                                                    size={50}
                                                    file={file5}
                                                    onChangeFile={onChangeFile5}
                                                    formItemLayout={formItemLayout}
                                                    colLayout={ColProps}
                                                />
                                            </div>
                                            <div className="file-item">
                                                <FileUpload
                                                    name={"file6"}
                                                    types={["image/jpeg",
                                                        "image/png",
                                                        "image/jpg"]}
                                                    size={50}
                                                    file={file6}
                                                    onChangeFile={onChangeFile6}
                                                    formItemLayout={formItemLayout}
                                                    colLayout={ColProps}
                                                />
                                            </div>
                                            <div className="file-item">
                                                <FileUpload
                                                    name={"file7"}
                                                    types={["image/jpeg",
                                                        "image/png",
                                                        "image/jpg"]}
                                                    size={50}
                                                    file={file7}
                                                    onChangeFile={onChangeFile7}
                                                    formItemLayout={formItemLayout}
                                                    colLayout={ColProps}
                                                />
                                            </div>
                                            <div className="file-item">
                                                <FileUpload
                                                    name={"file8"}
                                                    types={["image/jpeg",
                                                        "image/png",
                                                        "image/jpg"]}
                                                    size={50}
                                                    file={file8}
                                                    onChangeFile={onChangeFile8}
                                                    formItemLayout={formItemLayout}
                                                    colLayout={ColProps}
                                                />
                                            </div>

                                        </div>
                                        <div className="label-bottom">Agar muammoga duch kelgan bo‘lsangiz, iltimos …dan foydalaning alternativ shaklda</div>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="content-box">
                                    <div className="sarlavha">
                                        <h5>Bog‘lanish uchun ma‘lumotlar</h5>
                                        <p>Qulaylik uchun biz ushbu ma`lumotlarni saqlaymiz. O`zgartirishlarni kiritishingiz mumkin sozlamalarda</p>
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="street">Shahar joylashishi qoshildi <span>*</span></label>
                                        <div className="custom-icon">
                                            <input type="text"
                                                   id="street"
                                                   name="street"
                                                   className="custom-form custom-form-error"
                                                   maxLength="70"
                                            />
                                            <b className="icon icon-check"/>
                                        </div>
                                        <div className="custom-input-error d-none">Sarlavhani ko'rsating</div>
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="phone">Telefon raqami</label>
                                        <div className="custom-icon">
                                            <input type="text"
                                                   id="phone"
                                                   name="phone"
                                                   className="custom-form custom-form-error"
                                                   maxLength="13"
                                            />
                                            <b className="icon icon-check"/>
                                        </div>
                                        <div className="custom-input-error d-none">Sarlavhani ko'rsating</div>
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="email">Email-manzil</label>
                                        <div className="custom-icon">
                                            <input type="email"
                                                   id="email"
                                                   className="custom-form custom-form-error"
                                                   maxLength="70"
                                            />
                                            <b className="icon icon-check"/>
                                        </div>
                                        <div className="custom-input-error d-none">Sarlavhani ko'rsating</div>
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="aloqa">Aloqa uchun shaxs <span>*</span></label>
                                        <div className="custom-icon">
                                            <input type="text"
                                                   id="aloqa"
                                                   name="aloqa"
                                                   className="custom-form custom-form-error"
                                                   maxLength="70"
                                            />
                                            <b className="icon icon-check"/>
                                        </div>
                                        <div className="custom-input-error d-none">Sarlavhani ko'rsating</div>
                                    </div>

                                </div>
                            </div>
                            <div className="content">
                                <div className="content-box">
                                    <div className="custom-btn">
                                        <div className="custom-btn-submit ml-5">
                                            Joylashtirish
                                        </div>
                                        <div className="custom-btn-eye">
                                            Ko'rib chiqish
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;