import UserProfile from "@/src/types/UserProfile";
import "next-auth";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: UserProfile;
    }
}