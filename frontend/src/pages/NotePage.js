import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NotePage = () => {
  const { id } = useParams();
  const [note, setNote] = useState("");

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await fetch(`/api/note/${id}/`);
        const data = await response.json();
        setNote(data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchNote();
  }, [id]);

  return (
    <div>
      <h1>{note?.body}</h1>
    </div>
  );
};

export default NotePage;
