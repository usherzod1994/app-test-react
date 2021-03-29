import React from 'react';
import {Form, Input, Modal, Row, Col, Tabs ,TreeSelect} from 'antd';
import '../../../../styles/modal/Modal.scss';
import {FileUpload} from "../../../../components/CustomComponents";
const { TabPane } = Tabs;
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


const Example = ({
                     onSubmit,
                     onCancel,
                     file,
                     modalVisible,
                     onChangeFile,
                     onChange,
                     treeData,
                     onSearch,
                     uploadFile,
                     photoId,
                     actionType,
                     currentItem,
                     parentId,
                     value}) => {
    const [form] = Form.useForm();


    // Case: Submit button out of Form
    const handleFormSubmit = () => {
        if (uploadFile || parentId !== 0 || actionType === 'update'){
            const formData = form.getFieldsValue();
            form.validateFields()
                .then((values) => {
                    formData['parentId'] = parentId;
                    if (parentId === 0){
                        formData['photoId'] = photoId;
                    }
                    onSubmit(formData, currentItem.id);
                })
                .catch((errorInfo) => {
                    console.log("eee - - eeee = ", errorInfo);
                });
        }
    };

    return (
        <>
            <Modal
                visible={modalVisible}
                onOk={handleFormSubmit}
                onCancel={onCancel}
            >

                <Form form={form} className="p-2">
                    <Row className="mt-2">
                        <Col span={24}>
                            <div className="card-container">
                                <Tabs type="card">
                                    <TabPane tab="Uzbekcha" key="1">
                                        <Row>
                                            <Col className="gutter-row" span={24}>
                                                <Form.Item name="nameUz" initialValue={`${actionType === 'create'?'':currentItem.nameUz}`}  rules={[{required: true, message: "NameUz kiriting!"}]}>
                                                    <Input placeholder="name uz"/>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tab="Russian" key="2">
                                        <Row>
                                            <Col className="gutter-row" span={24}>
                                                <Form.Item name="nameRu" initialValue={`${actionType === 'create'?'':currentItem.nameRu}`} rules={[{required: true, message: "NameRu kiriting!"}]}>
                                                    <Input placeholder="name ru"/>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </Col>
                        <Col span={24}>
                            <Form.Item>
                                <div className="mb-1">Qaysi categoory ichiga yaratmoqchisiz</div>
                                <TreeSelect
                                    showSearch
                                    style={{ width: '100%' }}
                                    value={value}
                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                    placeholder="Please select"
                                    allowClear
                                    treeDefaultExpandAll
                                    onChange={onChange}
                                    treeData={treeData}
                                    onSearch={onSearch}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={24} className={`${parentId === 0 ? '':'d-none'}`}>
                            <Form.Item>
                                <FileUpload
                                    name={"file"}
                                    title={"Photo"}
                                    types={["image/jpeg",
                                        "image/png",
                                        "image/jpg"]}
                                    size={50}
                                    file={file}
                                    onChangeFile={onChangeFile}
                                    formItemLayout={formItemLayout}
                                    colLayout={ColProps}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

            </Modal>
        </>
    );
};

export default Example;