import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FLyoutNav from './components/Navigation/FlyoutNav';
import NavigationBar from './components/Navigation/NavigationBar';
import Home from './components/Pages/Home/Home';
import UserAuthenticate from './components/Pages/Accounts/UserAuthenticate';
import UserCreate from './components/Pages/Accounts/UserCreate';
import NewListing from './components/Pages/NewListing/NewListing';
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

    const [isopen, setIsOpen] = useState(false)
    
    const toggleFlyout = () => {
        setIsOpen(!isopen)
    }

    return (
        <MuiThemeProvider theme={plushbabytheme}>
            <Router>
                <FLyoutNav isopen={isopen} toggleFlyout={toggleFlyout} />
                <NavigationBar toggleFlyout={toggleFlyout} />
                <Routes>
                    <Route path='/' element={ <Home/> } />
                    <Route path='/listings' element={ <Home/> } />
                    <Route path='/auth' element={ <UserAuthenticate/> } />
                    <Route path='/newuser' element={ <UserCreate/> } />
                    <Route path='/newlisting' element={ <NewListing/> } />
                    <Route path='/listings/:id' element={ <DetailedPage/> } />
                </Routes>
                <Footer />
            </Router>
        </MuiThemeProvider>

    );
};

export default App;