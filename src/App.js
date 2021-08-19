import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AddTodo from "./components/todo/AddTodo";
import EditTodo from "./components/todo/EditTodo";
import ListTodo from "./components/todo/ListTodo";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={ListTodo} />
        <Route path="/add-todo" component={AddTodo} />
        <Route path="/edit-todo/:id" component={EditTodo} />
      </Switch>
    </Layout>
  );
};

export default App;
