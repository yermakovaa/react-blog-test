import errorImage from '../../img/pageNotFound.png';
import { Main, Image, Title } from './NotFoundView.style';

export default function NotFoundView() {
  return (
    <Main role="alert">
      <Image src={errorImage} width="650" alt="Error" />
      <Title>Page not found 😨</Title>
    </Main>
  );
}
