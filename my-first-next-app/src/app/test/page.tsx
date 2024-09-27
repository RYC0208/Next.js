"use client";

import { useRouter } from "next/navigation";
import React from "react";

const TestPage = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };
  return (
    <div>
      <h1>Test Page</h1>
      <p>Hello Next</p>
      <button onClick={handleButtonClick}>home으로</button>
    </div>
  );
};

export default TestPage;
