//! Lazy Loading ,Suspense ,Error Boundaries



//!Lazy loading
import React, { Suspense } from 'react'
//* A technique to delay the loading of certain components or parts of your React application until they are actually needed.
//* Goal: Improve your application's initial load time and performance by avoiding loading code that might not be immediately used.

// -How to Implement Lazy Loading in React
//*React provides a built-in way to achieve lazy loading through the combination of React.lazy() and the Suspense component:

//`Dynamic Import with React.lazy()
//*This tells React to create a separate bundle for the component being loaded.
const OtherComponent = React.lazy(() => import('./OtherComponent')); //-export default OtherComponent



//` Suspense for Fallbacks
//*Suspense is a React mechanism primarily designed to make it easier to manage loading
//*states and asynchronous data fetching within your React components.

//*Suspense acts as a placeholder while the lazily loaded component is being fetched.
//*The fallback prop shows a loading indicator until the actual component is ready.
//? Mandatory to use Suspense with React.lazy() to handle loading states and errors.
<Suspense fallback={<div>Loading...</div>}>
     <OtherComponent />
</Suspense>


//!Error Boundaries  (not used)
// Error boundaries are specialized React components designed to gracefully
// handle JavaScript errors that occur within their child component tree. 
import { ErrorBoundary } from 'react-error-boundary';

const MyBuggyComponent = () => {
  throw new Error('Oops!');
};

const App = () => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <MyBuggyComponent />
  </ErrorBoundary>
);

const ErrorFallback = () => (
  <div>Something went wrong!</div>
);


