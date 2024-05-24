import * as React from 'react';

import TextField from '@mui/material/TextField';
import { Container ,Paper,Button } from '@mui/material';
import { blue } from '@mui/material/colors';

export default function Student() {
  const paperStyle={Padding:'50px 20px', width:600,margin:"20px auto"}
  const[name,setName] = React.useState('')
  const[adress,setAdress] = React.useState('')
  const [students,setStudents]=React.useState([])
  
  const handleClick=(e)=>{
    e.preventDefault()
    const student ={name,adress}
    console.log(student)
    fetch("http://localhost:8080/Student/add", {
      method:"POST",
      headers:{"Content-Type": "application/json"},        //Conection with database-springboot-save
      body:JSON.stringify(student)

    }).then(()=>{
      console.log("New Student Added")
    })
  }

  React.useEffect(()=>{                                   //GetMethod
    fetch("http://localhost:8080/Student/get")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    }
  )
  },[])

  return (

    
    
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1 style={{color:blue}}><u>Add Student</u></h1>
      <form className='classes.root' noValidate autoComplete='off'>
      
      <TextField id="standard-basic" label="Student Name" variant="standard" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      
      <TextField id="standard-basic" label="Student Adress" variant="standard" fullWidth cen
      value={adress}
      onChange={(e)=>setAdress(e.target.value)}
      />

      <Button variant="contained"  onClick={handleClick}>
        SUBMIT
        </Button> 
      </form>
    
      </Paper>
      <h1>Students</h1>

<Paper elevation={3} style={paperStyle}>

  {students.map(student=>(
    <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
     Id:{student.id}<br/>
     Name:{student.name}<br/>
     Address:{student.address}<br/>

    </Paper>
  ))
}


</Paper>
      </Container>
   
  );
}