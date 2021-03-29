import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryDropdownName:''
        }
    }

    componentDidMount() {
        console.log("componentDidMount HOME");
    }

    categoryDropdown = (name) =>{

        if(name !== this.state.categoryDropdownName){
            this.setState({categoryDropdownName:name})
        }else {
            this.setState({categoryDropdownName:''})
        }

    }

    render() {
        const {categoryDropdown} = this;
        const {categoryDropdownName} = this.state;
        return (
            <div>
                <div className="maincategories">
                    <div className="wrapper">
                        <div className="header">
                            <h3>Bosh toifalar</h3>
                        </div>
                    </div>
                    <div className="wrapper category">
                        <div className="category-list justify-con">
                            <div className="category-item">
                                <div className="item-link" onClick={()=>categoryDropdown('category1')}>
                                    <span>Bolalar dunyosi</span>
                                    <img className="category-img bg-category1" src={require("../../../assets/images/category/category1.png")}
                                         alt=""/>
                                </div>
                            </div>
                            <div className="category-item">
                                <div className="item-link"  onClick={()=>categoryDropdown('category2')}>
                                    <span>Ko'chmas mulk</span>
                                    <img className="category-img bg-category2" src={require("../../../assets/images/category/category2.png")}
                                         alt=""/>
                                </div>
                            </div>
                            <div className="category-item">
                                <div className="item-link"  onClick={()=>categoryDropdown('category3')}>
                                    <span>Transport</span>
                                    <img className="category-img bg-category3" src={require("../../../assets/images/category/category3.png")}
                                         alt=""/>
                                </div>
                            </div>
                            <div className="category-item">
                                <div className="item-link"  onClick={()=>categoryDropdown('category4')}>
                                    <span>Ish</span>
                                    <img className="category-img bg-category4" src={require("../../../assets/images/category/category4.png")}
                                         alt=""/>
                                </div>
                            </div>
                            <div className="category-item">
                                <div className="item-link"  onClick={()=>categoryDropdown('category5')}>
                                    <span>Hayvonlar</span>
                                    <img className="category-img bg-category5" src={require("../../../assets/images/category/category5.png")}
                                         alt=""/>
                                </div>
                            </div>
                            <div className="category-item">
                                <div className="item-link"  onClick={()=>categoryDropdown('category6')}>
                                    <span>Uy va bog'</span>
                                    <img className="category-img bg-category6" src={require("../../../assets/images/category/category6.png")}
                                         alt=""/>
                                </div>
                            </div>
                            <div className="category-item">
                                <div className="item-link"  onClick={()=>categoryDropdown('category7')}>
                                    <span>Elektr jihozlari</span>
                                    <img className="category-img bg-category7" src={require("../../../assets/images/category/category7.png")}
                                         alt=""/>
                                </div>
                            </div>
                            <div className="category-item">
                                <div className="item-link"  onClick={()=>categoryDropdown('category8')}>
                                    <span>Xizmatlar</span>
                                    <img className="category-img bg-category8" src={require("../../../assets/images/category/category8.png")}
                                         alt=""/>
                                </div>
                            </div>
                            <div className="category-item">
                                <div className="item-link"  onClick={()=>categoryDropdown('category9')}>
                                    <span>Moda va stil</span>
                                    <img className="category-img bg-category9" src={require("../../../assets/images/category/category9.png")}
                                         alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={`${categoryDropdownName === 'category1' ? 'category-dropdown-menu category1':'category-dropdown-menu category1 d-none'}`}>
                            <b className="icon icon-chevron-up dropdown-up"/>
                            <div className="category-dropdown-title">
                                <div className="category-dropdown-title-item">
                                    <a href="#">
                                        <b className="icon icon-chevron-right"/>
                                        <strong>Barcha e'lonlarniko'rib chiqish</strong>
                                    </a>
                                    ..dan ko'rish
                                </div>
                            </div>
                            <div className="category-dropdown-body full">
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${categoryDropdownName === 'category2' ? 'category-dropdown-menu category2':'category-dropdown-menu category2 d-none'}`}>
                            <b className="icon icon-chevron-up dropdown-up"/>
                            <div className="category-dropdown-title">
                                <div className="category-dropdown-title-item">
                                    <a href="#">
                                        <b className="icon icon-chevron-right"/>
                                        <strong>Barcha e'lonlarniko'rib chiqish</strong>
                                    </a>
                                    ..dan ko'rish
                                </div>
                            </div>
                            <div className="category-dropdown-body full">
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${categoryDropdownName === 'category3' ? 'category-dropdown-menu category3':'category-dropdown-menu category3 d-none'}`}>
                            <b className="icon icon-chevron-up dropdown-up"/>
                            <div className="category-dropdown-title">
                                <div className="category-dropdown-title-item">
                                    <a href="#">
                                        <b className="icon icon-chevron-right"/>
                                        <strong>Barcha e'lonlarniko'rib chiqish</strong>
                                    </a>
                                    ..dan ko'rish
                                </div>
                            </div>
                            <div className="category-dropdown-body full">
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${categoryDropdownName === 'category4' ? 'category-dropdown-menu category4':'category-dropdown-menu category4 d-none'}`}>
                            <b className="icon icon-chevron-up dropdown-up"/>
                            <div className="category-dropdown-title">
                                <div className="category-dropdown-title-item">
                                    <a href="#">
                                        <b className="icon icon-chevron-right"/>
                                        <strong>Barcha e'lonlarniko'rib chiqish</strong>
                                    </a>
                                    ..dan ko'rish
                                </div>
                            </div>
                            <div className="category-dropdown-body full">
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${categoryDropdownName === 'category5' ? 'category-dropdown-menu category5':'category-dropdown-menu category5 d-none'}`}>
                            <b className="icon icon-chevron-up dropdown-up"/>
                            <div className="category-dropdown-title">
                                <div className="category-dropdown-title-item">
                                    <a href="#">
                                        <b className="icon icon-chevron-right"/>
                                        <strong>Barcha e'lonlarniko'rib chiqish</strong>
                                    </a>
                                    ..dan ko'rish
                                </div>
                            </div>
                            <div className="category-dropdown-body full">
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${categoryDropdownName === 'category6' ? 'category-dropdown-menu category6':'category-dropdown-menu category6 d-none'}`}>
                            <b className="icon icon-chevron-up dropdown-up"/>
                            <div className="category-dropdown-title">
                                <div className="category-dropdown-title-item">
                                    <a href="#">
                                        <b className="icon icon-chevron-right"/>
                                        <strong>Barcha e'lonlarniko'rib chiqish</strong>
                                    </a>
                                    ..dan ko'rish
                                </div>
                            </div>
                            <div className="category-dropdown-body full">
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${categoryDropdownName === 'category7' ? 'category-dropdown-menu category7':'category-dropdown-menu category7 d-none'}`}>
                            <b className="icon icon-chevron-up dropdown-up"/>
                            <div className="category-dropdown-title">
                                <div className="category-dropdown-title-item">
                                    <a href="#">
                                        <b className="icon icon-chevron-right"/>
                                        <strong>Barcha e'lonlarniko'rib chiqish</strong>
                                    </a>
                                    ..dan ko'rish
                                </div>
                            </div>
                            <div className="category-dropdown-body full">
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${categoryDropdownName === 'category8' ? 'category-dropdown-menu category8':'category-dropdown-menu category8 d-none'}`}>
                            <b className="icon icon-chevron-up dropdown-up"/>
                            <div className="category-dropdown-title">
                                <div className="category-dropdown-title-item">
                                    <a href="#">
                                        <b className="icon icon-chevron-right"/>
                                        <strong>Barcha e'lonlarniko'rib chiqish</strong>
                                    </a>
                                    ..dan ko'rish
                                </div>
                            </div>
                            <div className="category-dropdown-body full">
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${categoryDropdownName === 'category9' ? 'category-dropdown-menu category9':'category-dropdown-menu category9 d-none'}`}>
                            <b className="icon icon-chevron-up dropdown-up"/>
                            <div className="category-dropdown-title">
                                <div className="category-dropdown-title-item">
                                    <a href="#">
                                        <b className="icon icon-chevron-right"/>
                                        <strong>Barcha e'lonlarniko'rib chiqish</strong>
                                    </a>
                                    ..dan ko'rish
                                </div>
                            </div>
                            <div className="category-dropdown-body full">
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="category-list">
                            <div className="category-item mar-r">
                                <div className="item-link" onClick={()=>categoryDropdown('category10')}>
                                    <span>Xobbi, dam olish <br/> sport</span>
                                    <img className="category-img bg-category10" src={require("../../../assets/images/category/category10.png")}
                                         alt=""/>
                                </div>
                            </div>
                            <div className="category-item mar-r">
                                <div className="item-link" onClick={()=>categoryDropdown('category11')}>
                                    <span>Tekinga beraman</span>
                                    <img className="category-img bg-category11" src={require("../../../assets/images/category/category11.png")}
                                         alt=""/>
                                </div>
                            </div>
                            <div className="category-item mar-r">
                                <div className="item-link" onClick={()=>categoryDropdown('category12')}>
                                    <span>Ayirboshlash</span>
                                    <img className="category-img bg-category12" src={require("../../../assets/images/category/category12.png")}
                                         alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={`${categoryDropdownName === 'category10' ? 'category-dropdown-menu category10':'category-dropdown-menu category10 d-none'}`}>
                            <b className="icon icon-chevron-up dropdown-up"/>
                            <div className="category-dropdown-title">
                                <div className="category-dropdown-title-item">
                                    <a href="#">
                                        <b className="icon icon-chevron-right"/>
                                        <strong>Barcha e'lonlarniko'rib chiqish</strong>
                                    </a>
                                    ..dan ko'rish
                                </div>
                            </div>
                            <div className="category-dropdown-body full">
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${categoryDropdownName === 'category11' ? 'category-dropdown-menu category11':'category-dropdown-menu category11 d-none'}`}>
                            <b className="icon icon-chevron-up dropdown-up"/>
                            <div className="category-dropdown-title">
                                <div className="category-dropdown-title-item">
                                    <a href="#">
                                        <b className="icon icon-chevron-right"/>
                                        <strong>Barcha e'lonlarniko'rib chiqish</strong>
                                    </a>
                                    ..dan ko'rish
                                </div>
                            </div>
                            <div className="category-dropdown-body full">
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${categoryDropdownName === 'category12' ? 'category-dropdown-menu category12':'category-dropdown-menu category12 d-none'}`}>
                            <b className="icon icon-chevron-up dropdown-up"/>
                            <div className="category-dropdown-title">
                                <div className="category-dropdown-title-item">
                                    <a href="#">
                                        <b className="icon icon-chevron-right"/>
                                        <strong>Barcha e'lonlarniko'rib chiqish</strong>
                                    </a>
                                    ..dan ko'rish
                                </div>
                            </div>
                            <div className="category-dropdown-body full">
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="category-dropdown-item part25">
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <b className="icon icon-chevron-right"/>
                                        <a href="#">
                                            <span>Bolalar kiyimi</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body-container">
                    <div className="wrapper mb-2">
                        <div className="header">
                            <h3 className="text-uppercase">PREMIUM E`LONLAR</h3>
                        </div>
                    </div>
                    <div className="wrapper">
                        <ul className="gallery">
                            <li className="gallery-item float">
                                <div className="gallery-image">
                                    <img src={require("../../../assets/images/gallery/image.jpeg")} alt=""/>
                                </div>
                                <div className="gallery-body">
                                    <h4><a href="#">Женская обувь</a></h4>
                                </div>
                                <div className="gallery-footer">
                                    <div className="footer-title mb-1">
                                        <span>Qarshi - kecha 20:11</span>
                                    </div>
                                    <div className="footer-content">
                                        <div className="price float">200 000 so'm</div>
                                        <div className="love float-right"><b className="icon icon-like-header"/></div>
                                    </div>
                                </div>
                            </li>
                            <li className="gallery-item float">
                                <div className="gallery-image">
                                    <img src={require("../../../assets/images/gallery/image.jpeg")} alt=""/>
                                </div>
                                <div className="gallery-body">
                                    <h4><a href="#">Женская обувь</a></h4>
                                </div>
                                <div className="gallery-footer">
                                    <div className="footer-title mb-1">
                                        <span>Qarshi - kecha 20:11</span>
                                    </div>
                                    <div className="footer-content">
                                        <div className="price float">200 000 so'm</div>
                                        <div className="love float-right"><b className="icon icon-like-header"/></div>
                                    </div>
                                </div>
                            </li>
                            <li className="gallery-item float">
                                <div className="gallery-image">
                                    <img src={require("../../../assets/images/gallery/image.jpeg")} alt=""/>
                                </div>
                                <div className="gallery-body">
                                    <h4><a href="#">Женская обувь</a></h4>
                                </div>
                                <div className="gallery-footer">
                                    <div className="footer-title mb-1">
                                        <span>Qarshi - kecha 20:11</span>
                                    </div>
                                    <div className="footer-content">
                                        <div className="price float">200 000 so'm</div>
                                        <div className="love float-right"><b className="icon icon-like-header"/></div>
                                    </div>
                                </div>
                            </li>
                            <li className="gallery-item float">
                                <div className="gallery-image">
                                    <img src={require("../../../assets/images/gallery/image1.jpeg")} alt=""/>
                                </div>
                                <div className="gallery-body">
                                    <h4><a href="#">Женская обувь</a></h4>
                                </div>
                                <div className="gallery-footer">
                                    <div className="footer-title mb-1">
                                        <span>Qarshi - kecha 20:11</span>
                                    </div>
                                    <div className="footer-content">
                                        <div className="price float">200 000 so'm</div>
                                        <div className="love float-right"><b className="icon icon-like-header"/></div>
                                    </div>
                                </div>
                            </li>
                            <li className="gallery-item float">
                                <div className="gallery-image">
                                    <img src={require("../../../assets/images/gallery/image.jpeg")} alt=""/>
                                </div>
                                <div className="gallery-body">
                                    <h4><a href="#">Женская обувь</a></h4>
                                </div>
                                <div className="gallery-footer">
                                    <div className="footer-title mb-1">
                                        <span>Qarshi - kecha 20:11</span>
                                    </div>
                                    <div className="footer-content">
                                        <div className="price float">200 000 so'm</div>
                                        <div className="love float-right"><b className="icon icon-like-header"/></div>
                                    </div>
                                </div>
                            </li>
                            <li className="gallery-item float">
                                <div className="gallery-image">
                                    <img src={require("../../../assets/images/gallery/image1.jpeg")} alt=""/>
                                </div>
                                <div className="gallery-body">
                                    <h4><a href="#"> Женская обувь Женская обувь Женская обувь</a></h4>
                                </div>
                                <div className="gallery-footer">
                                    <div className="footer-title mb-1">
                                        <span>Qarshi - kecha 20:11</span>
                                    </div>
                                    <div className="footer-content">
                                        <div className="price float">200 000 so'm</div>
                                        <div className="love float-right"><b className="icon icon-like-header"/></div>
                                    </div>
                                </div>
                            </li>
                            <li className="gallery-item float">
                                <div className="gallery-image">
                                    <img src={require("../../../assets/images/gallery/image.jpeg")} alt=""/>
                                </div>
                                <div className="gallery-body">
                                    <h4><a href="#">Женская обувь</a></h4>
                                </div>
                                <div className="gallery-footer">
                                    <div className="footer-title mb-1">
                                        <span>Qarshi - kecha 20:11</span>
                                    </div>
                                    <div className="footer-content">
                                        <div className="price float">200 000 so'm</div>
                                        <div className="love float-right"><b className="icon icon-like-header"/></div>
                                    </div>
                                </div>
                            </li>
                            <li className="gallery-item float">
                                <div className="gallery-image">
                                    <img src={require("../../../assets/images/gallery/image.jpeg")} alt=""/>
                                </div>
                                <div className="gallery-body">
                                    <h4><a href="#">Женская обувь</a></h4>
                                </div>
                                <div className="gallery-footer">
                                    <div className="footer-title mb-1">
                                        <span>Qarshi - kecha 20:11</span>
                                    </div>
                                    <div className="footer-content">
                                        <div className="price float">200 000 so'm</div>
                                        <div className="love float-right"><b className="icon icon-like-header"/></div>
                                    </div>
                                </div>
                            </li>
                            <li className="gallery-item float">
                                <div className="gallery-image">
                                    <img src={require("../../../assets/images/gallery/image.jpeg")} alt=""/>
                                </div>
                                <div className="gallery-body">
                                    <h4><a href="#">Женская обувь</a></h4>
                                </div>
                                <div className="gallery-footer">
                                    <div className="footer-title mb-1">
                                        <span>Qarshi - kecha 20:11</span>
                                    </div>
                                    <div className="footer-content">
                                        <div className="price float">200 000 so'm</div>
                                        <div className="love float-right"><b className="icon icon-like-header"/></div>
                                    </div>
                                </div>
                            </li>
                            <li className="gallery-item float">
                                <div className="gallery-image">
                                    <img src={require("../../../assets/images/gallery/image.jpeg")} alt=""/>
                                </div>
                                <div className="gallery-body">
                                    <h4><a href="#">Женская обувь</a></h4>
                                </div>
                                <div className="gallery-footer">
                                    <div className="footer-title mb-1">
                                        <span>Qarshi - kecha 20:11</span>
                                    </div>
                                    <div className="footer-content">
                                        <div className="price float">200 000 so'm</div>
                                        <div className="love float-right"><b className="icon icon-like-header"/></div>
                                    </div>
                                </div>
                            </li>
                            <li className="gallery-item float">
                                <div className="gallery-image">
                                    <img src={require("../../../assets/images/gallery/image.jpeg")} alt=""/>
                                </div>
                                <div className="gallery-body">
                                    <h4><a href="#">Женская обувь</a></h4>
                                </div>
                                <div className="gallery-footer">
                                    <div className="footer-title mb-1">
                                        <span>Qarshi - kecha 20:11</span>
                                    </div>
                                    <div className="footer-content">
                                        <div className="price float">200 000 so'm</div>
                                        <div className="love float-right"><b className="icon icon-like-header"/></div>
                                    </div>
                                </div>
                            </li>
                            <li className="gallery-item float">
                                <div className="gallery-image">
                                    <img src={require("../../../assets/images/gallery/image1.jpeg")} alt=""/>
                                </div>
                                <div className="gallery-body">
                                    <h4><a href="#">Женская обувь</a></h4>
                                </div>
                                <div className="gallery-footer">
                                    <div className="footer-title mb-1">
                                        <span>Qarshi - kecha 20:11</span>
                                    </div>
                                    <div className="footer-content">
                                        <div className="price float">200 000 so'm</div>
                                        <div className="love float-right"><b className="icon icon-like-header"/></div>
                                    </div>
                                </div>
                            </li>
                            <li className="gallery-item float">
                                <div className="gallery-image">
                                    <img src={require("../../../assets/images/gallery/image.jpeg")} alt=""/>
                                </div>
                                <div className="gallery-body">
                                    <h4><a href="#">Женская обувь</a></h4>
                                </div>
                                <div className="gallery-footer">
                                    <div className="footer-title mb-1">
                                        <span>Qarshi - kecha 20:11</span>
                                    </div>
                                    <div className="footer-content">
                                        <div className="price float">200 000 so'm</div>
                                        <div className="love float-right"><b className="icon icon-like-header"/></div>
                                    </div>
                                </div>
                            </li>
                            <li className="gallery-item float">
                                <div className="gallery-image">
                                    <img src={require("../../../assets/images/gallery/image1.jpeg")} alt=""/>
                                </div>
                                <div className="gallery-body">
                                    <h4><a href="#"> Женская обувь Женская обувь Женская обувь</a></h4>
                                </div>
                                <div className="gallery-footer">
                                    <div className="footer-title mb-1">
                                        <span>Qarshi - kecha 20:11</span>
                                    </div>
                                    <div className="footer-content">
                                        <div className="price float">200 000 so'm</div>
                                        <div className="love float-right"><b className="icon icon-like-header"/></div>
                                    </div>
                                </div>
                            </li>
                            <li className="gallery-item float">
                                <div className="gallery-image">
                                    <img src={require("../../../assets/images/gallery/image.jpeg")} alt=""/>
                                </div>
                                <div className="gallery-body">
                                    <h4><a href="#">Женская обувь</a></h4>
                                </div>
                                <div className="gallery-footer">
                                    <div className="footer-title mb-1">
                                        <span>Qarshi - kecha 20:11</span>
                                    </div>
                                    <div className="footer-content">
                                        <div className="price float">200 000 so'm</div>
                                        <div className="love float-right"><b className="icon icon-like-header"/></div>
                                    </div>
                                </div>
                            </li>
                            <li className="gallery-item float">
                                <div className="gallery-image">
                                    <img src={require("../../../assets/images/gallery/image.jpeg")} alt=""/>
                                </div>
                                <div className="gallery-body">
                                    <h4><a href="#">Женская обувь</a></h4>
                                </div>
                                <div className="gallery-footer">
                                    <div className="footer-title mb-1">
                                        <span>Qarshi - kecha 20:11</span>
                                    </div>
                                    <div className="footer-content">
                                        <div className="price float">200 000 so'm</div>
                                        <div className="love float-right"><b className="icon icon-like-header"/></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="wrapper">
                        <div className="more-link">
                            <a href="#">Hammasini ko'rish</a>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="footer-top"></div>
                    <div className="footer-bottom"></div>
                </footer>
            </div>
        );
    }
}

export default Home;