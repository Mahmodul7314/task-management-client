import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateTask = () => {
    const {id} = useParams();
  

    
    return (
        <div>
         
             <div>
                  <div className='lg:pl-40'> 
                  <h2 className='text-3xl text-gray-600 py-14'>Create Task</h2>
                  <form  class="space-y-4 max-w-[34rem]">
                  <div>
                    <label for="title" class="block mb-1">Title</label>
                    <input type="text" id="title" name="title"  class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required="" />
                    </div>

                    <div>
                        <label for="description" class="block mb-1">Description</label>
                        <textarea id="description" name="description"  class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required="">
                            </textarea>
                            </div>
                    <div><label for="deadline" class="block mb-1">Deadline</label>
                    <input type="date" id="deadline" name="deadline"  class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" required="" />

                    </div>
                    <div><label for="priority" class="block mb-1">Priority</label>
                    <select id="priority" name="priority" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500">
                        <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    </select></div>
                    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Update Task</button>
                    </form>
        </div>
            
        </div>
        </div>
    );
};

export default UpdateTask;