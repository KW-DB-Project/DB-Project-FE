import styled from "styled-components";

export default function BackgroundLayout({ className, children }) {
  return <Back className={className}>{children}</Back>;
}

const Back = styled.div`
width: 100%;
height: 100%;
`;