import React from 'react';
import { Route } from "react-router-dom";
import DoctorsIndex from '../components/DoctorsIndex';
import Doctor from '../components/Doctor';

const DoctorsPage = ({ match }) => (
    <>
        <Route exact path={`${match.path}`} component={DoctorsIndex} />
        <Route path={`${match.path}/:doctorId`} component={Doctor} />
    </>
);

export default DoctorsPage;