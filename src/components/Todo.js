import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [ modalIsOpen, setModalIsOpen] = useState(false); // creates a state React is aware of

  function deleteHandler() {
      setModalIsOpen(true);
  }

  function closeModalHandler() {
      setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      { modalIsOpen ? <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> : null } { /* ternary operation */ }
      { modalIsOpen && <Backdrop onCancel={closeModalHandler} /> } { /* they are equivalent */ }
    </div>
  );
}

export default Todo;
