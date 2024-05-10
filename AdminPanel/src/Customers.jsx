import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import jsonData from './data/data.json'; 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Customers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortByAge, setSortByAge] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSortByAge = () => {
    setSortByAge(sortByAge === 'asc' ? 'desc' : 'asc');
  };

  
  let filteredData = jsonData.filter((item) =>
    Object.values(item).some(
      (val) =>
        typeof val === 'string' && val.toLowerCase().includes(searchTerm)
    )
  );

  if (sortByAge) {
    filteredData = [...filteredData].sort((a, b) => {
      if (sortByAge === 'asc') {
        return a.Yaş - b.Yaş;
      } else {
        return a.id - b.id;
      }
    });
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Ad', headerName: 'Ad', width: 130 },
    { field: 'Soyad', headerName: 'Soyad', width: 130 },
    { field: 'Cinsi', headerName: 'Cinsi', width: 70 },
    { field: 'Yaş', headerName: 'Yaş', type: 'number', width: 70 },
    { field: 'Universitet', headerName: 'Universitet', width: 130 },
    { field: 'Dərəcə', headerName: 'Dərəcə', width: 130 },
    { field: 'İxtisas', headerName: 'İxtisas', width: 130 },
    { field: 'Təcrübə', headerName: 'Təcrübə', width: 130 },
    { field: 'Technest', headerName: 'Technest', width: 130 },
    { field: 'SABAH', headerName: 'SABAH', width: 130 },
  ];

  return (
    <container className="COnt" style={{width:'100%',height:'800px', overflow:'hidden'}} >
    <div style={{ height:'600px', width:'90%' }}>
      <div className="header-h">

        <TextField id="standard-basic" label="SEARCH..." variant="standard"  type="text"
          placeholder="Search..."
          value={searchTerm} style={{ backgroundColor:"white" , width:"500px" ,height:'40px',margin:'30px 70px',  border:"1px solid white", borderRadius:'2px'}}
          onChange={handleSearch} />
        <Button onClick={handleSortByAge} color="secondary" style={{backgroundColor:"white",margin:"30px",height:'40px', }}>Sort by Age</Button>
      </div>
      <DataGrid
        rows={filteredData}
        columns={columns}
        pageSize={5}
        
        style={{color:"violet", backgroundColor:"#58508d55",marginLeft:'70px'  }}
      />
    </div>
    </container>
  );
}

export default Customers;
