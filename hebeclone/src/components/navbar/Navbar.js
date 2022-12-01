import React,{useState} from 'react';
import { AppBar, Grid, Tabs, Tab, Toolbar,Button,Drawer } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';
import TypewriterComponent from "typewriter-effect";
import "./Navbar.css"

 
const Navbar = ({links}) => {
    const [value, setValue] = useState();
    return (
      <div>
            <div style={{textAlign:"center",color:"#CAAFA8",padding:"5px",height:"20px",fontSize:"16px",
            letterSpacing: "2px",
    fontSize: "11px",fontFamily:"Montserrat" }}>
               $6 EXPRESS COURIER. FREE SHIPPING FOR ORDERS $200+. GIFTED HEBE TOTE BAG WITH PURCHASES $250+.
            </div>
      <AppBar sx={{background:"#CAAFA8",marginTop:"28px",height:"80px"}}>
         
      <Toolbar >
        <Grid sx={{placeItems:"center"}} container >
          <Grid item xs={3}>
                            <div style={{ fontSize:"50px"}}>
                            <TypewriterComponent
                                options={{
                                    strings: ["hebe."],
                                    loop: true,
                                    autoStart: true,
                                    typeSpeed:10,
                                    fontSize: '200px'
                                }}
                            />  
                          </div>
                              
            
          </Grid>
                  <Grid item xs={8}>
                  <div class="navbar">
  
  <div class="dropdown">
    
  <a href="#home" class="dropbtn">SHOP</a>
    <a href="#news" >BRANDS</a>
    <a href="#home" >MY BOYFRIENDS BACK</a>
  <a href="#news" >STAFF EDIT</a>
    <div class="dropdown-content">
         
      <div class="row">
        <div class="column">
          <h3>BY STYLE</h3>
          <a href="#">Activewear</a>
          <a href="#">Bags</a>
          <a href="#">Belts</a>
        </div>
        <div class="column">
          <h3>-</h3>
          <a href="#">Jewellery</a>
          <a href="#">Pants</a>
          <a href="#">Shirts</a>
        </div>
        <div class="column">
          <h3>OUR STORE</h3>
          <a href="#">Hebe Homegrown</a>
          <a href="#">Meet The Girls</a>
          <a href="#">Careers</a>
        </div>
      </div>
    </div>
  </div> 
</div>

                            
                        </Grid>
                    
                        <Grid item xs={1} sx={{display:"flex"}}>
                           
                                <PersonIcon sx={{marginRight:"20px"}} />
                                <SearchSharpIcon sx={{marginRight:"20px"}} />
                                <ShoppingBagSharpIcon sx={{ marginRight: "20px" }} />
                               
                                
                          
                        </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
                            </div>
  );
}

export default Navbar
