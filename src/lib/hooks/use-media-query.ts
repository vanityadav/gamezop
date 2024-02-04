import * as React from "react";

export function useMediaQuery(query: string = "(min-width: 768px)") {
  const [value, setValue] = React.useState(false);

  React.useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches);
    }

    const result = matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  //   React.useEffect(() => {
  //     const handleDeviceDetection = () => {
  //       const userAgent = navigator.userAgent.toLowerCase();
  //       const isMobile =
  //         /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
  //       const isTablet =
  //         /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);

  //       if (isMobile) {
  //         setValue(false);
  //       } else if (isTablet) {
  //         setValue(false);
  //       } else {
  //         setValue(true);
  //       }
  //     };

  //     handleDeviceDetection();
  //     window.addEventListener("resize", handleDeviceDetection);

  //     return () => {
  //       window.removeEventListener("resize", handleDeviceDetection);
  //     };
  //   }, []);

  return value;
}
