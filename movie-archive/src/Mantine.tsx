import { createTheme, MantineProvider } from "@mantine/core";
import App from "./App";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function Mantine() {
  return (
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  );
}
