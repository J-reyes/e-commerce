import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => {
  return (
    // dynamically render type of button but also always render 'custom-button'
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
  );
};

export default CustomButton;
