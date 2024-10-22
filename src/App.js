import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Admin from '~/pages/Admin';
import { Fragment } from 'react';
// import Advertisment from '~/pages/Advertisment';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout

            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout><Page /></Layout>
                }
              />
            );
          })}
          {/* <Route path="/Admin" element={<Admin />} />
          <Route path="/Ad" element={<Advertisment />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
