import AddIcon from '@mui/icons-material/Add';
import Typography from "@mui/material/Typography"
import Button  from "@mui/material/Button"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import AddGoals from '../../components/AddGoals';



const theme = createTheme({
  palette: {
    background: {
      default: '#000', 
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          width: '100vw', 
          height: '100vh',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          textAlign: 'center', 
          gap: 4,
        }}
      >
        <img 
          src="./assets/logo-32.png" 
          alt="Logo" 
          style={{ 
            borderRadius: '50%', 
            width: '100px', 
            height: '100px', 
            objectFit: 'cover' 
          }} 
        />
        <img src="./assets/lets-start-illustration.svg" alt="Let's Start" />
        <Typography color="gray" sx={{ fontSize: '16px', mb: 2, maxWidth: 400 }}>
          Você ainda não cadastrou nenhuma meta, bora começar!
        </Typography>

        <AddGoals
          trigger={
            <Button variant="contained" color="secondary">
              <AddIcon />
              Cadastrar meta
            </Button>
          }
        />
    </Box>
    </ThemeProvider>
  )
}

export default App;