import { useEffect, useState } from 'react';
import { BRAND } from '../../types/brand';

const TableOne = () => {
  const [brandData, setBrandData] = useState<BRAND[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setBrandData(data); 
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
                Subject
              </th>
              <th className="p-2.5 text-center sm:table-cell text-sm font-medium uppercase xsm:text-base">
                Message
              </th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            {brandData.length > 0 ? (
              brandData.map((brand, key) => (
                <tr key={key}  className='bg-white '  >
                  <td className="p-2.5 text-left">
                    {brand.firstname.length > 1 ? brand.firstname : '-'}
                  </td>
                  <td className="p-2.5 text-center">
                    {brand.lastname.length > 1 ? brand.lastname : '-'}
                  </td>
                  <td className="p-2.5 text-center">
                    {brand.phone.length > 1 ? brand.phone : '-'}
                  </td>
                  <td className=" p-2.5 text-center ">
                    {brand.email.length > 1 ? brand.email : '-'}
                  </td>
                  <td className=" p-2.5 text-center ">
                    {brand.subject.length > 1 ? brand.email : '-'}
                  </td>
                  <td className=" p-2.5 text-center ">
                    {brand.message.length > 1 ? brand.message : '-'}
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

export default TableOne;
