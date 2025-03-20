//! React Query
//* library that simplifies data fetching, caching, and state management in React applications
//* best for server/async state management which other state management libraries 
//* like Redux, MobX, or Recoil can't handle efficiently.
//* It provides a comprehensive set of features to handle various data fetching scenarios efficiently.

//` Prefetching: To pre-fetch data before it's needed, improving performance. 
//` Prefetching data make React Query better than useEffect(Render Component then fetch).

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
  //- data being cached by React Query, it will be returned from the cache on subsequent calls to fetchTodos().

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
          queryClient.invalidateQueries('todos'); //- Refetch the data after the mutation is successful
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











//* isPending/isLoading: A boolean indicating whether the query is in a loading state (only true if no data in cache).
//* isFetching: A boolean indicating whether the query is fetching data (everytime true is fetching in BG).
//* isError: A boolean indicating whether the query has encountered an error.
//* data: The data returned from the queryFn.
//* error: The error object returned from the queryFn.
//* refetch: A function to manually refetch the query data.


const { isPending, isError, data, error,isFetching,refetch } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodoList,
  //? staleTime: 1000 * 60 * 5, // after 5 minutes refetch by default 0
  //? refetchInterval: 1000 * 60 * 1, // Create polling :Refetch every 1 minutes (default:false)
  //? refetchIntervalInBackground: false, // Disable refetch when the window is in the background  (default:false)
  //? enabled: false, // Disable refetch on component mount (default:true) {use in customise fetch on event}
})


{/*//* <button onClick={refetch}>Refetch</button> // Manually refetch the query data */}


//- Query by id (/todos/:id)

useQuery({
  queryKey: ['todos',id],
  queryFn: fetchTodo,
})

//- Pagination (/posts)

const {page} = useState(1);
useQuery({
  queryKey: ['posts',page],
  queryFn: ()=> fetchPosts(page),
  placeholderDate:keepPreviousData //? Keep previous data when fetching new data no more Loading (page 2 have page 1 data until fetch)
})

//- Infinite Scroll (/posts)

const {fetchNextPage,hasNextPage,isFetchingNextPage}=useInfiniteQuery({  
  queryKey: ['posts'],
  queryFn: fetchPosts, //- fetchPosts(pageParam) pageParam(auto rev) is auto increment by 1 
  intialPageParam: 1, //- Start from page 1
  getNextPageParam: (lastPage, allPages) => {
    if(allPages.length < totalPage) 
      return allPages.length + 1; // if allPages less than totalPage increment page
    
    return undefined; // if allPages equal to totalPage stop fetching
  }
})
//* <button onClick={fetchNextPage} disabled={!hasNextPage}>Load More</button> // Load more data on button click 

//- infinite scroll without button click use  'react-intersection-obsever' to fetch data when user scroll to bottom
import { useInView } from "react-intersection-observer";

const { ref, inView, entry } = useInView({
  /* Optional options */
  threshold: 0,
}); //? inView is true when the element is in view

useEffect(() => {
  if (inView) {
    fetchNextPage();
  }
},[inView,fetchNextPage]);


//* div ref={ref} //? add bottom ref to div to check inView
//* isFetchingNextPage ?? <div>Loading...</div> //? show loading when fetching next page

 



//` useMutation
//* useMutation hook is used to perform mutations (POST, PUT, DELETE) on the server. 

const _queryClient = useQueryClient(); // Get the query client

const todo_mutation = useMutation({  //- {isLoading,isError,mutate,error}
  mutationFn:async (newTodo) => {
    const response = await axios.post('/api/todos', newTodo);
    return response.data; //- {id,...newTodo}
  },
  
    onSuccess: (data) => {
      queryClient.invalidateQueries('todos'); // Refetch the data after the mutation is successful
    },
    onError: (error) => {
      console.error(error);
    },
  }
);

//* todo_mutation.mutate({ title: newTodoText }); // Call the mutation function with the new todo data




//` Adding data to the cache after a mutation

//- queryClient.invalidateQueries('todos') but why refetching all data when only one data is updated
//-  which is genrally return by POST request at time of mutation

useMutation({ 
  mutationFn:async (newTodo) => {
    const response = await axios.post('/api/todos', newTodo);
    return response.data; //- {id,...newTodo}
  },
  
  onSuccess: (data) => {
      queryClient.setQueryData(['todos'], (oldData) => {
        return {
          ...oldData, 
          data:[...oldData.data, data]}
      }); //- Update the cache with the new todo
    },
  onError: (error) => {
      console.error(error);
    },
  }
);


//` useMutation with Optimistic Updates
//* Optimistic updates are used to update the UI optimistically before the mutation is completed.

useMutation({
  mutationFn:async (newTodo) => {
    const response = await axios.post('/api/todos', newTodo);
    return response.data;
  },
  onMutate: (newTodo) => {
      queryClient.cancelQueries(['todos']);
      const previousTodos = queryClient.getQueryData(['todos']);
      queryClient.setQueryData(['todos'], {
        ...previousTodos,
        data: [...previousTodos.data, {...newTodo,id:Date.now()}],
      });
      return { previousTodos };
    },
  onError: (error, newTodo, context) => {
      queryClient.setQueryData(['todos'], context.previousTodos);
    },
  onSettled: () => {
      queryClient.invalidateQueries(['todos']);
    },
  }
); 


//` useQueryClient vs new QueryClient()

//*The useQueryClient hook provides access to the existing QueryClient instance from the nearest QueryClientProvider in your component tree
//* useQueryClient hook is maintain single instance of QueryClient in whole app


//* new QueryClient() creates a new QueryClient instance.
//* in server side rendering use new QueryClient() to create new instance for each request
//* It is used when you want to create a new QueryClient instance with custom configurations.