import { useSelector } from "react-redux";
const NoteItem = ({ note }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div
      className="note"
      style={{
        backgroundColor: note.isStuff ? "rgba(0,0,0,0.7)" : "#fff",
        Color: note.isStuff ? "#fff" : "#000",
      }}
    >
      <h4>
        Note from {note.isStuff ? <span>Staff</span> : <span>{user.name}</span>}
      </h4>
      <p>{note.text}</p>
      <div className="note-date">
         {new Date(note.createdAt).toLocaleString('uz-UZ')}
      </div>
    </div>
  );
};

export default NoteItem;
