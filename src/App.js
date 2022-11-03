import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";

function App() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
