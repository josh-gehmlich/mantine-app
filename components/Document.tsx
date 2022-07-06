import { Group, Image, Text } from "@mantine/core";
import React from "react";

interface DocumentProps {
  name: string;
}

export default function Document({ name }: DocumentProps) {
  return (
    <Group
      key={name}
      sx={{
        border: "1px solid #eaecef",
        backgroundColor: "white",
        borderRadius: 4,
      }}
      spacing={0}
    >
      <Image
        width={50}
        radius={2}
        fit="cover"
        height={50}
        src="/doc.png"
        alt="document"
      />
      <Text size="sm" px={8} color="blue">
        {name}
      </Text>
    </Group>
  );
}
