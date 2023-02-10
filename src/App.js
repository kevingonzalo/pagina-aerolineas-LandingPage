import Banner from "./components/Banner";
import Explanation from "./components/Explanation";
import Layout from "./components/Layout";
import Presentation from "./components/Presentation";
import StickyFotter from "./components/StickyFotter";
import {ThemeProvider,createMuiTheme} from "@material-ui/core"

function App() {
  const theme = createMuiTheme ({
      breakpoints:{
        values:{
          xxs:320,
          xs:480,
          sm:640,
          md:768,
          lg:1024,
          xl:1220,
          xxl:1366,
          xxxl:1620,
        }
      }
  })
  return (
    <ThemeProvider theme={theme}>
      <Layout>
          <Banner/>
          <Explanation/>
          <Presentation/>
          <StickyFotter/>  
      </Layout>
    </ThemeProvider>
  );
}

export default App;
