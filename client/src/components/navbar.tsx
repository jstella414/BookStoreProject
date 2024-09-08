import { Typography, AppBar,  Toolbar, Box, IconButton, Button } from '@mui/material';
/// Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Container,


function Navbartop() {
  return(
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Book Store
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>


  )

 
}

export default Navbartop;