import { Route, Routes } from "react-router-dom";
import routes from "route";

function App() {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={route.element}
            key={route.uniqueKey}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
