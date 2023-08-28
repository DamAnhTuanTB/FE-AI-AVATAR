import { useEffect, useState } from 'react';

function useOutsideComponent(ref: any) {
  const [isOutside, setIsOutside] = useState(false);

  function handleClickOutside(event: { target: any }) {
    if (ref.current && !ref.current?.contains(event.target)) {
      setIsOutside(true);
    }
  }

  useEffect(() => {
    if (ref.current) {
      setIsOutside(false);
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  });

  return isOutside;
}

export default useOutsideComponent;
