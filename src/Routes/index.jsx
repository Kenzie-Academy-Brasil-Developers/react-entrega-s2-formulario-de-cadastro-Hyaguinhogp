import {Navigate, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const RoutesMain = () => {
    return(
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/users/:id' element={<Home />} />
            <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
    )
}

export default RoutesMain;