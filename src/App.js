import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";

function App() {
  const [blogPosts, setBlogPost ] = useState([])
  const receiveBlogPost = (post) => {
    setBlogPost(oldPost  => [...oldPost, post])
  }

  return (
    <Router>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">Juanfezaga Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <Button as={Link} variant="light" to="/">
                Home
              </Button>
              <Button as={Link} variant="light" to="/create">
                New Blog
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home posts={blogPosts} />
          </Route>
          <Route path="/create">
            <CreatePost create={receiveBlogPost} />
          </Route>
          <Route path="">

          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
