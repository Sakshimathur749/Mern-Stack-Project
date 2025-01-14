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
import Admin from './pages/AdminLogin';
import EditBlog from './components/Blog/Editblog';
import JobApplication from './pages/Form/JobApplication';
import ProtectedRoute from './components/Protectedroute';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  const token = localStorage.getItem('token');

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
    return <Navigate to="/auth/signin" />;
  }
  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/auth/signin" element={<SignIn />} />

      <Route element={<DefaultLayout />}>
        <Route path='/dashboard' element={<ProtectedRoute element={<ECommerce />} />} />
        <Route path="/edit-blog/:id" element={<ProtectedRoute element={<EditBlog />} />} />
        <Route path="/enquieryform" element={<ProtectedRoute element={<Enquiery />} />} />
        <Route path="/getaquote" element={<ProtectedRoute element={<GetaQuote />} />} />
        <Route path="/contact" element={<ProtectedRoute element={<Contact />} />} />
        <Route path="/job-application" element={<ProtectedRoute element={<JobApplication />} />} />
        <Route path="/createblog" element={<ProtectedRoute element={<CreateLogin />} />} />
        <Route path="/blogs" element={<ProtectedRoute element={<Postedblog />} />} />
        <Route path="/admin" element={<ProtectedRoute element={<Admin />} />} />
      </Route>
    </Routes>
  );
}

export default App;