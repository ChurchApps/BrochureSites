import { Link } from "react-router-dom";
import { useTitle } from "../useTitle";

const NotFound = () => {
  useTitle("Page not found — Ministry Commons");

  return (
    <main className="container measure" style={{ textAlign: "center", padding: "4rem 1.5rem" }}>
      <h1 className="display">404</h1>
      <p className="subtitle">That page doesn’t exist.</p>
      <p style={{ marginTop: "2rem" }}><Link className="btn btn-rubric" to="/">Back to Ministry Commons</Link></p>
    </main>
  );
};

export default NotFound;
