import { Link } from './Navigation.style';

function Navigation() {
  return (
    <nav>
      <Link to="/" exact>
        Blog
      </Link>
    </nav>
  );
}

export default Navigation;
