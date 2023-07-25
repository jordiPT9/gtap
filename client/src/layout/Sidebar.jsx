import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css'


const Sidebar = ({ sections, title }) => {
  const menuItems = () => {
    return sections.map(section => {
      if (section.subSections) {
        const children = section.subSections.map(subSection => {
          return {
            label: <Link to={subSection.link}>{subSection.title}</Link>,
            key: subSection.key,
            icon: subSection.icon,
          }
        });

        return {
          key: section.key,
          icon: section.icon,
          label: section.title,
          children
        }
      } else {
        return {
          label: <Link to={section.link}>{section.title}</Link>,
          key: section.key,
          icon: section.icon,
        }
      }
    });
  }
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <Menu theme="dark" mode="inline" items={menuItems()} />
    </>
  );
};

export default Sidebar;
