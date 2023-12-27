import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewTask = () => {

  const [task, setTask] = useState([]);

  useEffect(() => {
    fetch('https://clear-xi.vercel.app/task')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setTask(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle the error as needed, e.g., set an error state or show a message to the user.
      });
  }, []);
  

const handleDelete =id=> {
    const proceed = confirm('Are you sure you want to delete');
    if (proceed) {
      fetch(`https://clear-xi.vercel.app/task/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire(
              'Success!',
              'Your Task is successfully deleted!',
              'success'
            );
  
            const remaining = task.filter(task => task._id !== id); 
            setTask(remaining);
          }
        })
        .catch(error => {
          console.error('Error:', error.message);
          // Handle errors here
        });
    }
  };
  
    return (
        <div>
         <h2 className='text-3xl text-center text-gray-600 py-14 lg:pl-14'>All your created task </h2>
         <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Description</th>
        <th>Deadline</th>
        <th>Priority</th>
        <th>Status</th>
        <th></th>

        <th>Action</th>
      </tr>
    </thead>
    <tbody>
       {
        task.map((task, index )=>  <tr key={task._id}>
            <th>{index+1}</th>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.deadline}</td>
            <td>{task.priority}</td>
            <td>{task.status}</td>
            
            {/* <td>
            <NavLink to={`/dashboard/updatetask/${task._id}`} className="btn-md">
              <span className="btn w-14 bg-yellow-300 h-4 text-sm text-green-600">Update</span>
            </NavLink>
              
        
            </td> */}
            <td>
            <button onClick={()=> handleDelete(task._id)}
             className="btn btn-ghost "><FaTrash className="text-red-600 bg-white"></FaTrash>
              </button>
            </td>
          </tr>)
       }
    </tbody>
  </table>
        </div>
    );
};

export default ViewTask;