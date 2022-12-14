import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FLyoutNav from "./components/Navigation/FlyoutNav";
import NavigationBar from "./components/Navigation/NavigationBar";
import Home from "./components/Pages/Home/Home";
import UserAuthenticate from "./components/Pages/Accounts/UserAuthenticate";
import UserListings from "./components/Pages/Accounts/UserListings";
import UserCreate from "./components/Pages/Accounts/UserCreate";
import NewListing from "./components/Pages/NewListing/NewListing";
import DetailedPage from "./components/Pages/DetailedPage/DetailedPage";
import CategoryPage from "./components/Pages/CategoryPage";
import Footer from "./components/Footer/Footer";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

const plushbabytheme = createTheme({
  palette: {
    primary: {
      light: "#b7ffff",
      main: "#84d4e1",
      dark: "#51a3af",
      contrastText: "#fff",
    },
    secondary: {
      light: "#252525",
      main: "#a2a2a2",
      dark: "#353535",
      contrastText: "#fff",
    },
    light: {
      light: "#a2a2a2",
      main: "#EBF0F3",
      dark: "C5D6DF",
      contrastText: "#000",
    },
  },

  roundedCorners: {
    button: {
      borderRadius: "48px",
    },

    cards: {
      borderRadius: "26px",
    },
  },
});

const App = () => {
  const [isopen, setIsOpen] = useState(false);

  const toggleFlyout = () => {
    setIsOpen(!isopen);
  };

  return (
    <MuiThemeProvider theme={plushbabytheme}>
      <Router>
        <FLyoutNav isopen={isopen} toggleFlyout={toggleFlyout} />
        <NavigationBar toggleFlyout={toggleFlyout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Home />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/auth" element={<UserAuthenticate />} />
          <Route path="/newuser" element={<UserCreate />} />
          <Route path="/userlistings" element={<UserListings />} />
          <Route path="/newlisting" element={<NewListing />} />
          <Route path="/listings/:id" element={<DetailedPage />} />
        </Routes>
        <Footer />
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
