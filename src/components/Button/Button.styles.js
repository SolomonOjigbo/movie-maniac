import styled from "styled-components";

export const Wrapper = styled.div`
    display: block;
    background: var(--darkGrey);
    width: 20%;
    min-width: 180px;
    height: 60px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: var(--fontBig);
    margin: 30px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;
    padding: 15px 100px;

    :hover {
        opacity: 0.8;
    }
`;