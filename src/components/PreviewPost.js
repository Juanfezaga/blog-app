import { Card } from 'react-bootstrap'

const PreviewPost = (props) => {
  return (
    <Card>
      <Card.Header>{props.title}</Card.Header>
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

export default PreviewPost;
