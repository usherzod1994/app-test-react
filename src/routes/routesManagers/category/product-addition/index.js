import React, {Component} from 'react';
import {Button, Col, message, Popconfirm, Row, Table} from "antd";
import ApiRequest from "../../../../services";
import api from "../../../../services/app";
import Modal from "./components/Modal";

const {getProductAdditionCategoryId, createProductAddition, deleteProductAddition} = api;

class ProductAddition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            treeData:[],
            modalVisible:false
        }
    }
    componentDidMount() {
        this.getInit()
    }


    getInit = () => {
        if (this.props.location.state.id){
            this.setState({id:this.props.location.state.id})
            const getProductAddition = getProductAdditionCategoryId+'/'+this.props.location.state.id;
            console.log("sdsds id = ", getProductAddition);
            ApiRequest(getProductAddition).then((result => {
                if (result.success) {
                    console.log("success = ", result.object);
                    this.setState({
                        treeData:result.object
                    })
                }
            }))
        }
    };

    onSubmit = (data) => {
        console.log("data - ", data);
        ApiRequest(createProductAddition, data).then((result => {
            if (result.success) {
                console.log("success = ", result);
                this.getInit();
                this.setState({modalVisible:false})
            }else {
                message.error("Saqlashda xatolik yuz berdi");
            }
        }))
    };

    onCancel = () => {
        console.log("Cancel - Cancel")
        this.setState({modalVisible: false})
    };

    onAdd = () => {
        console.log("onAdd");
        this.setState({
            modalVisible: true
        })
    };

    handleDelete = key =>{
        console.log("Delete - ",key);
        const deleteUrl = deleteProductAddition+'/'+key;
        ApiRequest(deleteUrl).then((result => {
            if (result.success) {
                console.log("success = ", result);
                this.getInit();
            }else {
                message.error("O'chirishda xatolik yuz berdi");
            }
        }))
    }

    handleEdit = key =>{
        console.log("Edit - ", key);
    }

    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
    };

    render() {

        const {treeData, modalVisible, id} = this.state;
        const {handleDelete, handleEdit, rowSelection, onSubmit, onCancel, onAdd} = this;

        const columns = [
            {
                title: 'Name',
                dataIndex: 'nameUz',
                key: 'nameUz',
            },
            {
                title: 'Id',
                dataIndex: 'id',
                key: 'id',
                width: '12%',
            },
            {
                title: 'Parent Id',
                dataIndex: 'parentId',
                width: '10%',
                key: 'parentId',
            },
            {
                title: 'Type',
                dataIndex: 'type',
                width: '30%',
                key: 'type',
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) =>
                    treeData.length >= 1 ? (
                        <span>
                            <a className="mr-2 text-info" onClick={() => handleEdit(record.key)}>Edit</a>
                            <Popconfirm title="O'chirmoqchimisiz?" onConfirm={() => handleDelete(record.key)}>
                            <a className="text-danger">Delete</a>
                            </Popconfirm>
                        </span>
                    ) : null,
            },
        ];

        return (
            <div>
                <h1>Product Addition</h1>
                {modalVisible && <Modal
                    onCancel={onCancel}
                    onSubmit={onSubmit}
                    modalVisible={modalVisible}
                    id={id}
                />}
                <Row>
                    <Col lg={24}>
                        <Button onClick={onAdd} type="primary" className="float-right">Add ProductAddition</Button>
                    </Col>
                    <Col lg={24} className="mt-3">
                        <Table columns={columns} rowSelection={rowSelection} dataSource={treeData}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ProductAddition;