import { AuthProvider } from "./auth/context/AuthProvider";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <AuthProvider>
      {/* routes */}
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
