"use client";
import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { useRouter, redirect } from "next/navigation";
import React, { ReactNode } from "react";
import Navigation from "./_components/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isLoading) {
    return (
      <div className="h-full items-center justify-center flex">
        <Spinner size={"lg"} />
      </div>
    );
  }
  if (!isAuthenticated) {
    redirect("/");
  }

  return (
    <div className=" h-full flex dark:bg-[#1f1f1f]">
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
