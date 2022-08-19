import { ReactNode } from "react";
import { UserProvider } from "./UserContext";

interface IProvidersProps {
    children: ReactNode;
}

const Providers = ({children}: IProvidersProps) => {
    return(
        <UserProvider>
            {children}
        </UserProvider>
    );
}

export default Providers;