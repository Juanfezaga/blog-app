import { Container, ListGroup, Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PreviewPost from './PreviewPost'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { posts: state.posts }
}

const Blogs = (props) => {
  console.log(props)
  let { posts } = props
  if (posts.length > 0) {
    return (
      <Container>
        <ListGroup variant="flush">
          {posts.map((post, index) => (
            <ListGroup.Item key={post.blogTitle} id={index}>
              <PreviewPost title={post.blogTitle} post={post.blogBody} author={post.blogAuthor} id={index}/>
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

const Home = connect(mapStateToProps)(Blogs)

export default Home;

