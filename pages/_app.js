import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../app/store";
import Layout from "../components/Layout/Layout";
import { GlobalStyles } from "../styles/globalStyles";
import { darkTheme, lightTheme } from "../styles/theme";

const ThemeSetup = ({ children }) => {
    const { theme } = useSelector((state) => state.ui);
    const currentTheme = theme === "light" ? lightTheme : darkTheme;
    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <ThemeSetup>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeSetup>
        </Provider>
    );
}

export default MyApp;
