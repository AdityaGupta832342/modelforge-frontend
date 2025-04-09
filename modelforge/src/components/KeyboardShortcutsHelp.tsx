import { useState } from 'react';

export default function KeyboardShortcutsHelp() {
  const [isOpen, setIsOpen] = useState(false);

  const shortcuts = [
    { key: 'Ctrl/Cmd + =', description: 'Zoom in' },
    { key: 'Ctrl/Cmd + -', description: 'Zoom out' },
    { key: 'Ctrl/Cmd + 0', description: 'Reset zoom' },
    { key: 'Delete/Backspace', description: 'Delete selected layer' },
    { key: 'Ctrl/Cmd + S', description: 'Save model' },
    { key: 'Ctrl/Cmd + Z', description: 'Undo' },
    { key: 'Ctrl/Cmd + Shift + Z', description: 'Redo' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-2 bg-[#2A214B] rounded-full text-white hover:bg-[#3A2A5B] transition-colors"
        title="Keyboard Shortcuts"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#1A1533] p-6 rounded-lg shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Keyboard Shortcuts</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-3">
              {shortcuts.map((shortcut) => (
                <div key={shortcut.key} className="flex justify-between items-center">
                  <span className="text-gray-400">{shortcut.description}</span>
                  <kbd className="px-2 py-1 bg-[#2A214B] rounded text-white font-mono text-sm">
                    {shortcut.key}
                  </kbd>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
} 