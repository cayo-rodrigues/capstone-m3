import { UserProvider } from "./user";
import { AuthenticatedProvider } from "./authenticated";
import { WorkersProvider } from "./workers";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <AuthenticatedProvider>
        <WorkersProvider>{children}</WorkersProvider>
      </AuthenticatedProvider>
    </UserProvider>
  );
};

export default Providers;
