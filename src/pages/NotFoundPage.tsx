import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="text-center py-5">
      <h1>404 · Página no encontrada</h1>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default NotFoundPage;
