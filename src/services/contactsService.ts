import type { Contact, ContactDetail } from "../types/contact";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function getContacts(): Promise<Contact[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status}`);
  }

  return response.json() as Promise<Contact[]>;
}

export async function getContact(id: string): Promise<ContactDetail> {
  const response = await fetch(`${API_URL}/${encodeURIComponent(id)}`);

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status}`);
  }

  return response.json() as Promise<ContactDetail>;
}
