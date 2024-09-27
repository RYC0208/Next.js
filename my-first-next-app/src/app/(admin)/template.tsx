"use client";
import { useEffect } from "react";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useEffect(() => {
    console.log("렌더링 시 실행됨");
  }, []);
  return (
    <>
      <h1>admin 페이지입니다.</h1>
      {children}
    </>
  );
};

export default AdminLayout;
