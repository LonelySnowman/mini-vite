import React from 'react'
import { createRoot } from 'react-dom/client';

const Test = () => {
  return <div>11</div>
}

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<Test />);
export default Test
