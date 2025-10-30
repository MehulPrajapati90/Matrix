"use client";

import { Button } from "@workspace/ui/components/button";
import { api } from "@workspace/backend/_generated/api";
import { useMutation, useQuery, Authenticated, Unauthenticated } from "convex/react";
import { UserButton, SignInButton } from "@clerk/nextjs";

export default function Page() {
  const user = useQuery(api.user.getManyUser);
  const addUser = useMutation(api.user.addUser);
  return (
    <>
      <Authenticated>
        <UserButton />
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Hello World</h1>
            <Button size="sm" onClick={() => addUser()}>Button</Button>
            {user?.map((user) => (
              <div>
                {user.name}
              </div>
            ))}
          </div>
        </div>
      </Authenticated>

      <Unauthenticated >
        <SignInButton>
          <p className="cursor-pointer">Sign-in with vercel</p>
        </SignInButton>
      </Unauthenticated>
    </>
  )
}
