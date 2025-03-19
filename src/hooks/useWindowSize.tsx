import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth, // Inicializa con el tamaño actual de la ventana
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Inicializa la ventana con los valores correctos
    handleResize();
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);  // El efecto se ejecuta solo al montar el componente

  return windowSize;
}

export default useWindowSize;
