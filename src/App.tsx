import React from 'react';
import {BrowserRouter, Route, Routes, NavLink} from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";

const App = () => {

    return (
       <BrowserRouter>
           <div>
               <NavLink to='/users'> Пользователи</NavLink>
               <NavLink to='/todos'>Список </NavLink>
           </div>
               <Routes>
                   <Route  path={'/users'} element={<UserPage/>}  />
                   <Route path={'/todos'} element={<TodosPage/>} />
               </Routes>
       </BrowserRouter>
    );
};

export default App;