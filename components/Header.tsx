import React from "react";
import Logo from "./Logo";
import { DarkModeToggle } from "./DarkModeToggle";
import UserButton from "./UserButton";
// import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { MessageSquareIcon, MessagesSquareIcon } from "lucide-react";
import Link from "next/link";
import CreateChatButton from "./CreateChatButton";

async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        {/* logo */}
        <Logo />

        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Language Select  */}

          {session ? (
            <>
              <Link href={"/chat"} prefetch={false}>
                <MessagesSquareIcon className="text-black dark:text-white" />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <Link href="/pricing">Pricing</Link>
          )}

          {/* Dark mode toggle*/}
          <DarkModeToggle />

          {/* user button */}
          <UserButton session={session} />
        </div>
      </nav>
      {/* upgrade banner */}
    </header>
  );
}

export default Header;
