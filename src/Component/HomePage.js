import React from 'react';
import Header from './Header';
import Leftmenu from './Leftmenu';
import CardBar from './CardBar';
import MemberStatus from './MemberStatus';


const HomePage = () => {
    return (
        <div>
             <Header/>
        <Leftmenu/>
        <CardBar/>
        <MemberStatus/>
        </div>
    );
};

export default HomePage;