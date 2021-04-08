import styled from 'styled-components';
import { TextField, TextareaAutosize, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  margin-bottom: 40px;
`;

export const Item = styled.li`
  padding: 10px;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: pink;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 5px;
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  text-transform: uppercase;
`;

export const Text = styled.p`
  margin-bottom: 10px;
  &::first-letter {
    margin-left: 40px;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: 500px;
  padding: 30px 20px;
  box-shadow: 0px 4px 15px rgba(2, 23, 42, 0.1);

  font-size: 10px;
  line-height: 1.2;
  color: #000000;

  text-align: center;
`;

export const Field = styled(TextField)`
  width: 100%;
`;

export const TextArea = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 20px;
`;

export const BtnPost = styled(Button)`
  margin-top: 20px !important;
`;

export const Delete = styled(Button)``;

export const LinkMore = styled(Link)`
  margin-right: 10px;
  color: #fff;
  transition: color 250ms var(--timingFn);

  &:hover,
  &:focus {
    color: var(--accentColor);
  }
`;
