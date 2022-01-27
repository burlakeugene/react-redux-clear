import React, { useEffect, useState } from 'react';

function useResize() {
  const [width, setWidth] = useState(window.innerWidth);
  const event = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', event);
    return () => {
      window.removeEventListener('resize', event);
    };
  });
  return { width };
}

export default function SomeComponent() {
  const { width } = useResize();

  return <div>{width}</div>;
}
