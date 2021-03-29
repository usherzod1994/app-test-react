import React from 'react';
import {Form, Input, Modal, Row, Col, Tabs, Select } from 'antd';
import '../../../../styles/modal/Modal.scss';

import {MultipleFileUpload} from "../../../../components/CustomComponents";

const {TabPane} = Tabs;
const { Option } = Select;
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


const CategoryItemModal = ({
                               onSubmit,
                               onCancel,
                               files,
                               modalVisible,
                               onChangeAnyFile,
                               actionType,
                               category,
                               onChange,
                               onBlur,
                               onFocus,
                               onSearch,
                               categoryId
                           }) => {
    const [form] = Form.useForm();


    // Case: Submit button out of Form
    const handleFormSubmit = () => {
        const formData = form.getFieldsValue();
        form.validateFields()
            .then((values) => {
                let currentFileList = [];
                formData['files'] = [];
                formData['fileUpload'] = true;
                formData['type'] = true;
                formData['categoryId'] = categoryId;
                if (actionType === "create") {
                    if (files.length !== 0) {
                        files.map((item) => {
                            if (item.fileStatus === "update") {
                                return formData['files'].push(item)
                            }
                            return item;
                        });
                    }
                }

                currentFileList.push({name: "file1", file: formData['files'][0] ? {0: formData['files'][0].file} : {}});
                currentFileList.push({name: "file2", file: formData['files'][1] ? {0: formData['files'][1].file} : {}});
                currentFileList.push({name: "file3", file: formData['files'][2] ? {0: formData['files'][2].file} : {}});
                formData['file'] = currentFileList;
                onSubmit(formData);
            })
            .catch((errorInfo) => {
                console.log("eee - - eeee = ", errorInfo);
            });
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
                        <div className="card-container">
                            <Tabs type="card">
                                <TabPane tab="Uzbekcha" key="1">
                                    <Col className="gutter-row" span={24}>
                                        <Form.Item name="nameUz"
                                                   rules={[{required: true, message: "NameUz kiriting!"}]}>
                                            <Input placeholder="name uz"/>
                                        </Form.Item>
                                    </Col>
                                    <Col className="gutter-row" span={24}>
                                        <Form.Item name="descriptionUz">
                                            <Input.TextArea placeholder="descriptionUz"/>
                                        </Form.Item>
                                    </Col>
                                </TabPane>
                                <TabPane tab="Russian" key="2">
                                    <Col className="gutter-row" span={24}>
                                        <Form.Item name="nameRu"
                                                   rules={[{required: true, message: "NameRu kiriting!"}]}>
                                            <Input placeholder="name ru"/>
                                        </Form.Item>
                                    </Col>
                                    <Col className="gutter-row" span={24}>
                                        <Form.Item name="descriptionRu">
                                            <Input.TextArea placeholder="descriptionRu"/>
                                        </Form.Item>
                                    </Col>
                                </TabPane>
                            </Tabs>
                        </div>
                        <Col span={24}>
                            <Form.Item label="Category Id">
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    {category.map((item, index) => {
                                        return <Option key={index} value={item.id}>{item.nameUz}</Option>
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Photos">
                                <MultipleFileUpload
                                    name={"files"}
                                    files={files}
                                    types={["image/jpeg",
                                        "image/png",
                                        "image/jpg"]}
                                    size={50}
                                    fileUploadCount={3}
                                    title={""}
                                    formItemLayout={formItemLayout}
                                    colLayout={ColProps}
                                    onChangeFile={onChangeAnyFile}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

            </Modal>
        </>
    );
};

export default CategoryItemModal;