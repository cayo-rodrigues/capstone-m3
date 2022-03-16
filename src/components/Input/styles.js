import styled from "styled-components";

// lembre-se de usar html semântico
export const Container = styled.div`
    p {
        padding-left: 16px;
        margin-bottom: 10px;
    }
`;

export const Content = styled.div`
    background: var(--color-secondary);
    border: 2px solid var(--color-secondary);
    padding: 8px 16px 12px;
    border-radius: 35px;
    box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;
    :focus-within {
        border-color: var(--color-primary);
    }
    input {
        background: var(--color-secondary);
        border: none;
        color: var(--white);
        width: 100%;
        font-size: 14px;
    }
    button {
        margin-left: 10px;
        background: transparent;
        border: none;
        color: var(--white);
        svg {
            transform: translateY(3px) scale(1.5);
        }
    }
`;
