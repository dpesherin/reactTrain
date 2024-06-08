import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Layout from "./components/Layout/Layout";
import Profile from "./pages/Profile/Profile";
import Menu from "./components/Menu/Menu";
import Tasks from "./pages/Tasks/Tasks";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Sidebar>
                <Menu/>
            </Sidebar>
            <Content>
                <Header avatar="https://i.pravatar.cc/300?img=1" name="Jane Doe" notifycount ="20"/>
                <Layout>
                        <Routes>
                            <Route path="/" element={<Main/>}/>
                            <Route path="/profile" element={<Profile avatar="https://i.pravatar.cc/300?img=1"/>}/>
                            <Route path="/tasks" element={<Tasks/>}/>
                        </Routes>
                </Layout>
            </Content>
        </BrowserRouter>
    </div>
  );
}

export default App;
