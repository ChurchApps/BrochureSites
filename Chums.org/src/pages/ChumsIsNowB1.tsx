import { useEffect } from "react";

const B1_URL = "https://b1.church/";

const ChumsIsNowB1 = () => {
  useEffect(() => {
    window.location.replace(B1_URL + window.location.search + window.location.hash);
  }, []);

  return (
    <p>CHUMS is now B1. Continue to <a href={B1_URL}>{B1_URL}</a>.</p>
  );
};

export default ChumsIsNowB1;
