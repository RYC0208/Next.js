import Link from "next/link";

export default function Home() {
  return (
    <div>
      안녕하세요 next.js입니다
      <Link href={"/test"}> test로 이동하기</Link>
    </div>
  );
}
