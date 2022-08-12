import styles from "./message.module.css";
import classNames from "classnames";
import PropTypes from "prop-types";

export function Message({ message }) {
  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <h3>{message.message}</h3>
      <p>{message.author}</p>
      <p>
        {message.date.toDateString()}, {message.date.getHours()}:
        {message.date.getMinutes()}
      </p>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.object,
  }),
};
