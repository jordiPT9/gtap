import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css'

const Sidebar = ({ sections, title }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <Menu theme="dark" mode="inline">
        {sections.map((item) => {
          if (item.subSections) {
            return (
              <Menu.SubMenu key={item.key} title={item.title} icon={item.icon}>
                {item.subSections.map((subItem) => (
                  <Menu.Item key={subItem.key} icon={subItem.icon}>
                    <Link to={subItem.link}>{subItem.title}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            );
          } else {
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.link}>{item.title}</Link>
              </Menu.Item>
            );
          }
        })}
      </Menu>
    </>
  );
};

export default Sidebar;
