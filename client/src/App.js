import React, { useEffect } from 'react';
import { Router, Route,  Switch } from "react-router-dom";
import './App.css';

// Assigning Materialize to React Application
import 'materialize-css/dist/css/materialize.min.css';
// Bringing JAvaScript from Materialize
import M from 'materialize-css/dist/js/materialize.min.js';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CallButton from './components/layout/CallButton';
import CallBtnModal from './components/form/CallBtnModal';
import Static from './components/layout/Static';
import BrandAccumulators from './components/layout/BrandAccumulators';
import Accumulators from './components/accumulator/Accumulators';
import Accumulator from './components/accumulator/Accumulator';
import OrderAccumulator from './components/form/OrderAccumulator';
import Tires from './components/tire/Tires';
import Tire from './components/tire/Tire';
import OrderTire from './components/form/OrderTire';
import Disks from './components/disk/Disks';
import Disk from './components/disk/Disk';
import OrderDisk from './components/form/OrderDisk';
import Accessories from './components/accessory/Accessories';
import Accessory from './components/accessory/Accessory';
import OrderAccessory from './components/form/OrderAccessory';
import Error from './components/layout/404';
import Pagination from './components/layout/Pagination';

import AccumulatorState from './context/accumulator/AccumulatorState';
import TireState from './context/tire/TireState';
import DiskState from './context/disk/DiskState';
import AccessoryState from './context/accessory/AccessoryState';
import PaginateState from './context/pagination/PaginateState';

import ReactGA from 'react-ga';

import { createBrowserHistory } from 'history';

const trackingId = "UA-179171274-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const App = () => {
  useEffect(() => {
    // Initializing Materialize JavaScript
    M.AutoInit();
  });
  return (
    <DiskState>
      <AccessoryState>
        <TireState>
          <AccumulatorState>
            <PaginateState>
              <Router history={history}>
                <Header />
                  <Switch>
                      <Route exact path="/" component={Static} />
                      <Route exact path="/brands" component={BrandAccumulators} />
                      <Route exact path="/brands/:brand" render={props =>(
                          <>
                            <Accumulators {...props} />
                          </>
                        )} />
                      <Route exact path="/brands/exide/:productCode" render={props =>(
                          <>
                            <Accumulator {...props} />
                            <OrderAccumulator {...props} />
                          </>
                        )} />
                        <Route exact path="/brands/bost/:productCode" render={props =>(
                          <>
                            <Accumulator {...props} />
                            <OrderAccumulator {...props} />
                          </>
                        )} />
                        <Route exact path="/brands/tubor/:productCode" render={props =>(
                          <>
                            <Accumulator {...props} />
                            <OrderAccumulator {...props} />
                          </>
                        )} />
                        <Route exact path="/brands/ista/:productCode" render={props =>(
                          <>
                            <Accumulator {...props} />
                            <OrderAccumulator {...props} />
                          </>
                        )} />
                        <Route exact path="/brands/gladiator/:productCode" render={props =>(
                          <>
                            <Accumulator {...props} />
                            <OrderAccumulator {...props} />
                          </>
                        )} />
                        <Route exact path="/brands/kainar/:productCode" render={props =>(
                          <>
                            <Accumulator {...props} />
                            <OrderAccumulator {...props} />
                          </>
                        )} />
                      <Route exact path="/tires" render={props =>(
                          <>
                            <Tires {...props} />
                          </>
                        )} />
                      <Route exact path="/tires/:productCode" render={props =>(
                          <>
                            <Tire {...props} />
                            <OrderTire {...props} />
                          </>
                        )} />
                        <Route exact path="/disks" render={props =>(
                          <>
                            <Disks {...props} />
                          </>
                        )} />
                        <Route exact path="/disks/:productCode" render={props =>(
                            <>
                              <Disk {...props} />
                              <OrderDisk {...props} />
                            </>
                        )} />
                        <Route exact path="/accessories" render={props =>(
                          <>
                            <Accessories {...props} />
                            <Pagination />
                          </>
                        )} />
                      <Route exact path="/accessories/:productCode" render={props =>(
                          <>
                            <Accessory {...props} />
                            <OrderAccessory {...props} />
                          </>
                      )} />
                      <Route component={Error} />
                  </Switch>
                <CallBtnModal />
                <CallButton />
                <Footer />
              </Router>
            </PaginateState>
          </AccumulatorState>
        </TireState>
      </AccessoryState>
    </DiskState>
  );
}

export default App;
