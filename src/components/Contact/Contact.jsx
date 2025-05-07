import css from "./Contact.module.css";

export default function Contact({ name, number, onDelete }) {
  return (
    <li className={css.item}>
      <div className={css.contactInfo}>
        <div className={css.contactRow}>
          <span className={css.icon}>👤</span>
          <span>{name}</span>
        </div>
        <div className={css.contactRow}>
          <span className={css.icon}>📞</span>
          <span>{number}</span>
        </div>
      </div>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}
