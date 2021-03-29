import React, {Component} from 'react';
import { Layout, Menu, Divider} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import './MainApp.scss';
import App from '../../routes/index';
import {Link} from "react-router-dom";

const { Header, Sider, Content } = Layout;


class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        const {match} = this.props;
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    {
                        this.state.collapsed ? <div className="logo2">
                            <div className="logoCricle2">
                                <div className="logoIcon2"></div>
                            </div>
                        </div>:
                            <div className="logo">
                                <div className="logoCricle">
                                    <div className="logoIcon"></div>
                                </div>
                                <h6 className="text-center text-white mt-1">Yrmak</h6>
                                <p className="text-center text-white">mazali taomlar yetqazib berish</p>
                            <Divider style={{borderColor: '#495B6C'}}/>
                            </div>
                    }

                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to="/categories">
                                Category
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>
                            <Link to="/product">
                                Product
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                            <Link to="/category-item">
                                CategoryItem
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<VideoCameraOutlined />}>
                            <Link to="/settings">
                                Settings
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<UploadOutlined />}>
                            <Link to="/login">
                                Login
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background-img"
                        style={{
                            // margin: '24px 16px',
                            padding: 24,
                            minHeight: '91vh',
                        }}
                    >
                        <App match={match}/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default MainApp;

