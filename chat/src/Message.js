import styles from "./message-style.module.css";

export const Message = ({ body }) => {
  return <p className={styles.messageBlock}>{body}</p>;
};
