import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

// we pass it the component we want to wrap
// which gives us a Link styled components
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

// option container
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// pass in the css OptionContainerStyles
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
