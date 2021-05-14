import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import { createBlogPost } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    createPost : post => dispatch(createBlogPost(post))
  }
}

const SubmitPost = (props) => {
  let history = useHistory()
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    props.createPost({
      blogTitle,
      blogBody,
      blogAuthor,
    });
    history.push('/')
  };
  const blogTitleHandler = (e) => {
    setBlogTitle(e.target.value);
  };
  const blogBodyHandler = (e) => {
    setBlogBody(e.target.value);
  };
  const blogAuthorHandler = (e) => {
    setBlogAuthor(e.target.value);
  };

  return (
    <Container>
      <Form className="text-center mx-5" onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Blog Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Title"
            value={blogTitle}
            onChange={blogTitleHandler}
            
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Blog body</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Text"
            value={blogBody}
            onChange={blogBodyHandler}
          />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Label>Blog Author</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Author"
            value={blogAuthor}
            onChange={blogAuthorHandler}
          />
        </Form.Group>
        <Button
          variant="outline-danger"
          type="submit"
        >
          Add Post
        </Button>
      </Form>
    </Container>
  );
};

const CreatePost = connect(null,mapDispatchToProps)(SubmitPost)

export default CreatePost;
