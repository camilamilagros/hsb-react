import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';

const Title = styled.p`
    color: #1a202c;
    font-size: 1.5em;
`;

const getDoctors = (times) => {
    return Array.from({ length: times }).map(x => ({ name: (Math.random() + 1).toString(36).substring(5) + (Math.random() + 1).toString(36).substring(5) + ' ' + (Math.random() + 1).toString(36).substring(5) }))
}


const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
        columns={columns}
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <TextField id="search" type="text" placeholder="Filter By Name" aria-label="Search Input" value={filterText} onChange={onFilter} />
        <ClearButton type="button" onClick={onClear}>X</ClearButton>
    </>
);



const DoctorsPage = () => {
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = getDoctors(1).filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
    }, [filterText, resetPaginationToggle]);
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
        },
    ], []);

    return (
        <div>
            <Title>Doctores</Title>
            {/* <Button onClick={() => setHideDirector(!hideDirector)}>Hide Directory Column</Button> */}
            <DataTable
                columns={columns}
                data={filteredItems}
                paginationResetDefaultPage={resetPaginationToggle}
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                persistTableHead
                noHeader={true}
            // pagination
            />
        </div>
    );
};

export default DoctorsPage;