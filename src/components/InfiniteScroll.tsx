// InfiniteScroll.js
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function InfiniteScroll (handleSetOffset: any) {

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      handleSetOffset();
    }
  }, [inView]);

  return (
  <div ref={ref} style={{ height: "10px" }} />
  );
};

