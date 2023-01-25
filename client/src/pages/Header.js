import background from '../assets/banner.jpg'
import { Container } from '@mui/material';

function Header() {
    const myStyle={
        backgroundImage: `url(${background})`,
        width: '50%',
        height:'45vh',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
  
    };
    return (
      <Container 
      defaultValue={30}
      sx={{ mt: 4, mb: 4 }}
      style={myStyle}>
          
      </Container>
    );
    }
    
    export default Header;