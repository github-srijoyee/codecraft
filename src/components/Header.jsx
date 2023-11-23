

import { AppBar,Toolbar,styled } from '@mui/material';

const Container=styled(AppBar)`
background: #070764; 
height:9vh;

`//#0647a2;
const Header=()=>{
    
const logo='https://cdn-icons-png.flaticon.com/512/5234/5234209.png';
    return(
       
            <Container position='static'>
            <Toolbar>
                <img src={logo} alt="logo" style={{width:50}}/>
                <h1 style={{paddingLeft:10, fontFamily:'Times New Roman', fontWeight:200 }}>CodeCraft</h1>
            </Toolbar>
            </Container>
 
       
    )
}
export default Header;