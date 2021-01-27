import { 
    Menu
} from 'antd';
import './navbar.css';

function Navbar(){
    return(
        <div className="navbar-box">
            <Menu mode="horizontal">
                <Menu.Item key="mail">
                首页
                </Menu.Item>
                <Menu.Item key="app">
                CMS
                </Menu.Item>
                <Menu.Item key="doc">
                <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">
                    百度一下
                </a>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar;
