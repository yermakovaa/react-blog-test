import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Wrapper from './LoaderComponent.style';

function LoaderComponent() {
  return (
    <Wrapper>
      <Loader type="ThreeDots" color="#3f51b5" height="35" />
    </Wrapper>
  );
}

export default LoaderComponent;
