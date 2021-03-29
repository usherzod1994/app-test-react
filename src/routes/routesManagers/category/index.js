import React, {Component} from 'react';
import Modal from './components/Modal';
import {connect} from "react-redux";
import {updateState} from "../../../redux/auth/action";
import {Col, message, Row, Table, Popconfirm, Button} from "antd";
import ApiRequest from "../../../services";
import api from "../../../services/app";
import '../../../styles/cardCategory.scss';
import {Redirect} from "react-router-dom";


const {uploadPost,deleteCategory, updateCategory, createCategoryPost, getAllCategory, getCategoryId} = api;

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionType: 'create',
            modalVisible: false,
            file: null,
            value: undefined,
            photoId: '',
            parentId: 0,
            uploadFile: false,
            treeData: [],
            currentItem: {},
            addPoint: null
        }
    }


    getAllCategory = () => {
        ApiRequest(getAllCategory).then((result => {
            if (result.success) {
                console.log("categoryList = ", result);
                console.log("categoryList.object = ", result.object);
                this.setState({
                    treeData: result.object
                })
            } else {
                message.error('Category yaratilmagan yoki internet yuq');
            }
        }))
    }

    componentDidMount() {
        this.getAllCategory();
        console.log("sasa = ", this.treeData);
    }

    onAdd = () => {
        this.setState({
            currentItem: {},
            actionType: 'create',
            parentId: 0,
            value: undefined,
            modalVisible: true
        })
    };

    onChangeFile = (files) => {
        const {file} = files;

        // console.log("file[0] - ", file[0]);
        // console.log("file.file[0] - ", files.file[0]);

        const data = {
            file: [file[0]],
            fileUpload: true
        }

        ApiRequest(uploadPost, data).then((result => {
            if (result.success) {

                console.log(result.object);
                console.log(result.object[0].id);
                this.setState({
                    uploadFile: true,
                    photoId: result.object[0].id
                })
            } else {
                message.error('Category yaratilmagan yoki internet yuq');
            }
        }))
        this.setState({
            file: files
        })
    };

    //selected begin

    onChange = value => {
        let prId = value;
        if (value === undefined) {
            prId = 0;
        }
        console.log(parseInt(prId));
        this.setState({value: value, parentId: parseInt(prId)});
    };

    onSearch = value => {
        console.log(value);
    }


    onSubmit = (data, id = null) => {

        if (this.state.actionType === 'create') {
            ApiRequest(createCategoryPost, data).then((result => {
                if (result.success) {
                    this.setState({
                        uploadFile: false,
                        modalVisible: false,
                        file: null
                    })
                    this.getAllCategory();
                } else {
                    message.error('Category yaratilmagan yoki internet yuq');
                }
            }))
        } else {
            const url = updateCategory+'/'+id;
            console.log("dataaa - ", data);
            ApiRequest(url, data).then((result => {
                if (result.success) {
                    this.setState({
                        uploadFile: false,
                        modalVisible: false,
                        file: null
                    })
                    this.getAllCategory();
                } else {
                    message.error('Category uzgartirishda xatolik yuz berdi!!!');
                }
            }))
        }
    };

    onCancel = () => {
        console.log("Cancel - Cancel")
        this.setState({modalVisible: false})
    };

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

    handleDelete = key => {
        console.log("key = ", key);
        ApiRequest(deleteCategory+'/'+key).then((result => {
            if (result.success) {
               this.getAllCategory();
            } else {
                message.error('Category uzgartirishda xatolik yuz berdi!!!');
            }
        }))
    };

    handleAdd = key => {
        console.log("Add = ", key);
        this.setState({addPoint:key})
    }

    handleEdit = key => {
        console.log("key = ", key);

        ApiRequest(getCategoryId+'/'+key).then((result => {
            if (result.success) {

                const data = result.object;
                const {fileStorage} = result.object;

                console.log(data);
                console.log(fileStorage);

                const currentItem = {
                    id: data.id,
                    parentId: data.parentId,
                    photoId: fileStorage === null ? '':fileStorage.id,
                    nameUz: data.nameUz,
                    nameRu: data.nameRu
                }

                this.setState({
                    currentItem: currentItem,
                    actionType: 'update',
                    parentId: data.parentId,
                    photoId: fileStorage === null ? '':fileStorage.id,
                    value: data.parentId === 0 ? undefined : data.parentId,
                    modalVisible: true
                })
            } else {
                message.error('Category uzgartirishda xatolik yuz berdi!!!');
            }
        }))
    };

    render() {
        console.log(this.state.addPoint);
        if (this.state.addPoint !== null) {
            return <Redirect to={{
                pathname: `/category/${this.state.addPoint}`,
                state: { id: this.state.addPoint }
            }} />
        }
        const {file, parentId, modalVisible, currentItem, treeData, value, actionType, uploadFile, photoId} = this.state;
        const {onSubmit, handleDelete, handleEdit, onCancel, onChangeFile, onAdd, onChange, onSearch, rowSelection, handleAdd} = this;

        const columns = [
            {
                title: 'Name',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: 'Id',
                dataIndex: 'value',
                key: 'value',
                width: '12%',
            },
            {
                title: 'Parent Id',
                dataIndex: 'parentId',
                width: '30%',
                key: 'parentId',
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) =>
                    treeData.length >= 1 ? (
                        <span>
                            <a className="text-primary mr-2" onClick={() => handleAdd(record.key)}>ProductAddition</a>
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
                <h1>Category</h1>
                {modalVisible &&
                <Modal
                    onSubmit={onSubmit}
                    onCancel={onCancel}
                    onChangeFile={onChangeFile}
                    modalVisible={modalVisible}
                    file={file}
                    onChange={onChange}
                    treeData={treeData}
                    value={value}
                    onSearch={onSearch}
                    actionType={actionType}
                    uploadFile={uploadFile}
                    photoId={photoId}
                    parentId={parentId}
                    currentItem={currentItem}
                />}

                <Row>
                    {/*<Col lg={4} style={{padding: '1rem'}}>*/}
                    {/*    <Link to="/category">*/}
                    {/*        <Card className="card-category">*/}
                    {/*            <img src={cardImg} className="card-img" alt=""/>*/}
                    {/*            <h5>Fast food</h5>*/}
                    {/*        </Card>*/}
                    {/*    </Link>*/}
                    {/*</Col>*/}
                    {/*<Col lg={4} style={{padding: '1rem'}}>*/}
                    {/*    <Card className="card-category">*/}
                    {/*        <img src={cardImg} className="card-img" alt=""/>*/}
                    {/*        <h5>Fast food</h5>*/}
                    {/*    </Card>*/}
                    {/*</Col>*/}
                    {/*<Col lg={4} style={{padding: '1rem'}}>*/}
                    {/*    <Card className="card-category-btn" onClick={onAdd}>*/}
                    {/*        <b className="icon icon-upload"/>*/}
                    {/*    </Card>*/}
                    {/*</Col>*/}
                    {/*<Col lg={24}>*/}
                    {/*    <Tree*/}
                    {/*        className="pl-5 py-4"*/}
                    {/*        showIcon*/}
                    {/*        defaultExpandAll*/}
                    {/*        onSelect={onSelect}*/}
                    {/*        defaultSelectedKeys={['1']}*/}
                    {/*        switcherIcon={<DownOutlined />}*/}
                    {/*        treeData={treeData}*/}
                    {/*    />*/}
                    {/*</Col>*/}
                    <Col lg={24}>
                        <Button onClick={onAdd} className="float-right" type="primary" style={{ marginBottom: 16 }}>
                            Add category
                        </Button>
                    </Col>
                    <Col lg={24} className="mt-3">
                        <Table columns={columns} rowSelection={rowSelection} dataSource={treeData}/>
                    </Col>
                </Row>

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
export default connect(mapStateToProps, mapDispatchToProps)(Category);
