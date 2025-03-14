import { Box, Paper } from "@mui/material";

function MenuWrapper({ children}) {
    return (
      <Paper elevation={1} >
        <Box
        
        sx={{
          height:"auto",
          display:"flex",
          alignItems:"center",
          padding:"15px 20px",
          borderRadius:"5px",
          boxSizing:"border-box",
          width:"100%"
        
        }}
        
        >{children}</Box>
      </Paper>
    );
  }

  export default MenuWrapper;