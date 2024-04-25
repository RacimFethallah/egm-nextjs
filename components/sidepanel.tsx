import React from 'react';

export default function SidePanel({ sidePanelOpen }: { sidePanelOpen: boolean }) {
  return (
    <div
      className={`fixed left-0 h-screen w-64 bg-blue-50 p-4 transition-all ease-in-out duration-300 ${
        sidePanelOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Your side panel content goes here */}
      <h2>Side Panel</h2>
      <p>This is a side panel.</p>
    </div>
  );
}