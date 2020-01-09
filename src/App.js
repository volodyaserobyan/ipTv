import React from 'react';
import Login from './components/Login/Login'
import DashBoard from './components/Dashboard/DashBoard'
import Chanel from './components/Chanel/Chanel'
import Clients from './components/Clients/Clients'
import SubSellers from './components/SubSellers/SubSellers'
import Settings from './components/Settings/Settings'
import Main from './components/Main/Main'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/`} component={Login} exact />
          <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={DashBoard} />
          {/* <Route path={`${process.env.PUBLIC_URL}/dashboard/main`} component={Main} />
          <Route path={`${process.env.PUBLIC_URL}/dashboard/clients`} component={Clients} />
          <Route path={`${process.env.PUBLIC_URL}/dashboard/chanel`} component={Chanel} />
          <Route path={`${process.env.PUBLIC_URL}/dashboard/subsellers`} component={SubSellers} />
          <Route path={`${process.env.PUBLIC_URL}/dashboard/settings`} component={Settings} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: ['a','b','c','d','e','f','g','h','i','j','k'],
//       currentPage: 1,
//       todosPerPage: 3
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(event) {
//     this.setState({
//       currentPage: Number(event.target.id)
//     });
//   }

//   render() {
//     const { todos, currentPage, todosPerPage } = this.state;

//     // Logic for displaying todos
//     const indexOfLastTodo = currentPage * todosPerPage;
//     const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
//     const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

//     const renderTodos = currentTodos.map((todo, index) => {
//       return <li key={index}>{todo}</li>;
//     });

//     // Logic for displaying page numbers
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
//       pageNumbers.push(i);
//     }

//     const renderPageNumbers = pageNumbers.map(number => {
//       return (
//         <li
//           key={number}//           id={number}
//           onClick={this.handleClick}
//         >
//           {number}
//         </li>
//       );
//     });

//     return (
//       <div>
//         <ul>
//           {renderTodos}
//         </ul>
//         <ul id="page-numbers">
//           {renderPageNumbers}
//         </ul>
//       </div>
//     );
//   }
// }
// export default App