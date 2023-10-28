import React from "react";
import { Tailwind } from "@react-email/tailwind";
import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Heading } from "@react-email/heading";
import { Hr } from "@react-email/hr";
import { Body } from "@react-email/body";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { Text } from "@react-email/text";

type ContactFormEmailProps = { message: string; senderEmail: string };

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border-black my-10 px-10 py-4 rounded-md">
              <Heading className=" leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
