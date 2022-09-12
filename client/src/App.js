import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FLyoutNav from './components/Navigation/FlyoutNav';
import NavigationBar from './components/Navigation/NavigationBar';
import Home from './components/Pages/Home/Home';
import UserAuthenticate from './components/Pages/Accounts/UserAuthenticate';
import DetailedPage from './components/Pages/DetailedPage/DetailedPage';
import Footer from './components/Footer/Footer';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const plushbabytheme = createTheme({
    palette: {
        primary: {
            light: '#b7ffff',
            main: '#84d4e1',
            dark: '#51a3af',
            contrastText: '#fff',
        },
        secondary: {
            light: '#baccff',
            main: '#869bff',
            dark: '#516dcb',
            contrastText: '#000',
        },
    },

    roundedCorners: {
        button: {
            borderRadius: '48px',
        },

        cards: {
            borderRadius: '26px',
        },
    }

});


const App = () =>  {

    const [isOpen, setIsOpen] = useState(false)
    
    const toggleFlyout = () => {
      setIsOpen(!isOpen)
      console.log("menu icon clicked");
    }

    return (
        <MuiThemeProvider theme={plushbabytheme}>
            <Router>
                <FLyoutNav isOpen={isOpen} toggleFlyout={toggleFlyout} />
                <NavigationBar toggleFlyout={toggleFlyout} />
                <Routes>
                    <Route path='/' element={ <Home/> } />
                    <Route path='/posts' element={ <Home/> } />
                    <Route path='/auth' element={ <UserAuthenticate/> } />
                    <Route path='/posts/detailedpage' element={ <DetailedPage/> } />
                </Routes>
                <Footer />
            </Router>
        </MuiThemeProvider>

    );
};

export default App;