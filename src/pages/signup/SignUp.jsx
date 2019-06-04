import React from "react";
import styles from "./SignUp.module.css";

const SignUp = props => {
  return (
    <div className={styles.container}>
      <form>
        <h2>Registrer Deg!</h2>
        <div className={styles.inputField}>
          <label htmlFor="name">Navn</label>
          <input type="text" id="name" />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="email">Epost</label>
          <input type="email" id="email" />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="pass1">Passord</label>
          <input type="password" id="pass1" />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="pass2">Gjenta passord</label>
          <input type="password" id="pass2" />
        </div>
        <div className={styles.inputField}>
          <input type="submit" value="Registrer" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
