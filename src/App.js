import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";

import Header from "./components/Header";
import CreateContactForm from "./components/CreateContactForm";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <CreateContactForm />
        <Footer />
      </ThemeProvider>
    );
  }
}

export default App;
