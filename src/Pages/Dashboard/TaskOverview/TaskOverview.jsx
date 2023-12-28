import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const TaskOverview = () => {
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
            <div className="bg-white p-8 rounded-lg  h-screen">
    <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold">Task Overview</h1>
        <div className="fixed z-index-9999 pointer-events-none"></div>
    </div>
    <div class="grid lg:grid-cols-3 grid-cols-1 lg:gap-16 gap-2">
        <div class="lg:w-64 md:full w-full">
        <div class="lg:w-64  w-full">
            <div class="bg-slate-500 flex items-center h-12 pl-4 max-h-full rounded-md uppercase text-sm text-black">
                <div>Todo</div>
                <div class="ml-2 bg-white w-5 h-5 text-black rounded-full grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1">{task.length}</div>

                </div>
                <div className="max-h-full space-y-4 pt-8">
                {
                    task.map((task)=><div className="card border border-blue-500 ">
                    <div className="card-body ">
                      <h2 className="2xl font-bold">{task.title}</h2>
                      <p>{task.description}</p>
                      <p>{task.deadline}</p>
                     
                      <div className=" flex justify-between">
                      <p>{task.priority}</p>
                      <button onClick={()=> handleDelete(task._id)}
             className="btn btn-ghost "><FaTrash className="text-red-600 bg-white"></FaTrash>
              </button>
                    
                      </div>
                    </div>
                  </div>)
                }
                </div>
            
      </div>
        </div>
        <div class="w-64">
        <div class="w-64"><div class="bg-purple-500 flex items-center h-12 pl-4 rounded-md uppercase text-sm text-black"><div>Ongoing</div><div class="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">0</div></div></div>
        </div>
        <div class="w-64">
        <div class="w-64"><div class="bg-green-500 flex items-center h-12 pl-4 rounded-md uppercase text-sm text-black"><div>Completed</div><div class="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">0</div></div></div>
        </div>
    </div>
</div>
        </div>
    );
};

export default TaskOverview;