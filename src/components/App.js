import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  function Parent() {
    const [showModal, setShowModal] = useState(false);

    return (
      <div className="parent">
        <h1>Parent Component</h1>
        <Child showModal={showModal} setShowModal={setShowModal} />
      </div>
    );
  }

  function Child({ showModal, setShowModal }) {
    return (
      <div className="child">
        <h2>Child Component</h2>
        <button onClick={() => setShowModal(!showModal)}>Show Modal</button>
        {showModal && (
          <div className="modal">
            <h3>Modal Content</h3>
            <p>This is the modal content.</p>
          </div>
        )}
      </div>
    );
  }

  return <Parent />;
};

export default App;
