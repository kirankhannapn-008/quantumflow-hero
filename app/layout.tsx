
import './globals.css';
import type { Metadata } from 'next';
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: 'QuantumFlow | AI Workflow Automation',
  description: 'QuantumFlow helps teams automate workflows with intelligent AI orchestration.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body><Navbar />{children}</body>
    </html>
  );
}
