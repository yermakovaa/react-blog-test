import Navigation from '../Navigation';
import AppBar from './Header.style';

export default function Header() {
  return (
    <AppBar position="static">
      <Navigation />
    </AppBar>
  );
}
