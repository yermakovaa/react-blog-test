import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch, useLocation } from 'react-router-dom';
import { postsOperations, postsSelectors } from '../../redux/posts';
import {
  List,
  Item,
  Title,
  Text,
  Form,
  Field,
  TextArea,
  BtnPost,
  Delete,
  LinkMore,
} from './HomeView.style';

const HomeView = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelectors.getPosts);
  const { url } = useRouteMatch();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => dispatch(postsOperations.fetchPosts()), [dispatch]);

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
    dispatch(postsOperations.createPost(title, body));
    setTitle('');
    setBody('');
  };

  return (
    <>
      {posts.length > 0 && (
        <List>
          {posts.map(({ id, title, body }) => (
            <Item key={id}>
              <Title>{title}</Title>
              <Text>{body}</Text>

              <LinkMore
                to={{
                  pathname: `${url}posts/${id}`,
                  state: { from: location },
                }}
              >
                Read more
              </LinkMore>

              <Delete
                type="button"
                variant="contained"
                color="secondary"
                onClick={() => dispatch(postsOperations.deletePost(id))}
              >
                Delete
              </Delete>
            </Item>
          ))}
        </List>
      )}

      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Field
          label="Title"
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <TextArea
          placeholder="Your text"
          rowsMin={5}
          rowsMax={5}
          name="text"
          value={body}
          onChange={handleChange}
        />
        <BtnPost variant="contained" color="primary" type="submit">
          Create a new post
        </BtnPost>
      </Form>
    </>
  );
};

export default HomeView;
