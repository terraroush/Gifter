import React from "react";
import { Switch, Route } from "react-router-dom";
import { PostProvider } from "./PostProvider";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostDetails from "./PostDetails";

const ApplicationViews = () => {
  return (
    <Switch>
      <PostProvider>
      <Route path="/" exact>
        <PostList />
      </Route>

      <Route path="/posts/add">
        <PostForm />
      </Route>

      <Route path="/posts/:id">
        <PostDetails />
      </Route>
      </PostProvider>
    </Switch>
  );
};

export default ApplicationViews;