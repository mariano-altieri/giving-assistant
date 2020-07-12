import React, { useState, useEffect } from 'react';
import './App.scss';

import Modal from 'components/Modal';
import Button from './components/Button';

const App = () => {
  const [modalVisibillity, toggleModal] = useState(false);

  const handleClick = () => toggleModal(!modalVisibillity);

  useEffect(() => {
    const hideModalOnEscape = (e) => {
      e.keyCode === 27 && toggleModal(false);
    };

    // You can close the modal by pressing "ESC"
    window.addEventListener('keydown', hideModalOnEscape);

    // Before unmounting, clear up the event
    return () => window.removeEventListener('keydown', hideModalOnEscape);
  }, []);

  return (
    <div className="page">
      <div className="content">
        <Button onClick={handleClick}>See COUPON</Button>
        {modalVisibillity && <Modal onClose={handleClick} />}
      </div>
    </div>
  );
};

export default App;
