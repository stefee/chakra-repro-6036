import { ChakraProvider } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Component from "./Component";

it("should render successfully", () => {
  render(
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  );
});
