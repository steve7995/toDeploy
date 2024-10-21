import React from "react";
import { useState,useEffect,useContext } from "react";
import Modal from "./Modal";
import { UserContext } from "../context/UserContext";
import axios from 'axios';
// import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
const Content = () => {
  const {user,setUser} = useContext(UserContext)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const fetchTasks = async () => {
 try {
    const response = await axios.get('https://todeploy.onrender.com/tasks');
    setTasks(response.data);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
  };
  
  useEffect(() => {
    fetchTasks();
  }, [])
 const handleAddTask = async (taskContent) => {
    if (currentTaskIndex !== null) {
      // Update existing task
      await axios.put(`https://todeploy.onrender.com/tasks/${currentTaskId}`, { content: taskContent });
    } else {
      // Add new task
      await axios.post('https://todeploy.onrender.com/tasks', { content: taskContent });
    }
    resetModal();
    fetchTasks(); // Refresh tasks
  };

  const handleEditTask = (index) => {
    setCurrentTaskIndex(index);
    setCurrentTaskId(tasks[index]._id);
    setIsModalOpen(true);
  };

  const handleDeleteTask = async (index) => {
    const taskId = tasks[index]._id;
    await axios.delete(`https://todeploy.onrender.com/tasks/${taskId}`);
    fetchTasks(); // Refresh tasks
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setCurrentTaskIndex(null);
    setCurrentTaskId(null);
  };
  return (
    
    <> {user ? <div>
   
      <div className="p-5 w-1/2 m-auto flex justify-around">
        {" "}
        <h1 className="text-2xl font-bold mb-4">Task List</h1>
        <button
          onClick={() => {
            resetModal();
            setIsModalOpen(true);
          }}
          className=" bg-blue-400 text-white rounded p-2 mb-4 hover:bg-blue-700 cursor-pointer "
        >
          Add Task
        </button>
      </div>

      <div className="w-5/6 m-auto pt-4 grid grid-cols-4 gap-5 ">
        {tasks.map((task, index) => (
          <div className="  bg-blue-200 h-40" key={task._id}>
            <div className="flex flex-col">
              {" "}
              <div className="p-4 ">{task.content}</div>
              <div className=" flex justify-end gap-2">
                {" "}
                <button
                  onClick={() => handleEditTask(index)}
                  className="bg-blue-500 text-white rounded p-2 mb-4 hover:bg-blue-400 cursor-pointer mr-2"
                >
                  edit
                </button>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="bg-red-500 text-white rounded p-2 mb-4 mr-2 hover:bg-red-400 cursor-pointer"
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={resetModal}
        onAddTask={handleAddTask}
       initialContent={currentTaskIndex !== null ? tasks[currentTaskIndex]?.content : ''}
      />
      
    </div> :
      <div  className="text-2xl text-red-500 font-bold mb-4 w-1/2 m-auto">
        <h1>please login to use  task management software</h1>
      
      </div> }   </>

  );
};

export default Content;
