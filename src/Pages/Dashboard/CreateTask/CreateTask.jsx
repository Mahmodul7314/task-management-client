import React from 'react';
import Swal from 'sweetalert2';

const CreateTask = () => {
  
    const handleTaskSubmit =e =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const task={title, description,deadline,priority};
        console.log(task)
        fetch('https://clear-xi.vercel.app/task',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(task)
        })
        .then(res => res.json())
        .then(data =>{
           if(data.insertedId){
            Swal.fire({
                title: 'Sucess!',
                text: 'Task Added Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
           }
        })
    }
    return (
        <div>
                  <div className='lg:pl-40'> 
                  <h2 className='text-3xl text-gray-600 py-14'>Create Task</h2>
                  <form onSubmit={handleTaskSubmit} class="space-y-4 max-w-[34rem]">
                  <div>
                    <label for="title" class="block mb-1">Title</label>
                    <input type="text" id="title" name="title" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required="" />
                    </div>

                    <div>
                        <label for="description" class="block mb-1">Description</label>
                        <textarea id="description" name="description" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required="">
                            </textarea>
                            </div>
                    <div><label for="deadline" class="block mb-1">Deadline</label>
                    <input type="date" id="deadline" name="deadline" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required="" />

                    </div>
                    <div><label for="priority" class="block mb-1">Priority</label>
                    <select id="priority" name="priority" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500">
                        <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    </select></div>
                    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Create Task</button>
                    </form>
        </div>
            
        </div>
    );
};

export default CreateTask;