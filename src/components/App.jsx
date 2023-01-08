// import Form from './Form/Form';
// import Form2 from './Form/Form2';
// import User from './User/User';
// import { Filter } from './Filter/Filter';
// import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { PhoneBook } from 'Pages/PhoneBook';
import { LoginPage } from 'Pages/LoginPage';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="phonebook" element={<PhoneBook />} />
      </Route>
    </Routes>
  );
};
