import { Button, TextareaAutosize } from "@mui/material";
import { useState } from "react";

function BananaComponent() {
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");

  const convert = async () => {
    const apiResponse = await fetch(
      `https://api.funtranslations.com/translate/minion.json?text=${text}`
    );

    const data = await apiResponse.json();
    if (apiResponse.status === 429) {
      alert("Too Many Requests!!! Please try again later.");
    } else {
      const translation = data.contents.translated;
      setTranslation(translation);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1em",
      }}
    >
      <TextareaAutosize
        minRows={10}
        maxRows={10}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type anything here that you want to translate"
        style={{ minWidth: "50%" }}
      />
      <Button
        style={{ margin: "1em" }}
        variant="outlined"
        color="secondary"
        disabled={!text}
        onClick={convert}
      >
        Translate To Banana
      </Button>
      <TextareaAutosize
        minRows={10}
        maxRows={10}
        value={translation}
        onChange={(e) => setText(e.target.value)}
        style={{ minWidth: "50%" }}
        disabled
      />
    </div>
  );
}

export default BananaComponent;
