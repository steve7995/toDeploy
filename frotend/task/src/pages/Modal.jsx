import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, onAddTask, initialContent }) => {
  const [taskContent, setTaskContent] = useState('');

  useEffect(() => {
    setTaskContent(initialContent);
  }, [initialContent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(taskContent);
    setTaskContent('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg p-6 z-10">
        {/* <h2 className="text-lg font-bold mb-4">Add Task</h2> */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={taskContent}
            onChange={(e) => setTaskContent(e.target.value)}
            placeholder="Enter task content"
            className="border border-gray-300 rounded p-2 w-full mb-4"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
          >
            {initialContent ? 'Update Task' : 'Add Task'}
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-gray-500 hover:text-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
