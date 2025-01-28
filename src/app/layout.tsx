"use client";

import "./globals.css";
import NavBar from "./components/NavBar";
import { ApolloProvider } from "@apollo/client";
import client from "./lib/apollo-client";
import "./i18n/config";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/config";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <I18nextProvider i18n={i18n}>
          <ApolloProvider client={client}>
            <NavBar />
            {children}
          </ApolloProvider>
        </I18nextProvider>
      </body>
    </html>
  );
}
