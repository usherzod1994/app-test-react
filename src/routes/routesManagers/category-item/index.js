import React, {Component} from 'react';
import ApiRequest from "../../../services";
import api from "../../../services/app";
import {updateState} from "../../../redux/auth/action";
import {connect} from "react-redux";
import {Button, message} from "antd";
import Modal from './components/Modal';

const {postCategoryItem, getCategoryIdAndName} = api;

class CategoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionType: 'create',
            modalVisible: false,
            file: null,
            files: [],
            category: [],
            categoryId: 0
        }
    }

    onAdd = () => {
        ApiRequest(getCategoryIdAndName).then((result => {
            if (result.success) {
                this.setState({
                    category: result.object
                })
                this.setState({modalVisible: true})
            }else{
                message.error('Category yaratilmagan yoki internet yuq');
            }
        }))
    };

    onChangeAnyFile = (files) => {
        this.setState({
            files: files
        })
    };

    onSubmit = (data) => {
        console.log("data - ",data)
        ApiRequest(postCategoryItem, data).then((result => {
            console.log("ApiRequest. = ", result);
        }))
    };
    onCancel = () => {
        console.log("Cancel - Cancel")
        this.setState({modalVisible: false})
    };


    onChange=(value)=> {
        console.log(`selected ${value}`);
        this.setState({categoryId: value})
    }

    onBlur=()=> {
        console.log('blur');
    }

    onFocus=()=> {
        console.log('focus');
    }

    onSearch=(val)=> {
        console.log('search:', val);
    }

    render() {
        const {onAdd, onCancel, onSubmit, onChangeAnyFile, onChange, onBlur, onFocus, onSearch} = this;
        const {modalVisible, files, actionType, category, categoryId} = this.state;
        return (
            <div>
                <h1>Category Item</h1>
                <Button type="primary" onClick={onAdd}>Add</Button>
                {modalVisible &&
                <Modal
                    onSubmit={onSubmit}
                    onCancel={onCancel}
                    modalVisible={modalVisible}
                    files={files}
                    onChangeAnyFile={onChangeAnyFile}
                    actionType={actionType}
                    category={category}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSearch={onSearch}
                    categoryId={categoryId}
                />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = {
    updateState
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);