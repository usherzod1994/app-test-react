import React from "react";
import {Modal} from "antd";

const SelectModal = ({
                         modalVisible,
                         onCancel
                     }) => {

    return (
        <>
            <Modal
                visible={modalVisible}
                title="Rukn"
                footer={null}
                width="65%"
                onCancel={onCancel}
            >

               <div className="selectModalBody">
                   <div className="category">
                       <ul>
                           <li>
                               <div className="category-item">
                                   <div className="item-body">
                                       <span><img className="category-img bg-category1" src={require("../../../../assets/images/category/category1.png")} alt=""/></span>
                                       <br/>
                                       <span>Bolalar Dunyosi</span>
                                   </div>
                               </div>
                           </li>

                           <li>
                               <div className="category-item">
                                   <div className="item-body">
                                       <span><img className="category-img bg-category2" src={require("../../../../assets/images/category/category2.png")} alt=""/></span>
                                       <br/>
                                       <span>Bolalar Dunyosi</span>
                                   </div>
                               </div>
                           </li>

                           <li>
                               <div className="category-item">
                                   <div className="item-body">
                                       <span><img className="category-img bg-category3" src={require("../../../../assets/images/category/category3.png")} alt=""/></span>
                                       <br/>
                                       <span>Bolalar Dunyosi</span>
                                   </div>
                               </div>
                           </li>

                           <li>
                               <div className="category-item">
                                   <div className="item-body">
                                       <span><img className="category-img bg-category4" src={require("../../../../assets/images/category/category4.png")} alt=""/></span>
                                       <br/>
                                       <span>Bolalar Dunyosi</span>
                                   </div>
                               </div>
                           </li>

                           <li>
                               <div className="category-item">
                                   <div className="item-body">
                                       <span><img className="category-img bg-category5" src={require("../../../../assets/images/category/category5.png")} alt=""/></span>
                                       <br/>
                                       <span>Bolalar Dunyosi</span>
                                   </div>
                               </div>
                           </li>

                           <li>
                               <div className="category-item">
                                   <div className="item-body">
                                       <span><img className="category-img bg-category6" src={require("../../../../assets/images/category/category6.png")} alt=""/></span>
                                       <br/>
                                       <span>Bolalar Dunyosi</span>
                                   </div>
                               </div>
                           </li>

                           <li>
                               <div className="category-item">
                                   <div className="item-body">
                                       <span><img className="category-img bg-category7" src={require("../../../../assets/images/category/category7.png")} alt=""/></span>
                                       <br/>
                                       <span>Bolalar Dunyosi</span>
                                   </div>
                               </div>
                           </li>

                       </ul>
                       <ul>

                           <li>
                               <div className="category-item">
                                   <div className="item-body">
                                       <span><img className="category-img bg-category8" src={require("../../../../assets/images/category/category8.png")} alt=""/></span>
                                       <br/>
                                       <span>Bolalar Dunyosi</span>
                                   </div>
                               </div>
                           </li>

                           <li>
                               <div className="category-item">
                                   <div className="item-body">
                                       <span><img className="category-img bg-category9" src={require("../../../../assets/images/category/category9.png")} alt=""/></span>
                                       <br/>
                                       <span>Bolalar Dunyosi</span>
                                   </div>
                               </div>
                           </li>

                           <li>
                               <div className="category-item">
                                   <div className="item-body">
                                       <span><img className="category-img bg-category10" src={require("../../../../assets/images/category/category10.png")} alt=""/></span>
                                       <br/>
                                       <span>Bolalar Dunyosi</span>
                                   </div>
                               </div>
                           </li>

                       </ul>
                   </div>

                   <div className="category-list d-none">
                       <div className="category-list-item">
                           <ul>
                               <li>
                                   <div className="item">
                                       CategoryName <b className="icon icon-chevron-right"/>
                                   </div>
                               </li>
                               <li>
                                   <div className="item">
                                       CategoryName <b className="icon icon-chevron-right"/>
                                   </div>
                               </li>
                               <li>
                                   <div className="item">
                                       CategoryName <b className="icon icon-chevron-right"/>
                                   </div>
                               </li>
                               <li>
                                   <div className="item">
                                       CategoryName <b className="icon icon-chevron-right"/>
                                   </div>
                               </li>
                               <li>
                                   <div className="item">
                                       CategoryName <b className="icon icon-chevron-right"/>
                                   </div>
                               </li>
                           </ul>

                       </div>
                       <div className="category-list-item">
                           <ul>
                               <li>
                                   <div className="item">
                                       CategoryName <b className="icon icon-chevron-right"/>
                                   </div>
                               </li>
                               <li>
                                   <div className="item">
                                       CategoryName <b className="icon icon-chevron-right"/>
                                   </div>
                               </li>
                               <li>
                                   <div className="item">
                                       CategoryName <b className="icon icon-chevron-right"/>
                                   </div>
                               </li>
                               <li>
                                   <div className="item">
                                       CategoryName <b className="icon icon-chevron-right"/>
                                   </div>
                               </li>
                               <li>
                                   <div className="item">
                                       CategoryName <b className="icon icon-chevron-right"/>
                                   </div>
                               </li>
                           </ul>
                       </div>
                       <div className="category-list-item">
                           <ul>
                               <li>
                                   <div className="item">
                                       CategoryName <b className="icon icon-chevron-right"/>
                                   </div>
                               </li>
                               <li>
                                   <div className="item">
                                       CategoryName <b className="icon icon-chevron-right"/>
                                   </div>
                               </li>
                               <li>
                                   <div className="item">
                                       CategoryName <b className="icon icon-chevron-right"/>
                                   </div>
                               </li>
                               <li>
                                   <div className="item">
                                       CategoryName <b className="icon icon-chevron-right"/>
                                   </div>
                               </li>
                               <li>
                                   <div className="item">
                                       CategoryName <b className="icon icon-chevron-right"/>
                                   </div>
                               </li>
                           </ul>
                       </div>
                   </div>
               </div>
            </Modal>
        </>
    );

}

export default SelectModal;