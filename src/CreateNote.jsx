import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateNote({ onAdd }) {
  // Keep track of the note title, & content
  const initialNote = {
    title: "",
    content: "",
  };
  const [note, setNote] = useState(initialNote);

  // Keep track of the state of the input
  const [focus, setFocus] = useState(false);

  // Create an onchange handler
  const handleChange = (e) => {
    let { value, name } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  // Create an onSubmit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(note);
    setNote(initialNote);
  };

  return (
    <div>
      <form
        className="create-note"
        onSubmit={handleSubmit}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setFocus(false);
          }
        }}
      >
        {focus && (
          <input
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          onFocus={() => setFocus(true)}
          placeholder="Take a note..."
          rows={focus ? 3 : 1}
        />
        <Zoom in={focus}>
          <Fab
            type="submit"
            sx={{
              "&:hover": {
                backgroundColor: "darkgreen",
              },
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;