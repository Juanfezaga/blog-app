import { Container, ListGroup, Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PreviewPost from './PreviewPost'

const Home = ({ posts }) => {
  if (posts.length > 0) {
    return (
      <Container>
        <ListGroup variant="flush">
          {posts.map((post, index) => (
            <ListGroup.Item key={post.blogTitle} id={index}>
              <PreviewPost title={post.blogTitle} post={post.blogBody} author={post.blogAuthor} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    );
  }

  return (
    <Container className="text-center">
      <Jumbotron fluid>
        <Container>
          <h1>No Blogs Available</h1>
          <p>You should create one right away.</p>
          <Button as={Link} to="/create" variant="primary">
            New blog Post
          </Button>
        </Container>
      </Jumbotron>
    </Container>
  );
};

export default Home;

