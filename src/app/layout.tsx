'use client';

import Sidebar from '@/app/PatientDashboard/layout/sidebar/Sidebar';
import Header from '@/app/PatientDashboard/layout/header/Header';
import React, { useState, ReactNode } from 'react';
import './globals.css';

interface RootLayoutProps {
  children?: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <div className="flex min-h-screen w-full">
          <Sidebar
            isSidebarOpen={true} // Keeping the sidebar always open
            isMobileSidebarOpen={isMobileSidebarOpen}
            onSidebarClose={() => setMobileSidebarOpen(false)}
          />
          <div className="flex flex-col flex-grow z-1 bg-transparent">
            <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
            <div className="w-full max-w-full pt-5 px-0">
              <div className="min-h-[calc(100vh-170px)] w-full flex p-0 m-0">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
