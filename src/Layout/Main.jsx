import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Share/Footer/Footer';
import NavigationBer from '../Component/Share/NavigationBer/NavigationBer';

const Main = () => {
    return (
        <div>
            <NavigationBer></NavigationBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;