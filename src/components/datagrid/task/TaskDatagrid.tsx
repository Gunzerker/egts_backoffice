import { Switch } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';

export interface ITaskDatagrid {
  data: any;
}

const TaskDatagrid: React.FC<ITaskDatagrid> = ({ data }) => {
  const getRowId = (row: any) => row._id;
  React.useEffect(() => {
    console.log(data);
  }, [data]);

  const columns: GridColDef[] = [
    {
      field: '_id',
      headerName: 'ID',
      width: 150,
      renderCell: (id: any) => {
        let xId = data.indexOf(id.row) + 1;
        return xId;
      },
    },
    { field: 'site_name', headerName: 'Nom Site', width: 150 },
    { field: 'reference', headerName: 'Reference', width: 150 },
    { field: 'operateur', headerName: 'Operateur', width: 150 },
    { field: 'adress', headerName: 'Address', width: 150 },
    { field: 'contact_client', headerName: 'Contact Client', width: 150 },
    { field: 'site_raccorde', headerName: 'Site Raccorde', width: 150, renderCell: (id: any) => {
      return (
        <Switch
        id="siterac"
        disabled={true}
        checked={id.row.site_raccorde}
        className={`${
          id.row.site_raccorde ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
        
  
  > </Switch>
      );
    } },
    { field: 'chambre', headerName: 'Chambre', width: 150 },
    { field: 'bpe', headerName: 'bpe', width: 150 },
    { field: 'devis_av', headerName: 'Devis Av', width: 150,  renderCell: (id: any) => {
      return (
        <Switch
        className={`${
          id.row.devis_av ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
        id="devis"
        disabled={true}
        checked={id.row.devis_av}
        
  
  > </Switch>
      );
    } },
    { field: 'four_fo', headerName: '4 FO', width: 150,  renderCell: (id: any) => {
      return (
        <Switch
        id="4FO"
        disabled={true}
        checked={id.row.four_fo}
        className={`${
          id.row.four_fo ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
  
  > </Switch>
      );
    } },
    { field: 'thirty_fo', headerName: 'Extension', width: 150,  renderCell: (id: any) => {
      return (
        <Switch
        id="Extension"
        disabled={true}
        checked={id.row.thirty_fo}
        className={`${
          id.row.thirty_fo ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
        
  
  > </Switch>
      );
    } },
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
export default TaskDatagrid;
