import { Routes, Route } from 'react-router-dom';

const MainContent = ({ sections }) => {
  return (
    <Routes>
      {sections.map((item) =>
        item.subSections ? (
          item.subSections.map((subItem) => (
            <Route key={subItem.key} path={subItem.link} element={subItem.element} />
          ))
        ) : (
          <Route key={item.key} path={item.link} element={item.element} />
        )
      )}
    </Routes>
  );
};

export default MainContent;
