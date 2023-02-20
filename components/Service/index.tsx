import React from "react";
import styled from "styled-components";
import type { Service as ServiceType } from "../../types.d";
import Button from "../styled/Button.styled";

const ServiceWrapper = styled.div`
    width: 200px;
    overflow: hidden;
    margin: 0 auto;
    & .service_details {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 14px;
        & .service_name {
            width: 100%;
            text-align: center;
            font-size: 22px;
            font-weight: 700;
            overflow: hidden; /* Hide any overflow beyond the container */
            text-overflow: ellipsis; /* Add an ellipsis to indicate truncated text */
            white-space: nowrap; /* Prevent the text from wrapping to a new line */
        }
        & .discounted_price {
            font-weight: 700;
        }
        & .undiscounted_price {
            font-weight: 200;
            color: rgba(0, 0, 0, 0.5);
        }
    }
    & .button_group {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ServiceImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
`;

const InlineFlex = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 0.1rem;
`;
const Service: React.FC<{ service: ServiceType }> = ({ service }) => {
    return (
        <ServiceWrapper>
            <ServiceImage src={service.imageUrl} alt="service" />
            <div className="service_details">
                <span className="service_name">{service.name}</span>
            </div>
            <div className="button_group">
                <Button
                    fontSize="10px"
                    padding=".3rem .5rem"
                    bgColor="rgba(215, 248, 255, 0.6)"
                    color="rgba(0, 0, 0, 1)"
                >
                    <InlineFlex>
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.7 2.27335C11.0888 1.65597 10.3608 1.16646 9.55843 0.833387C8.75606 0.500309 7.89541 0.330326 7.02667 0.333353C3.38667 0.333353 0.420002 3.30002 0.420002 6.94002C0.420002 8.10669 0.726669 9.24002 1.3 10.24L0.366669 13.6667L3.86667 12.7467C4.83333 13.2734 5.92 13.5534 7.02667 13.5534C10.6667 13.5534 13.6333 10.5867 13.6333 6.94669C13.6333 5.18002 12.9467 3.52002 11.7 2.27335ZM7.02667 12.4334C6.04 12.4334 5.07334 12.1667 4.22667 11.6667L4.02667 11.5467L1.94667 12.0934L2.5 10.0667L2.36667 9.86002C1.8185 8.98466 1.52743 7.97285 1.52667 6.94002C1.52667 3.91335 3.99333 1.44669 7.02 1.44669C8.48667 1.44669 9.86667 2.02002 10.9 3.06002C11.4117 3.56933 11.8171 4.17513 12.0929 4.8423C12.3687 5.50948 12.5094 6.22476 12.5067 6.94669C12.52 9.97335 10.0533 12.4334 7.02667 12.4334ZM10.04 8.32669C9.87333 8.24669 9.06 7.84669 8.91333 7.78669C8.76 7.73335 8.65333 7.70669 8.54 7.86669C8.42667 8.03335 8.11333 8.40669 8.02 8.51335C7.92667 8.62669 7.82667 8.64002 7.66 8.55335C7.49333 8.47335 6.96 8.29335 6.33333 7.73335C5.84 7.29335 5.51333 6.75335 5.41333 6.58669C5.32 6.42002 5.4 6.33335 5.48667 6.24669C5.56 6.17335 5.65334 6.05335 5.73334 5.96002C5.81333 5.86669 5.84667 5.79335 5.9 5.68669C5.95334 5.57335 5.92667 5.48002 5.88667 5.40002C5.84667 5.32002 5.51333 4.50669 5.38 4.17335C5.24667 3.85335 5.10667 3.89335 5.00667 3.88669H4.68667C4.57333 3.88669 4.4 3.92669 4.24667 4.09335C4.1 4.26002 3.67334 4.66002 3.67334 5.47335C3.67334 6.28669 4.26667 7.07335 4.34667 7.18002C4.42667 7.29335 5.51333 8.96002 7.16667 9.67335C7.56 9.84669 7.86667 9.94669 8.10667 10.02C8.5 10.1467 8.86 10.1267 9.14667 10.0867C9.46667 10.04 10.1267 9.68669 10.26 9.30002C10.4 8.91335 10.4 8.58669 10.3533 8.51335C10.3067 8.44002 10.2067 8.40669 10.04 8.32669Z"
                                fill="#4ECB71"
                            />
                        </svg>
                        <span>Contact Us</span>
                    </InlineFlex>
                </Button>
            </div>
        </ServiceWrapper>
    );
};

export default Service;
