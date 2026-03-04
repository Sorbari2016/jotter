import DeleteIcon from "@mui/icons-material/Delete";

function Note({ id, title, content, onDelete }) {
  return (
    <article className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        className="delete-btn"
        onClick={() => {
          onDelete(id);
        }}
      >
        <DeleteIcon />
      </button>
    </article>
  );
}
export default Note; 