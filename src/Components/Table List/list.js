import React from 'react';
import { Rockets } from '../Rockets/rockets';
import { UpcomingLaunches } from '../Upcoming Launches/upcoming';
import { PastLaunches } from '../Past Launches/past';
import './list.css';


export const List = ()  => {


    return(
        <div className = "Tables-view-container">
            <Rockets />
            <UpcomingLaunches />
            <PastLaunches />
        </div>
    )
}