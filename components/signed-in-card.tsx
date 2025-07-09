"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "@/lib/auth/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function SignedInCard() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <Card className="max-w-md">
        <CardContent>Loading...</CardContent>
      </Card>
    );
  }

  if (!session?.user) {
    return null; // Or show a sign-in prompt
  }

  const { name, email, image } = session.user;

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Signed In</CardTitle>
        <CardDescription>Welcome, {name || email}!</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-4">
        {image && (
          <Image
            src={image}
            alt={name || email}
            className="w-12 h-12 rounded-full border"
          />
        )}
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-muted-foreground">{email}</div>
        </div>
        <Button
          variant="outline"
          className="ml-auto"
          onClick={() =>
            signOut({
              fetchOptions: {
                onSuccess: () => {
                  redirect("/");
                },
              },
            })
          }
        >
          Log out
        </Button>
      </CardContent>
    </Card>
  );
}
