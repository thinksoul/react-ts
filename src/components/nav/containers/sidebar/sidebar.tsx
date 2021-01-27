import { 
    Menu
} from 'antd';
import './sidebar.css'

const { SubMenu } = Menu;

function Sidebar(){
    return(
        <div className="sidebar-box">
        <Menu
          mode="inline"
        >
          <Menu.Item key="1">
            技能
          </Menu.Item>
          <Menu.Item key="2">
            装备
          </Menu.Item>
          <Menu.Item key="3">
            职业
          </Menu.Item>
        </Menu>
      </div>
    )
}

export default Sidebar;
