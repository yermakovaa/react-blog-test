import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container';
import Header from './components/Header';
import LoaderComponent from './components/LoaderComponent';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */),
);

const PostView = lazy(() =>
  import('./views/PostView' /* webpackChunkName: "post-view" */),
);

const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "not-found-view" */),
);

function App() {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<LoaderComponent />}>
          <Switch>
            <Route path="/" exact>
              <HomeView />
            </Route>

            <Route path="/posts/:id">
              <PostView />
            </Route>

            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </Suspense>
        <ToastContainer autoClose={3700} />
      </Container>
    </>
  );
}

export default App;
