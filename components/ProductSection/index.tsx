import styled from "styled-components";
import type { Product as ProductType } from "../../types.d";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import Product from "../Product";

const ProductSectionWrapper = styled.section`
    width: 100%;
    font-family: var(--open-sans);
    & .section_heading {
        background: #e5c7f8;
        border-radius: 4px 4px 0px 0px;
        padding: 0.5rem 2rem;
        font-style: normal;
        font-weight: 501;
        font-size: 20px;
        line-height: 27px;

        color: #222828;
        font-stretch: 100;
    }
    & .section_body {
        background: #ffffff;
        box-shadow: 0px 1px 3px rgba(34, 40, 40, 0.25);
        padding: 1rem;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 20px;
    }
`;

const ProductSection: React.FC<{ products: ProductType[] }> = ({
    products,
}) => {
    const isDesktop = useMediaQuery({
        query: "(min-device-width: 1024px)",
    });
    const isTablet = useMediaQuery({ query: "(min-device-width: 600px)" });

    const [slideCount, setSlideCount] = useState(1);

    useEffect(() => {
        setSlideCount(isDesktop ? 5 : isTablet ? 3 : 1);
    }, [isDesktop, isTablet]);

    return (
        <ProductSectionWrapper id="product_section">
            <h2 className="section_heading">Products</h2>
            <div className="section_body">
                {products.map((product: ProductType, index: number) => (
                    <Product key={index} product={product} />
                ))}
            </div>
        </ProductSectionWrapper>
    );
};

export default ProductSection;
