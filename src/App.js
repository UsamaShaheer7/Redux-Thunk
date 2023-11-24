import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "./store/Slices";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error:{error}</div>;
  }
  return (
    <>
      <div>
        {data.map((item, index) => {
          return (
            <>
              <div key={index}>
                <div>{item.id}</div>
                <div>{item.title}</div>
                <div>{item.body}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
