"use client";

import "./globals.css";
import NavBar from "./components/NavBar";
import { ApolloProvider } from "@apollo/client";
import client from "./lib/apollo-client";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>
          <NavBar />
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}
