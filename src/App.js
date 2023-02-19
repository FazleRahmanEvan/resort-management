
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Activities from './Components/Activities/Activities';
import CampingDetails from './Components/Activities/CampingDetails/CampingDetails';
import Event from './Components/Event/Event';
import EventEnquiry from './Components/EventEnquiry/EventEnquiry';
import FoodOrder from './Components/FoodOrder/FoodOrder';
import OrderDetails from './Components/FoodOrder/OrderDetails/OrderDetails';

import Home from './Components/Home/Home';
import Restaurant from './Components/Restaurant/Restaurant';
import Rooms from './Components/Room&Suits/Rooms/Rooms';
import RoomListSuits from './Components/RoomListSuits/RoomListSuits';
import Footer from './Components/Shared/Footer';



function App() {
  return (
    <div>

 <Routes>
  <Route path="/" element={ <Home></Home>}></Route>
  <Route path="/rooms" element={ <Rooms></Rooms>}></Route>
  <Route path="/rooms&suits" element={ <RoomListSuits></RoomListSuits>}></Route>
  <Route path="/restaurant" element={ <Restaurant></Restaurant>}></Route>
  <Route path="/event" element={ <Event></Event>}></Route>
  <Route path="/eventenquiry" element={ <EventEnquiry></EventEnquiry>}></Route>
  <Route path="/activities" element={ <Activities></Activities>}></Route>
  <Route path="/camping" element={ <CampingDetails></CampingDetails>}></Route>
  <Route path="/food" element={ <FoodOrder></FoodOrder>}></Route>
  <Route path="/confirmOrder" element={ <OrderDetails></OrderDetails>}></Route>
  
 </Routes>
  <Footer></Footer>
    </div>
 

 
    

   
  );
}

export default App;
