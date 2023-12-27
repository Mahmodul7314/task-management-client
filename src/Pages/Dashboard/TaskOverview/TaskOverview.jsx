import React from 'react';

const TaskOverview = () => {
    return (
        <div>
            <div className="bg-white p-8 rounded-lg shadow-md h-screen">
    <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold">Task Overview</h1>
        <div className="fixed z-index-9999 pointer-events-none"></div>
    </div>
    <div class="flex gap-16">
        <div class="w-64">
        <div class="w-64"><div class="bg-slate-500 flex items-center h-12 pl-4 rounded-md uppercase text-sm text-black"><div>Todo</div><div class="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">0</div></div>
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