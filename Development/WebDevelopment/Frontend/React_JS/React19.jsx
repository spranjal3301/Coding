//!React19


//- useTransition hook :
                //* Its reduse the overHead of manually managing pending state 
import React, { useState, useTransition } from 'react';

const React19 = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState(null);
    const [isPending, startTransition] = useTransition();
    
    const handleSubmit = () => {
        //- async transition will immediately set the isPending state to true,
        //- make the async request(s), and switch isPending to false after any transitions. 
        startTransition(async () => {
            const error = await updateName(name);
            if (error) {
              setError(error);
              return;
            } 
            redirect("/path");
        })
    }

    return (
       <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
    )
}

//!Form


//- useOptimistic hook 
            //* Common UI pattern when performing a data mutation we assume that the mutation will be successful and 
            //* update the UI immediately, then we wait for the server response to confirm the mutation was successful,
            //* if it fails we revert the UI back to its original state.
            //- This hook manages the optimistic update and the server response for you.


function ChangeName({currentName, onUpdateName}) {
  const [optimisticName, setOptimisticName] = useOptimistic(currentName);

  const submitAction = async formData => {
    const newName = formData.get("name");
    setOptimisticName(newName);
    const updatedName = await updateName(newName);
    onUpdateName(updatedName);
  };

  return (
    <form action={submitAction}>
      <p>Your name is: {optimisticName}</p>
      <p>
        <label>Change Name:</label>
        <input
          type="text"
          name="name"
          disabled={currentName !== optimisticName}
        />
      </p>
    </form>
  );
}


//- useActionState hook
                //* Handle form submission and server response in a single hook.
function ChangeName({ name, setName }) {
    const [error, submitAction, isPending] = useActionState(
      async (previousState, formData) => {
        const error = await updateName(formData.get("name"));
        if (error) {
          return error;
        }
        redirect("/path");
        return null;
      },
      null,
    );
  
    return (
      <form action={submitAction}>
        <input type="text" name="name" />
        <button type="submit" disabled={isPending}>Update</button>
        {error && <p>{error}</p>}
      </form>
    );
  }



//- useFormStatus hook  
        //* Part of the useActionState hook
        //* Get the current status of a form submission.
import {useFormStatus} from 'react-dom';
function DesignButton() {
  const {pending} = useFormStatus();
  return <button type="submit" disabled={pending} />
}



//! use hook
        //* you can read a promise with use, and React will Suspend until the promise resolves:

import {use} from 'react';

function Comments({commentsPromise}) {
  // `use` will suspend until the promise resolves.
  const comments = use(commentsPromise);
  return comments.map(comment => <p key={comment.id}>{comment}</p>);
}

function Page({commentsPromise}) {
  // When `use` suspends in Comments,
  // this Suspense boundary will be shown.
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comments commentsPromise={commentsPromise} />
    </Suspense>
  )
}