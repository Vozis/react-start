import React, { useState } from "react";

export function Message({ message }) {
  return (
    <li>
      <p>Author: {message.author}</p>
      <p>Content: {message.text}</p>
    </li>
  );
}
