import React, { useEffect, useMemo, useState } from 'react'
import './App.css'

//!Custom Hooks
//- Custom Hooks are JavaScript functions whose names are prefixed with the word "use".
//- They can call other Hooks if needed.
//- Custom Hooks allow you to reuse stateful logic without changing your component hierarchy.
//- but every time you use a custom Hook, all state and effects are fully isolated.

//!Rules of Hooks
//* Only call Hooks at the top level of your function.
//* Only call Hooks from React function components or custom Hooks.
//* Don’t call Hooks from regular JavaScript functions.

//?Syntax
//? function useName(){
//?   const [state, setState] = useState(initialState)
//?   useEffect(() => {}, [])
//?   return state;
//? }


//`Example 1: useFeatch`
//? Custom Hook to fetch data from an API
function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (e) {
      setError(`${e}. Some Error Occured`);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
}

//`Example 2: useForm`
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here
    // If valid, submit the form data 
  };

  return { values, errors, handleChange, handleSubmit };
}

//`Example 3: useLocalStorage`
function useLocalStorage(key,Defaultvalue){
  const [value,setValue]=useState(()=>{
      const item=localStorage.getItem(key);
      return item?JSON.parse(item):Defaultvalue;
  });

  useEffect(()=>{
      localStorage.setItem(key,JSON.stringify(value));
  },[key,value]);

  return [value,setValue];
}



//`Example 4: useOutsideClick: Detecting Clicks Outside a Component and Close it`
function useOutsideClick(ref, handler) {
  useEffect(() => {
    function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
}
function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}









function App(){
  const [count, setCount] = useState(0)
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr />
      {loading ? <h1>Loading...</h1> : <h1>{data[0].title}</h1>}
    </div>
  )

}



export default App