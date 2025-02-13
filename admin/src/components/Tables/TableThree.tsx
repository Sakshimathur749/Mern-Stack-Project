import { useEffect, useState } from 'react';
import { Package } from '../../types/package';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-select-dt';
import '../Blog/Blog.css'
DataTable.use(DT);
import{ API_URL }from '../../url.ts'
const TableThree = () => {
  const [packageData, setPackageData] = useState<Package[]>([]);
   const [error, setError] = useState<string | null>(null);
   const [message, setMessage] = useState<{ type: string, text: string } | null>(null); 
      useEffect(() => {
        const fetchData = async () => {
        try {
          const response = await fetch(`${API_URL}/form/equieryform`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              }
            });
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setPackageData(data); 
          setMessage({ type: 'success', text: 'Data fetched successfully!' });
        } catch (error: any) {
          setMessage({ type: 'error', text: 'Failed to fetch data' }); 
          setError(error.message || 'Something went wrong');
        }
      };
    
        fetchData();
      }, []);
      useEffect(() => {
        if (message) {
          const timer = setTimeout(() => {
            setMessage(null); 
          }, 1000);
        return () => clearTimeout(timer);
        }
      }, [message]);
      const columns = [
        { data: 'firstname' },
        { data: 'phone' },
        { data: 'email' },
        { data: 'message' },
      ];
      const options = {
          paging: true,
        searching: true,
        ordering: true,
        info: true,
       
        };
  return (
    <div className="mt-5">
{message && message.type === 'success' && (
        <div className='successMessage'>
          {message.text}
        </div>
      )}
      {message && message.type === 'error' && (
        <div className='ErrorMessage'>
          {message.text}
        </div>
      )}

      {error && <div className="error-message">{error}</div>}
    <DataTable  columns={columns}  data={packageData} options={options}>
    <thead>
          <tr>
              <th>Name</th>
              <th>Phone no</th>
              <th>Email</th>
              <th>Message</th>
          </tr>
          </thead>
    </DataTable>
    </div>
  );
};

export default TableThree;