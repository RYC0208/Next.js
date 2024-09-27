import Link from "next/link";

function About2() {
  return (
    <div>
      About2 페이지입니다
      <Link href={"/about"}>about으로 가</Link>
    </div>
  );
}

export default About2;
