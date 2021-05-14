import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { DeletePost } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => dispatch(DeletePost(id))
  }
}

const SinglePost = (props) => {

  const handleClick = () => {
    props.deletePost(props.id)
  }

  return (
    <Card>
      <Card.Header>
        {props.title}
        <Button onClick={handleClick} variant="primary" className="ml-auto">Delete Post</Button>
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {props.post}
          </p>
          <footer className="blockquote-footer">
            Written by <cite title="Source Title">{props.author}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

const PreviewPost = connect(null, mapDispatchToProps)(SinglePost)

export default PreviewPost;
