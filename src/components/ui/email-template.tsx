import * as React from "react";
import { Html, Head, Body, Heading, Text } from "react-email";
interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export default function EmailTemplate({
  name,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <Html lang="en">
      <Head>
        <title>Contact Form</title>
      </Head>
      <Body>
        <Heading>Welcome to my portfolio</Heading>
        <Text>From: {name}</Text>
        <Text>Email: {email}</Text>
        <Text>Message: {message}</Text>
      </Body>
    </Html>
  );
}
