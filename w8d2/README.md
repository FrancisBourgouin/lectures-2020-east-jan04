# W8D2 - Real World React

## Today's menu

- Frontend routing with React Router
- Playing with a global state with useContext
- Authentication in a SPA
- Using references with useRef (extra, if we have time)

## Frontend routing with React Router

Frontend routing is different from what we've been playing with so far. 

The goal of frontend routes is to conditionally show you a set of components, a little bit like what the useVisualMode hook that we built is doing in our scheduler project. However, it uses the url path as a source, or guide, to determine what to show. 

The illusion of changing 'pages' in a React app with the router is achieved by conditionnal rendering, not by reloading the page.

References: 
- https://reactrouter.com/web/guides/quick-start
- The `demo-react-router` demonstration

## Playing with a global state with useContext

When we deal with apps that have a lot of different components that are deeply nested, it can be very annoying to pass down props to the last element. This is called prop drilling. The problem is the deeper you go, the easier it is to do a small mistake in naming or referencing, and break down the entire chain of drilling.

To alleviate those issues, it's possible for us to use the concept of context. Creating a context provider will allow all children to access the values stored inside the context, with having it drilled down.

References: 
- https://reactjs.org/docs/hooks-reference.html#usecontext
- The `demo-context-hook` demonstration

## Authentication in a SPA

Authentication in our past project were done when using multi-page applications. The authentication sequence would go like this:

- We want to access a protected route `/private`
- We are redirected to `/login` since we do not have a cookie proving we are authenticated
- We fill the form and submit, posting to `/login`
- We get a redirection to `/private`, this time bearing a cookie
- The `/private` route reads the data from the cookie and generate the content
- We get the content.

However, in a single page app, we ideally don't want to be redirected, or refreshed. Also, in a SPA, we want content from an API, not rendered content. In our app, we know if we're logged in or not, since we control our state. A flow would look like that.

- We want to show content of the components called by the `/private` frontend route.
- We are not authenticated since we don't have a `user object` in our state
- We render the login component, and post to `/login`
- We get a `JSON answer` back, containing a `cookie` (this is a contentious part)
- We store the `user object` in our state and show the components again.

References: 
- The `demo-user-authentication` demonstration

## Using references with useRef

References: 
- https://reactjs.org/docs/hooks-reference.html#useref
- The `demo-react-router` demonstration
