import React from "react";
import { Form, Input, Button, Space, Modal } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const ProductAdditionModal = ({    modalVisible,
                   onCancel,
                   onSubmit,
                    id
                }) =>{
    const [form] = Form.useForm();

    const handleFormSubmit = () => {
            const formData = form.getFieldsValue();
            form.validateFields()
                .then((values) => {
                    onSubmit(formData.productAdditions);
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
                width={700}
            >
                <Form form={form}  name="dynamic_form_nest_item" autoComplete="off">
                    <Form.List name="productAdditions">
                        {(fields, { add, remove }) => {
                            return (
                                <div>
                                    {fields.map(field => (
                                        <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'nameUz']}
                                                fieldKey={[field.fieldKey, 'nameUz']}
                                                rules={[{ required: true, message: 'Missing nameUz name' }]}
                                            >
                                                <Input placeholder="nameUz" />
                                            </Form.Item>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'nameRu']}
                                                fieldKey={[field.fieldKey, 'nameRu']}
                                                rules={[{ required: true, message: 'Missing nameRu name' }]}
                                            >
                                                <Input placeholder="nameRu" />
                                            </Form.Item>
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'type']}
                                                fieldKey={[field.fieldKey, 'type']}
                                                rules={[{ required: false, message: 'Missing type name' }]}
                                            >
                                                <Input placeholder="Type" />
                                            </Form.Item>
                                            <Form.Item
                                                {...field}
                                                className="d-none"
                                                name={[field.name, 'categoryId']}
                                                fieldKey={[field.fieldKey, 'categoryId']}
                                                initialValue={id}
                                                rules={[{ required: false, message: 'Missing type name' }]}
                                            >
                                                <Input placeholder="categoryId" disabled/>
                                            </Form.Item>

                                            <MinusCircleOutlined
                                                onClick={() => {
                                                    remove(field.name);
                                                }}
                                            />
                                        </Space>
                                    ))}

                                    <Form.Item>
                                        <Button
                                            type="dashed"
                                            onClick={() => {
                                                add();
                                            }}
                                            block
                                        >
                                            <PlusOutlined /> Add field
                                        </Button>
                                    </Form.Item>
                                </div>
                            );
                        }}
                    </Form.List>
                </Form>
            </Modal>
        </>
    );


}

export default ProductAdditionModal;