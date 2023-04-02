import Head from "next/head";
import { Open_Sans } from "@next/font/google";
import Styled from "styled-components";
import { Container } from "../components/styled/Container.styled";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Jumbo from "../components/Jumbo";
import ProductSection from "../components/ProductSection";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Product } from "../types";
import Footer from "../components/Footer";
import { getAllProducts } from "../utils";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--open-sans" });

const MainContainer = styled(Container)`
    margin-top: 2rem;
`;

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllProducts();
            setProducts(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>Dr Rex Gadgets</title>
                <meta
                    name="description"
                    content="New and Uk Used Phones + laudry services"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopBar />
            <div className={openSans.variable}>
                <Header />
            </div>

            <main className={openSans.variable}>
                <Jumbo />
                <MainContainer>
                    {!!products.length && (
                        <ProductSection products={products} />
                    )}
                </MainContainer>
                <footer className={openSans.variable}>
                    <Footer />
                </footer>
            </main>
        </>
    );
}
