import { RouterProvider } from "react-router";
import { routes } from "./client/router/Router";

function App() {
	return <RouterProvider router={routes} />;
}

export default App;
