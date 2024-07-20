//!Server Side Data Fetching 
async function dataFetch() {
    await new Promise((resolve, reject) => (setTimeout(resolve, 5000)));
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}


//!async Component
export default async function DataFetch() {
    const data = await dataFetch();
  return (
    <div>{data[0].title}</div>
  )
}

//-async Component only works in Server side rendering
//-We can not use any hooks in Server side rendering 
//-This do not redender the component because we are not using any hooks in this component and this is Server side Component


//`You do not need to fetch data in NEXT Server side rendering because it is already available in the server side`
//`You Directly use the dataBase in the Server side rendering in NEXT.js`
//`page.tsx("use server") Backend Logic + Frontend Logic in Single File`
const PrismaClient= require('@prisma/client').PrismaClient;

const client = new PrismaClient();

async function getUserDetails() {
  try {
    const user = await client.user.findFirst({});
	  return {
      name: user?.username,
      email: user?.username
    }
  }  catch(e) {
    console.log(e);
  }
}

export  async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        Name: {userData?.name}
        {userData?.email}
    </div>
  );
}