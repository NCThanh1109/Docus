import React, { useState } from "react";
import ModalSearch from "./ModalSearch";
import styles from "./styles.module.css";

export default function SearchBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Open search"
        className={styles.navButton}
        onClick={() => setOpen(true)}
      >
        🔍
      </button>

      {open && <ModalSearch onClose={() => setOpen(false)} />}
    </>
  );
}
