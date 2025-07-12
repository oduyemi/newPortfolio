"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";
import { Header } from "../navigation/Header";

// ~ ======= Create query client -->
const queryClient = new QueryClient();

type LayoutProps = React.ComponentProps<typeof ThemeProvider>;
const AppLayout: React.FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <ThemeProvider {...props}>
        <QueryClientProvider client={queryClient}>
          <Header />
          <div className="h-20"> </div>
          {children}
          <Toaster richColors position="bottom-right" />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AppLayout;
