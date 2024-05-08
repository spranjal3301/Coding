//! React Query
//* library that simplifies data fetching, caching, and state management in React applications
//* It provides a comprehensive set of features to handle various data fetching scenarios efficiently.

//` Prefetching: To pre-fetch data before it's needed, improving performance. 
//`Prefetching data make React Query better than useEffect(Render Component then fetch).

//- Benefits of React Query
// ?Simplified Data Fetching: Abstracts away complex data fetching logic.
// ?Improved Performance: Caching reduces unnecessary API calls.
// ?Enhanced User Experience: Automatic refetching ensures data freshness.
// ?Error Handling and Mutations: Built-in mechanisms for robustness.

//`API Requests with useEffect

import React, { useEffect, useState } from 'react';

function MyComponent() {
    const [data,setdata] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true); 
        setError(null); // Reset error on new fetch attempt
  
        try {
          const response = await fetch('/your-api-endpoint');
          if (!response.ok) {
            throw new Error('API request failed');
          }
          const data = await response.json();
          setdata(data);
        } catch (error) {
          setError(error); 
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []); 


    if (error) return <div>Error: </div>;

    return (
      <div>{data}</div>
    );
}





//`API Requests with React Query


import { useQuery } from 'react-query';

async function fetchTodos() {
  const response = await fetch('https://api.example.com/todos');
  return await response.json();
}

function MyComponent() {
  const { isLoading, error, data } = useQuery('todos', fetchTodos); // Query key and query function

  if (isLoading) return <div>Loading todos...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}


//`React Query Features useMutation
//* Mutations: React Query offers hooks like useMutation for handling data updates on the server.
//* It integrates mutations with caching mechanisms to keep your data consistent.

//` useQueryClient(): use to fetch  updated  after update by useMutation

import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios'; // Or your preferred HTTP client

const queryClient = useQueryClient(); // Get the query client

const CreateTodo = () => {
  const [newTodoText, setNewTodoText] = useState(''); 

  const mutation = useMutation(newTodo => {
    return axios.post('/api/todos', newTodo);
  }, {
    onSuccess: () => {
      // Optimistically update the 'todos' query
      queryClient.invalidateQueries('todos'); 
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ title: newTodoText });
    setNewTodoText(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={newTodoText} 
        onChange={(e) => setNewTodoText(e.target.value)} 
      />
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Saving...' : 'Create Todo'}
      </button>
    </form>
  );
};


//`add Dependency to useQuery

function MyComponent({ userId }) {
    const { isLoading, error, data } = useQuery(
      ['user', userId], // Query key now includes the dependency
      () => fetchUserData(userId), 
      {
        enabled: !!userId, // Only run the query if userId is defined
        refetchOnWindowFocus: false // Adjust re-fetch behavior when the window gets focus  
      }
    );
  
    // ... rest of your component
  }



//   2. Manual Refetching (for useEffect-like situations):

// If you need precise useEffect-like dependency management, here's how to use refetch:


import { useQuery, useQueryClient } from 'react-query';

function MyComponent({ userId }) {
  const queryClient = useQueryClient();
  const { isLoading, error, data, refetch } = useQuery(
    ['user', userId], 
    () => fetchUserData(userId) 
  );

  useEffect(() => {
    // Refetch whenever userId changes
    refetch();  
  }, [userId]); 

  // ... rest of your component
}