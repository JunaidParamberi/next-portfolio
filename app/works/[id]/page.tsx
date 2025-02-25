"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Work } from "@/types/types";

const Page = ({ params }) => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="h-screen flex items-center justify-center">
      prodect {id}
    </div>
  );
};

export default Page;
