import React from "react";
import AdmHomePage from "./pages/AdminHomePage";
import AppFormPage from "./pages/ApplicationFormPage";
import CreateTripPage from "./pages/CreateTripPage";
import HomePage from "./pages/HomePage";
import ListTripPage from "./pages/ListTripsPage";
import LoginPage from "./pages/LoginPage";
import TripDPage from "./pages/TripDetailsPage";







export function Rotas() {
    return (
      <BrowserRouter>
          <Routes>
              <Route index element={ <HomePage /> } />
              <Route path='trips/list' element={<ListTripPage/>} />
              <Route path='trips/application' element={<AppFormPage/>}/>
              <Route path='login' element={<LoginPage/>} />
              <Route path='admin/trips/list' element={<AdmHomePage/>} />
              <Route path='admin/trips/creat' element={<CreateTripPage/>} />
              <Route path='admin/trips/:id' element={<TripDPage/>} />
              <Route path='*' element={<Erro/>}/>
          </Routes>
      </BrowserRouter>
    );
  }