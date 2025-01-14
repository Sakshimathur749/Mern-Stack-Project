import Blog from '../components/Blog/Blog';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

const CreateBlog = () => {
  return (
    <>
      <Breadcrumb pageName="Blog" />
      <Blog/>
    </>
  );
};

export default CreateBlog;
