import styled from 'styled-components';
import { TextareaAutosize } from '@material-ui/core';

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 5px;
  text-align: center;
  font-weight: 700;
  font-size: 25px;
  text-transform: uppercase;
`;

export const Text = styled.p`
  margin-bottom: 20px;
  &::first-letter {
    margin-left: 40px;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: 500px;
  padding: 30px 20px;

  font-size: 10px;
  line-height: 1.2;
  color: #000000;

  text-align: center;
`;

export const TextArea = styled(TextareaAutosize)`
  width: 100%;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  margin-bottom: 30px;
`;

export const Item = styled.li`
  padding: 10px;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: pink;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
