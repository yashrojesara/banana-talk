import * as React from "react";

function Footer() {
  return (
    <div
      style={{
        padding: "2em",
        background: "#1976d2",
        color: "white",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "50%" }}>
        Are you a fan of minions? Did you know that the gibberish they say is an
        actual language. Use the translator to convert your text from English to
        Minion speak or Banana language.
      </div>
    </div>
  );
}

export default Footer;
