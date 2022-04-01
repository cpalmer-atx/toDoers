import { useState } from 'react';
import Modal from '../Modal/Modal';
import Header from '../Header/Header';
import Content from '../Content/Content';

import './App.scss';

const App = () => {
  
  const [ viewModal, setViewModal ] = useState(false);

  return (
    <>
      { viewModal && <Modal viewModal={viewModal} toggleModal={setViewModal} /> }
      <Header />
      <Content viewModal={viewModal} toggleModal={setViewModal} />
    </>
  );
}

export default App;
