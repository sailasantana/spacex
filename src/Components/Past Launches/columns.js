import { format } from 'date-fns';


export const COLUMNS = [
    {
      Header: 'Mission Name',
      accessor: 'mission_name',
  
    },
    {
      Header: 'Launch Date',
      accessor: 'launch_date_local', Cell: ({ value }) => {
        return format(new Date(value), 'dd/MM/yyyy')
      }
    
    },
    {
      Header: 'Launch Site',
      accessor: 'launch_site.site_name',
    
    },
    {
      Header: 'Rocket',
      accessor: 'rocket.rocket_name',
   
    },
    {
      Header: 'Details',
      accessor: 'details'
    }
  
  ]