import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import SignIn from './pages/Authentication/LoginIn';
import ECommerce from './pages/Dashboard/ECommerce';
import Enquiery from './pages/Form/Enquiery';
import GetaQuote from './pages/Form/GetaQuote';
import Contact from './pages/Form/Contact';
import CreateLogin from './pages/CreateBlog';
import DefaultLayout from './layout/DefaultLayout';
import Postedblog from './pages/Postedblog';
import EditBlog from './components/Blog/Editblog';
import JobApplication from './pages/Form/JobApplication';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  const token = localStorage.getItem('token');
  const isAuthRoute = pathname === '/auth/signin';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  if (token && pathname === '/auth/signin') {
    return <Navigate to="/dashboard" />;
  }
  if (!token && pathname !== '/auth/signin') {
    return <Navigate to="/auth/signin"/>;
  }
  return loading ? (
    <Loader />
  ) : (
    isAuthRoute ? (
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
      </Routes>
    ): (
    <DefaultLayout >
    <Routes>
        <Route path='/dashboard' element={<ECommerce />} />
        <Route path="/edit-blog/:id" element={<EditBlog />} />
        <Route path="/enquieryform" element={<Enquiery />} />
        <Route path="/getaquote" element={<GetaQuote />}  />
        <Route path="/contact" element={<Contact />} />
        <Route path="/job-application" element={<JobApplication />} />
        <Route path="/createblog" element={<CreateLogin />} />
        <Route path="/blogs" element={<Postedblog />}  />
    </Routes>
    </DefaultLayout>
  ));
}

export default App;