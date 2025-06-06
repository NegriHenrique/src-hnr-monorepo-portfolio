import { StrapiContact } from "../../../../types/strapi-content";
import { useTranslation } from "react-i18next";

export type Contact = {
  label: string;
  value: string;
  link: string;
};

export type ContactsProps = {
  contacts: StrapiContact[];
};

export function Contacts({ contacts }: ContactsProps) {
  const { t } = useTranslation("contacts");
  return (
    <section className="py-12 px-4 max-w-3xl mx-auto w-full">
      <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
        {t("section_title")}
      </h3>
      <ul className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {contacts.map((contact) => (
          <li key={contact.label}>
            <a
              href={contact.link}
              className="text-primary underline underline-offset-2 text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.label}:{" "}
              <span className="font-semibold">{contact.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
