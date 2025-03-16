import { useState } from "react";
import './App.css';
import Modal from "./Modal/Modal";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (  
<div className="flex flex-col items-center justify-center min-h-screen">
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg" onClick={() => setIsModalOpen(true)}>
        Open Form
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
