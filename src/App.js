// import Booklist from './componentsDay14/Booklist';
// import Userlist from './componentsDay14/Userlist';
// import CardList from './componentsDay15/cardList';
// import Counter from './componentsDay15/Hooks/Counter';
// import Hide from './componentsDay15/Hooks/Hide';
// import Counter from './Week5/Counter';
// import Tree from './Week5/FamilyTree/Tree';
// import Clr from './Week5/hideShowColorChange/Clr';
// import Hide from './Week5/hideShowColorChange/Hide';
// import Theme from './componentsDay16/Theme/Theme';
// import DarkLight from './componentsDay16/DarkLight/DarkLight';
// import Delete from './componentsDay16/Delete/Delete';
// import Fetch from './componentsDay16/Fetch/Fetch';
// import RegForm from './componentsDay17/Form/RegForm';
// import Submit from './componentsDay17/Form/Submit';
// import Form1 from './componentsDay17/Form1/Form1';
// import Validation from './componentDay18/Validation/Validation';
// import Reg from './componentDay18/Reg/Reg';
// import UseEffect from './componentDay18/UseEffect/UseEffect';
// import Example from './componentDay19/Example/Example';
// import Cars from './Week6/Cars';
// import Upload from './Week6/Upload';
// import FetchApi from './componentDay20/FetchApi/FetchApi';
// import Example from './componentDay20/Example/Example';
// import Comp1 from './componentDay21/Comp/Comp1';
// import Comp5 from './componentDay21/Comp/Comp5';

import About from "./componentDay21/Routing/About";
import Home from "./componentDay21/Routing/Home";
import Navbar from "./componentDay21/Routing/Navbar";
import Product from "./componentDay21/Routing/Product";
import Gents from "./componentDay21/Routing/Products/Gents";
import Ladies from "./componentDay21/Routing/Products/Ladies";

// Portfolio
// import Home from './componentDay19/Portfolio/Home';
// import Portfolio from './componentDay19/Portfolio/Portfolio';
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        {/* <Booklist/> */}
        {/* <CardList/> */}
        {/* <Userlist/> */}
        {/* <Counter/> */}
        {/* <Tree/> */}
        {/* <Clr/> */}
        {/* <Hide/> */}
        {/* <Theme/> */}
        {/* <DarkLight/> */}
        {/* <Delete/> */}
        {/* <Fetch/> */}
        {/* <RegForm/> */}
        {/* <Submit/> */}
        {/* <Form1/> */}
        {/* <Validation/> */}
        {/* <Reg/> */}
        {/* <UseEffect/> */}
        {/* <Cars/> */}
        {/* <Upload/> */}
        {/* <Example/> */}
        {/* <FetchApi/> */}
        {/* <Example/> */}
        {/* <Comp1/> */}
        {/* <Comp5/> */}
        {/* _______________________________Routing______________________________________ */}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />}>
              <Route path="/product/gents" element={<Gents />} />
              <Route path="/product/ladies" element={<Ladies />} />
            </Route>
          </Route>
        </Routes>

        {/* Portfolio____________________portfolio_______________________________*/}
        {/* <Home/>
        <Portfolio/> */}
      </div>
    </>
  );
}

export default App;
