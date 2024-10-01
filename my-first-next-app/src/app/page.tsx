// "use client";
// import { useEffect } from "react";
import { Suspense } from "react";
import NewProductList from "./_components/NewProductList";
import ProductList from "./_components/ProductList";
import Loading from "./product/loading";

export default async function Home() {
  console.log("안녕 , 난 서버 컴포넌트야");
  // console.log("어디서 실행되는거지?");
  //브라우저가 아닌 어플리케이션을 실행시킨 서버 -> 로컬호스트에서 실행중

  // 첫 번째 환경은 노드

  // 두번째는 브라우저 -> 클라이언트
  // 사용하기 위해서 최상단에 "use client"를 작성해줘야 함

  // useState, useEffect처럼 사용되는 훅 들은
  // 클라이언트 사이드에서만 사용이 가능함

  // useEffect(() => {
  //   console.log("어디에서 실행되는 걸까?");
  // }, []);

  // 4가지 렌더링 기법

  // 1. SSG
  // next.js에서 기본적으로 아무것도 지정하지 않으면 SSG를 사용

  //서버 사이드 렌더링
  // const res = await fetch("http://localhost:4000/products", {
  //   cache: "no-store",
  // });

  //서버사이드 제네레이션
  // const res = await fetch("http://localhost:4000/products", {
  //   cache: "force-cache",
  // });
  // ISR
  // const res = await fetch("http://localhost:4000/products", {
  //   next: {
  //     revalidate: 3,
  //   },
  // });

  // const data: Product[] = await res.json();
  console.log("render");

  return (
    <div className="bg-black text-white">
      <h1>Sparta Shop</h1>
      <Suspense fallback={<Loading />}>
        <NewProductList />
      </Suspense>
      <Suspense fallback={<Loading />}>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <ProductList />
      </Suspense>
    </div>
  );
}

export type Product = {
  id: number;
  handle: string;
  availableForSale: boolean;
  isNew: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: {
    name: string;
    values: string[];
  }[];
  price: {
    amount: string;
    currencyCode: string;
  };
  images: string;
  seo: {
    title: string;
    description: string;
  };
  tags: string[];
  rating: number;
};
