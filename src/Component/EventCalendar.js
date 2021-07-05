import React from 'react';
import Header from './Header';
import Leftmenu from './Leftmenu';
import DataCalendar from './DataCalendar';
import MemberStatus from './MemberStatus';


const EventCalendar = () => {
    return (
        <div>
             <Header/>
        <Leftmenu/>
     
       <DataCalendar/>
      
        <MemberStatus/>
        </div>
    );
};

export default EventCalendar;