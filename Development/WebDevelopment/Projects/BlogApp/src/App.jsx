import { useEffect, useState } from "react";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./redux-toolkit/reducer/authSlice";
import { Footer, 
         Header, 
         Loder 
        } 
        from "./components";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const userData = await authService.getCurrentUser();
        userData ? dispatch(login({ userData })) : dispatch(logout());
      } catch (error) {
        console.log("🚀 ~App useEffect error:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <Loder />
      ) : (
        <div className="min-h-screen flex flex-wrap  content-between bg-gray-700">
          <div className="w-full ">
            <Header />
            <main>outlet</main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
