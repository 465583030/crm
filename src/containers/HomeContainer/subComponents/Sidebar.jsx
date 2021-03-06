import React from 'react'
import { Layout, Menu, Icon, Switch } from 'antd'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

// scss
import styles from '../style'

const { Sider } = Layout

const Sidebar = ({
    name,
    menuKeys,
    collapsed,
    sideInline,
    changeTheme
}) => (
    <Sider
        collapsed={collapsed}
        className={sideInline ? styles.inline : ''}
    >
        <div className={collapsed ? styles.logoSmall : styles.logoBig}>
            {name}
        </div>
        <Menu
            mode="inline"
            selectedKeys={menuKeys}
            defaultSelectedKeys={['1']}
            theme={sideInline ? 'inline' : 'dark'}
        >
            <Menu.Item key="1">
                <Link to="/dashboard">
                    <Icon type="compass" />
                    <span>仪盘表</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/user">
                    <Icon type="user" />
                    <span>员工管理</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/business">
                    <Icon type="pay-circle" />
                    <span>商机</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link to="/visit">
                    <Icon type="bell" />
                    <span>拜访</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="5">
                <Link to="/contract">
                    <Icon type="solution" />
                    <span>合同</span>
                </Link>
            </Menu.Item>
        </Menu>
        {
            !collapsed &&
            <div className={sideInline ? styles.light : styles.dark}>
                <span><Icon type="bulb" className={styles.bulb} />选择主题</span>
                <Switch onChange={changeTheme} defaultChecked={sideInline} checkedChildren="Light" unCheckedChildren="Dark" />
            </div>
        }
    </Sider>
)

Sidebar.propTypes = {
    name: PropTypes.string,
    collapsed: PropTypes.bool,
    menuKeys: PropTypes.array,
    sideInline: PropTypes.bool,
    changeTheme: PropTypes.func,
}

export default Sidebar