import { useToast } from "@chakra-ui/react";

export default function Component() {
  const toast = useToast();
  return (
    <button
      onClick={() => {
        toast();
      }}
    >
      Click Me
    </button>
  );
}
