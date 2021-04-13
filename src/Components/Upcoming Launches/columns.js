import { format } from 'date-fns';

export const COLUMNS = [
    {
        Header: 'Rocket',
        accessor: 'rocket.rocket_name',
      
      },
    {
      Header: 'Mission Name',
      accessor: 'mission_name',
  
    },
    {
      Header: 'Launch Date',
      accessor: 'launch_date_utc',
      Cell: ({ value }) => {
        return format(new Date(value), 'dd/MM/yyyy')
      }
   
    },
    {
        Header: 'Details',
        accessor: 'details',
      
      }
  
  ]