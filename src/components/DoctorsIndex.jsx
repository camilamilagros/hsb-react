import React from 'react';
import styled from 'styled-components';
import DataTable from 'react-data-table-component';
import { FaRegEye } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import {
    Link
} from "react-router-dom";

const Title = styled.p`
    color: #1a202c;
    font-size: 1.5em;
`;

const ActionButton = styled(Link)`
    color: #1bb394;
    cursor: pointer;
`;

const getDoctors = (times) => {
    return Array.from({ length: times }).map(x => ({
        name: (Math.random() + 1).toString(36).substring(5) + (Math.random() + 1).toString(36).substring(5) + ' ' + (Math.random() + 1).toString(36).substring(5),
        actions: <ActionButton to="/doctores/1"><FaRegEye /> </ActionButton>
    }))
}

const DoctorsIndex = () => {
    const sortIcon = <IoIosArrowDown />;
    const doctors = getDoctors(10);

    const columns = React.useMemo(() => [
        {
            name: 'Nombre',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Acciones',
            selector: 'actions',
            sortable: false,
            width: "10rem",
            center: true
        },
    ], []);

    return (
        <div>
            <Title>Doctores</Title>
            <DataTable
                columns={columns}
                data={doctors}
                persistTableHead
                noHeader={true}
                pagination
                style={{ fontSize: "1.5rem" }}
                sortIcon={sortIcon}
            />
        </div>
    );
};

export default DoctorsIndex;