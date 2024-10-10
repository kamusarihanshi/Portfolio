import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from "./scenes/Global/TopBar"
import SideBar from "./scenes/Global/SideBar"
import Team from "./scenes/team";
import Bar from "./scenes/bar"
import Pie from "./scenes/pie"
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Line from "./scenes/line";
import Geography from "./scenes/geography";
import Dashboard from "./scenes/dashboard";
import First from "./scenes/login";
import Calendar from "./scenes/calender/Calender.jsx";
import {Routes,Route} from 'react-router-dom'






 


function App() {
  const[theme,colorMode]=useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="app">
      <SideBar/>
      <main>
        <TopBar />
        <Routes >
        <Route path="/" element={<Dashboard />} />

        <Route path="/team" element={<Team />} />
        <Route path ="/bar" element={<Bar/>}/>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path ="/pie" element={<Pie/>}/>
        <Route path="/geography" element={<Geography />} />
        <Route path="/line" element={<Line />} />
        <Route path="/login" element={<First />} /> 
        <Route path="/calendar" element={<Calendar />} />
        
          <Route/>
        </Routes>

        
      </main>

    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
      
    


    
  );
}

export default App;
