import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

//redux
import store from './store'
import { Provider } from 'react-redux';

//components
import Home    from './app/pages/Home';
import Counter from './app/pages/Counter' 
import List    from './app/pages/List'; 
import Shop    from './app/pages/Shop';


function App() {
  return (

    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-br from-orange-300 to-rose-500">
      <div className="flex justify-center items-center h-1/2 w-1/2 p-5 bg-coolGray-100 rounded-2xl shadow">

      <Provider store={store}>

        <Router>
          <Switch>
            <Route path='/' exact  component={Home}/>
            <Route path='/counter' component={Counter}/>
            <Route path='/list'    component={List}/>
            <Route path='/shop'    component={Shop}/>
          </Switch>
        </Router>      

      </Provider>


      </div>
    </div>


    
  );
}

export default App;
