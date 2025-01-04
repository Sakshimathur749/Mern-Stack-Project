import { useEffect, useState } from 'react';
import { Package } from '../../types/package';

const TableThree = () => {
  const [packageData, setPackageData] = useState<Package[]>([]);
   const [error, setError] = useState<string | null>(null);
      useEffect(() => {
        const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/form/equieryform", {
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
        } catch (error: any) {
          setError(error.message || 'Something went wrong');
        }
      };
    
        fetchData();
      }, []);
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex flex-col">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-2 dark:bg-meta-4">
            <tr>
              <th className="p-2.5 text-left text-sm font-medium uppercase xsm:text-base">
                First Name
              </th>
              <th className="p-2.5 text-center text-sm font-medium uppercase xsm:text-base">
                Last Name
              </th>
              <th className="p-2.5 text-center text-sm font-medium uppercase xsm:text-base">
                Phone No.
              </th>
              <th className="p-2.5 text-center sm:table-cell text-sm font-medium uppercase xsm:text-base">
                Email
              </th>
              <th className="p-2.5 text-center sm:table-cell text-sm font-medium uppercase xsm:text-base">
                Message
              </th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            {packageData.length > 0 ? (
              packageData.map((Package, key) => (
                <tr key={key}  className='bg-white'  >
                  <td className="p-2.5 text-left">
                    {Package.firstname.length > 1 ? Package.firstname : '-'}
                  </td>
                  <td className="p-2.5 text-center">
                    {Package.lastname.length > 1 ? Package.lastname : '-'}
                  </td>
                  <td className="p-2.5 text-center">
                    {Package.phone.length > 1 ? Package.phone : '-'}
                  </td>
                  <td className=" p-2.5 text-center ">
                    {Package.email.length > 1 ? Package.email : '-'}
                  </td>
                  <td className=" p-2.5 text-center ">
                    {Package.message.length > 1 ? Package.message : '-'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-2.5 text-center">
                  No contact data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
