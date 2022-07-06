import {
  Box,
  Button,
  createStyles,
  Group,
  MediaQuery,
  Menu,
  Stack,
  Table,
} from "@mantine/core";
import { BsChevronDown } from "react-icons/bs";
import type { NextPage } from "next";
import Document from "../components/Document";

const elements = [
  {
    name: "John Smith",
    age: 23,
    salary: "$150,000",
    documents: ["Offer.pdf", "Employment.pdf", "Assignment.pdf"],
  },
  {
    name: "Jane Doe",
    age: 21,
    salary: "$250,000",
    documents: ["Offer.pdf", "Employment.pdf", "Assignment.pdf"],
  },
  {
    name: "Emily White",
    age: 26,
    salary: "$350,000",
    documents: ["Offer.pdf", "Employment.pdf", "Assignment.pdf"],
  },
];

const useStyles = createStyles((theme) => ({
  itemHovered: {
    backgroundColor: "white",
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();

  return (
    <Table striped verticalSpacing="xs" horizontalSpacing="xl">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
          <th>Documents</th>
        </tr>
      </thead>
      <tbody>
        {elements.map((element) => (
          <tr key={element.name}>
            <td>
              <Box sx={{ width: 100 }}>{element.name}</Box>
            </td>
            <td>
              <Box sx={{ width: 30 }}>{element.age}</Box>
            </td>
            <td>
              <Box sx={{ width: 100 }}>{element.salary}</Box>
            </td>
            <td style={{ width: "100%" }}>
              <MediaQuery
                smallerThan="md"
                styles={{
                  display: "none",
                }}
              >
                <Group sx={{ width: "100%" }}>
                  {element.documents.map((document) => (
                    <Document key={document} name={document} />
                  ))}
                </Group>
              </MediaQuery>
              <MediaQuery
                largerThan="md"
                styles={{
                  display: "none",
                }}
              >
                <Menu
                  size="auto"
                  classNames={classes}
                  control={
                    <Button variant="outline" rightIcon={<BsChevronDown />}>
                      Documents
                    </Button>
                  }
                >
                  <Menu.Item p={4}>
                    <Stack
                      sx={{
                        maxHeight: "220px",
                        overflowX: "hidden",
                        overflowY: "auto",
                        scrollbarWidth: "thin",
                      }}
                    >
                      {element.documents.map((document) => (
                        <Document key={document} name={document} />
                      ))}
                    </Stack>
                  </Menu.Item>
                </Menu>
              </MediaQuery>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Home;
