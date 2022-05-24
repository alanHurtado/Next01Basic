import type { NextPage } from "next";
import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";


const Pricing: NextPage = () => {
  return (
    <MainLayout>
      
        <h3 className={'title'}> Pricing Page </h3>
        <h1 className={'title'}>
          {/* Ir a <a href='/'> About</a> */}
          Ir a<Link href="/about">Home</Link>
        </h1>
      </MainLayout> 
  );
};

export default Pricing;
