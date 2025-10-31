"use client";

import { Button } from "@workspace/ui/components/button";
import { api } from "@workspace/backend/_generated/api";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";

export default function Page() {
  const user = useQuery(api.user.getManyUser);
  const addUser = useMutation(api.user.addUser);
  return (
    <>
      <UserButton />
      <div className="flex items-center justify-center min-h-screen bg-white text-black">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Hello World</h1>
          <OrganizationSwitcher hidePersonal />
          <Button size="sm" onClick={() => addUser()}>Button</Button>
          {user?.map((user) => (
            <div>
              {user.name}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
