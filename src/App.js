import './App.css';
import Home from './components/Home/Home'
import NavBar from './components/Nav/NavBar'
import AddClient from './components/Add-Client/AddClient';
import EachClient from './components/EachClient/EachClient';
import 'bootstrap/dist/css/bootstrap.css';
import DataContext from './context/DataContext'
import {
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
        <>
          
            <DataContext>
            <NavBar/> 
                <Routes>
                    <Route path='/' exact  element=
                    {
                    <div className="home-cont">
                      <div className="inner-home-cont">
                        <Home/>
                      </div>
                    </div>
                    }
                  />
                  <Route path='/edit-client/:id' exact  element=
                    {
                    <div className="home-cont ">
                      <AddClient/>
                    </div>
                    }
                  />
                  <Route path='/add-client' exact  element=
                    {
                    <div className="home-cont ">
                        <AddClient/>
                    </div>
                    }
                  />

                  <Route path='/each-client/:id'  element=
                    {
                    <div className="each-client-cont ">
                        <EachClient/>
                    </div>
                    }
                  />
                </Routes>
              </DataContext>
 
        </>
      );
}