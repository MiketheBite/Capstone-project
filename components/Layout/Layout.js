import NavBar from "./NavBar";
import { useSession } from "next-auth/react";
import Profile from "./ProfileLayout";

export default function Layout({ children }) {
  const { data: session } = useSession();
  return (
    <div>
      {session && <Profile session={session} />}
      {children}
      {session && <NavBar session={session} />}
    </div>
  );
}
