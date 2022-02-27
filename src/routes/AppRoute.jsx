import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {
  const isLoggedIn = false;

  return (
    <Route>
      {...rest}
      render=
      {(props) => {
        if (isAuthProtected && !isLoggedIn) {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        }
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    </Route>
  );
};


export default AppRoute;