import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { store } from './store';
import NavComponent from './components/nav/nav.component';
import userComponent from './components/users/user.component';
import groupsComponent from './components/groups/groups.component';
import groupSearchComponent from './components/groups/group-search/group-search.component';
import GroupUsersComponent from './components/groups/group-users/group-users.component';
import SignInComponent from './components/signin/signin.component';
import FriendsPage from './components/friends/friends';
import GroupOrganizer from './components/groups/group-organizer.component';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>

        <div className="App">
          <NavComponent />
          <Switch>
            <Route path='/profile/:id' component={userComponent} />
            <Route path='/browse' component={groupSearchComponent} />
            <Route exact path="/groups" component={GroupUsersComponent} />
            <Route exact path='/groups/:id' component={groupsComponent} />
            <Route exact path='/groups/organizer/:id' component={GroupOrganizer} />
            <Route path='/login' component={SignInComponent} />
            <Route path='/friends' component={FriendsPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>


  );
}

export default App;
