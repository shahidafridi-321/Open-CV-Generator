import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CVContextProvider } from "./client/context/CVContextProvider.jsx";
import { FormDataContextProvider } from "./client/context/FormDataContextProvider.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<CVContextProvider>
			<FormDataContextProvider>
				<App />
			</FormDataContextProvider>
		</CVContextProvider>
	</StrictMode>
);
