/* eslint-disable @next/next/no-img-element */
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";
import UserImg from "@/../../public/userimage.jpg";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"; //fromdan sonraki kısmı elle düzelttik.
export async function UserNav() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />

            <img src={user?.picture ?? "https://www.vecteezy.com/vector-art/1840612-picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector"} alt="image of default user" className="rounded-full h-8 w-8 hidden lg:block" />
           

        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {user ? (
          <>
            <DropdownMenuItem className="w-full">
              <LogoutLink>Logout</LogoutLink>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <RegisterLink className="w-full">Register</RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem className="w-full">
              <LoginLink>Login</LoginLink>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
