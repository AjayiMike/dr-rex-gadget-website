import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import type { Service as ServiceType } from "../../types";
import Service from "../Service";

const ServicesSectionWrapper = styled.section`
    margin-top: 2rem;
    width: 100%;
    font-family: var(--open-sans);
    & .section_heading {
        background: #05d2ff;
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
    }
`;

const ServicesSection: React.FC<{ services: ServiceType[] }> = ({
    services,
}) => {
    const isDesktop = useMediaQuery({
        query: "(min-device-width: 1024px)",
    });
    const isTablet = useMediaQuery({ query: "(min-device-width: 600px)" });

    const [slideCount, setSlideCount] = useState(1);

    useEffect(() => {
        setSlideCount(isDesktop ? 4 : isTablet ? 3 : 1);
    }, [isDesktop, isTablet]);

    return (
        <ServicesSectionWrapper id="services_section">
            <h2 className="section_heading">Services</h2>
            <div className="section_body">
                <CarouselProvider
                    naturalSlideWidth={200}
                    naturalSlideHeight={250}
                    totalSlides={services.length}
                    visibleSlides={slideCount}
                    isPlaying={true}
                    interval={5000}
                    step={1}
                    playDirection="forward"
                    orientation="horizontal"
                    infinite={true}
                    isIntrinsicHeight={true}
                >
                    <Slider>
                        {services.map((service: ServiceType, index: number) => (
                            <Slide key={index} index={index}>
                                <Service service={service} />
                            </Slide>
                        ))}
                    </Slider>
                </CarouselProvider>
            </div>
        </ServicesSectionWrapper>
    );
};

export default ServicesSection;
