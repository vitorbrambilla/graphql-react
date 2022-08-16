import { useQuery } from "@apollo/client";
import { missions } from "./gql/Query";
import "./App.css";

function App() {
  const { loading, error, data } = useQuery(missions);
  console.log(data);

  return (
    <div className="app">
      {/* <ul>
        {data.map((dataEx) => (
          <li key={dataEx.launches.typename}>{dataEx.launches.__typename}</li>
        ))}
      </ul> */}

      {loading ? (
        <p>Aguarde...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div className="data-container">
            <h1>SpaceX GraphQL API!</h1>
            <div className="data">{JSON.stringify(data)}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
