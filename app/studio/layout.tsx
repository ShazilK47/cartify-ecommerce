import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cartify",
  description: "An E-commerce Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
