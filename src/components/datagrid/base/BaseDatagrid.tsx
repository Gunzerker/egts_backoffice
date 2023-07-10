
import { Button, Switch } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import BackofficeService from 'src/services/BackofficeService';

export interface IBaseDatagrid {
  data: any;
}

const BaseDatagrid: React.FC<IBaseDatagrid> = ({ data }) => {
  const getRowId = (row: any) => row._id;
  React.useEffect(() => {
    console.log(data);
  }, [data]);

  const columns:  [] = [
    {
      field: '_id',
      headerName: 'ID',
      width: 150,
      renderCell: (id: any) => {
        let xId = data.indexOf(id.row) + 1;
        return xId;
      },
    },
    { field: 'login', headerName: 'Identifiant', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'phone', headerName: 'Numéro de téléphone', width: 150 },
    { field: 'firstName', headerName: 'Prénom', width: 150 },
    { field: 'lastName', headerName: 'Nom', width: 150 },
    { field: 'password', headerName: 'Mot de passe', width: 150 },
    { field: 'active', headerName: 'Status', width: 150,
  renderCell: (id: any) => {
    return (
      <Switch
      id="4FO"
      disabled={true}
      checked={id.row.active}
      

> </Switch>
    );
  } },
    { field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell:  (id: any) => {
      return (
        <Button
        variant="contained"
        color="error"
        //startIcon={<DeleteIcon />}
        onClick={ async () =>  {
          const result = window.confirm('Are you sure you want to perform this action?');
          if (result) {
          let res: any;
          res = await BackofficeService.deleteUser(id.row);
          if(res.data.statusCode == 200) {
            window.location.reload();
          }}
        }}
      >
        Supprimer
      </Button>
      );
    },}
  ];
  return (
    <Box sx={{ height: 600, width: '100%' }}>
      {data ? (
        <DataGrid
          sx={{ backgroundColor: 'white' }}
          rows={data}
          columns={columns}
          getRowId={getRowId}
          autoHeight
        />
      ) : null}
    </Box>
  );
};
export default BaseDatagrid;
