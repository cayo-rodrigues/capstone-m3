import { UserProvider } from "./user";
import { AuthenticatedProvider } from "./authenticated";

const Providers = ({ children }) => {
    return (
        <UserProvider>
            <AuthenticatedProvider>{children}</AuthenticatedProvider>
        </UserProvider>
    );
};

export default Providers;
