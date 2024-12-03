"use client"
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { Users } from "../configs/schema";
import { db } from "../configs/db";
import { eq } from "drizzle-orm";

export const Provider = ({ children }) => {
  const { user } = useUser();

  useEffect(() => {
    user && isNewUser();
  }, []);

  const isNewUser = async () => {
    const result = await db
      .select()
      .from(Users)
      .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress));

    if (!result[0]) {
      db.insert(Users).values({
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        imageUrl: user?.imageUrl,
      });
    }
  };
  return <div>{children}</div>;
};