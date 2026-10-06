import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getContact } from "../services/contactsService";
import type { ContactDetail } from "../types/contact";

function ContactDetailPage() {
  const { id } = useParams();
  const [contact, setContact] = useState<ContactDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setContact(null);
    setError(null);
    getContact(id)
      .then(setContact)
      .catch(() => setError("Contacto no encontrado."));
  }, [id]);

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  if (!contact) {
    return <p className="text-muted" role="status">Cargando contacto…</p>;
  }

  return (
    <section className="card" aria-labelledby="contact-name">
      <div className="card-body">
        <h1 className="card-title h3" id="contact-name">
          {contact.name}
        </h1>
        <p className="mb-1">
          {contact.email} · {contact.phone}
        </p>
        <p className="text-muted">
          {contact.company.name} · {contact.website}
        </p>
        <Link to="/contactos" className="btn btn-outline-primary">
          Volver a contactos
        </Link>
      </div>
    </section>
  );
}

export default ContactDetailPage;
