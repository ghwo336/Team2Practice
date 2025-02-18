import styled from "styled-components";

const Wrapper = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #0af;
  min-height: 700px;
`;

const LayOut = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default LayOut;
