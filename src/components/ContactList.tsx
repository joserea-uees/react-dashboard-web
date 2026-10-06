import { useEffect, useState } from "react";
import type { Contact } from "../types/contact";
import { getContacts } from "../services/contactsService";
import ContactRow from "./ContactRow";

function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    getContacts()
      .then(setContacts)
      .catch(() => setError("No se pudieron cargar los contactos."))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) {
    return <p className="text-muted" role="status">Cargando contactos…</p>;
  }

  if (error) {
    return <div className="alert alert-danger" role="alert">{error}</div>;
  }

  const contactosFiltrados = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(busqueda.trim().toLocaleLowerCase())
  );

  return (
    <>
      <div className="mb-3">
        <label htmlFor="buscar-contacto" className="form-label">
          Buscar por nombre
        </label>
        <input
          id="buscar-contacto"
          type="search"
          className="form-control"
          placeholder="Escribe un nombre"
          value={busqueda}
          onChange={(event) => setBusqueda(event.target.value)}
        />
      </div>
      <table className="table table-striped table-hover table-sm align-middle">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
          </tr>
        </thead>
        <tbody>
          {contactosFiltrados.length > 0 ? (
            contactosFiltrados.map((contact) => (
              <ContactRow key={contact.id} contact={contact} />
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center text-muted">
                No se encontraron contactos.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default ContactList;
