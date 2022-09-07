import styles from "./message.module.css";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../../store/messages";
import { removeMessage } from "../../../store/messages/messagesSliceReducer";

export function Message({ message, chatId }) {
  const dispatch = useDispatch();

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
      <button onClick={() => dispatch(deleteMessage(chatId, message.id))}>
        X
      </button>
      {/*<button
        onClick={() =>
          dispatch(removeMessage({ chatId, messageId: message.id }))
        }
      >
        X
      </button>*/}
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
