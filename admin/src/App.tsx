import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/LoginIn';
import SignUp from './pages/Authentication/SignUp';
import ECommerce from './pages/Dashboard/ECommerce';
import Enquiery from './pages/Form/Enquiery';
import GetaQuote from './pages/Form/GetaQuote';
import Contact from './pages/Form/Contact';
import CreateLogin from './pages/CreateBlog';
import DefaultLayout from './layout/DefaultLayout';
import Postedblog from './pages/Postedblog';
import Admin from './pages/AdminLogin';
import EditBlog from './components/Blog/Editblog';
import JobApplication from './pages/Form/JobApplication';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  if (!isAuthenticated && pathname !== '/auth/signin') {
    return <Navigate to="/auth/signin" />;
  }
  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route path='/dashboard' element={<ECommerce />}/>
        <Route path="/edit-blog/:id" element={<EditBlog />} />
        <Route path="/enquieryform" element={<Enquiery />} />
        <Route path="/getaquote" element={<GetaQuote />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/job-application" element={<JobApplication />} />
        <Route path="/createblog" element={<CreateLogin />} />
        <Route path="/blogs" element={<Postedblog />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;