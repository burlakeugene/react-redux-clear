import React, { useEffect, useState } from 'react';

function useResize() {
  const [width, setWidth] = useState(window.innerWidth);
  const event = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    console.log('mount');
    window.addEventListener('resize', event);
    return () => {
      console.log('unmount');
      window.removeEventListener('resize', event);
    };
  }, []);
  return { width };
}

export default function SomeComponent() {
  const { width } = useResize();
  return <div>{width}</div>;
}
