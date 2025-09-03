import React from 'react';

export default {
  title: 'Test/Simple',
};

export const Basic = () => (
  <div>
    <h1>Hello Storybook!</h1>
    <p>This is a test story to verify Storybook is working.</p>
    <button style={{ padding: '8px 16px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
      Test Button
    </button>
  </div>
);

export const WithTailwind = () => (
  <div className="p-4 bg-blue-100">
    <h1 className="text-2xl font-bold text-blue-800">Tailwind Test</h1>
    <p className="text-blue-600 mt-2">Testing if Tailwind classes work</p>
    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Tailwind Button
    </button>
  </div>
);