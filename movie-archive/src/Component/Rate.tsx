import { Button, Flex, Group, Input, Title } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import classes from "./Css/ContainedInput.module.css";

export default function Rate() {
  return (
    <>
      <div className="MainSection">
        <div className="Header">
          <Group justify="space-between" align="center">
            <Title className={classes.title}>Rated Movies</Title>
            <Input placeholder="Search movie title" leftSection={<IconSearch size={16} />} />
          </Group>
          <Flex mih={50} bg="rgba(234, 235, 237, 1)" gap="xs" justify="center" align="flex-start" direction="row" wrap="wrap">
            <Button.Group>
              <Button variant="default" onClick={() => {}}>
                1
              </Button>
              <Button variant="default" onClick={() => {}}>
                2
              </Button>
              <Button variant="default" onClick={() => {}}>
                3
              </Button>
            </Button.Group>
          </Flex>
        </div>
      </div>
    </>
  );
}
