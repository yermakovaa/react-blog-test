import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getById,
  updateById,
  addComment,
} from '../../redux/post/postOperations';
import { getData } from '../../redux/post/postSelectors';
import { useParams, useHistory } from 'react-router-dom';
import {
  Wrapper,
  Title,
  Text,
  Form,
  TextArea,
  List,
  Item,
} from './PostView.style';

import { TextField, Button } from '@material-ui/core';

const PostView = () => {
  const dispatch = useDispatch();
  const post = useSelector(getData);
  const { id } = useParams();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [changePost, setChangePost] = useState(false);
  const [comment, setComment] = useState(false);

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'title':
        setTitle(value);
        break;

      case 'text':
        setBody(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateById({ id, title, body }));
    setTitle('');
    setBody('');
    setChangePost(false);
  };

  const handleComment = () => {
    setComment(!comment);
    setChangePost(false);
  };

  const handleChangePost = () => {
    setChangePost(!changePost);
    setComment(false);
  };

  const handleSubmitComment = e => {
    e.preventDefault();
    dispatch(addComment({ id, body }));
    setBody('');
    setComment(false);
  };

  const handleGoBack = () => {
    history.push('/');
  };

  return (
    <>
      <Button
        onClick={handleGoBack}
        type="button"
        variant="contained"
        color="secondary"
      >
        &#9754; Go back
      </Button>

      {post && (
        <Wrapper>
          <Title>{post.title}</Title>
          <Text>{post.body}</Text>
          <List>
            {post.comments?.map(({ id, body }) => (
              <Item key={id}>{body}</Item>
            ))}
          </List>
          <Button
            type="button"
            onClick={handleComment}
            variant="contained"
            color="primary"
            style={{ marginRight: '10px' }}
          >
            Comment
          </Button>
          <Button
            type="button"
            onClick={handleChangePost}
            variant="contained"
            color="primary"
          >
            Update
          </Button>
        </Wrapper>
      )}

      {changePost && (
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            label="Title"
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            style={{ width: '100%', marginBottom: '10px' }}
          />
          <TextArea
            placeholder="Your text"
            rowsMin={3}
            name="text"
            value={body}
            onChange={handleChange}
          />
          <Button type="submit">Update post</Button>
        </Form>
      )}

      {comment && (
        <Form autoComplete="off" onSubmit={handleSubmitComment}>
          <TextArea
            placeholder="Your Comment"
            rowsMin={3}
            name="text"
            value={body}
            onChange={handleChange}
          />
          <Button type="submit">Leave comment</Button>
        </Form>
      )}
    </>
  );
};

export default PostView;
