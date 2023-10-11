"use client";
import React, { useState } from "react";

export default function TrialPage() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="relative">
      <div className="bg-white p-4">
        <h1 className="text-2xl">Main Page Content</h1>
        <button
          onClick={() => setShowOverlay(true)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Show Overlay
        </button>
      </div>

      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded">
            <h2 className="text-xl">Overlay Content</h2>
            <button
              onClick={() => setShowOverlay(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close Overlay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
