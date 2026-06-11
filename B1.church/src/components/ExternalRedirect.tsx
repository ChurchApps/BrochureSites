import { useEffect } from "react";

const ExternalRedirect = ({ to }: { to: string }) => {
  useEffect(() => {
    window.location.replace(to + window.location.search);
  }, [to]);
  return null;
};

export default ExternalRedirect;
