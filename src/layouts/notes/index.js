//Hooks
import React, { useState, useEffect } from "react";

// @mui material components
// @mui icons
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
// Images
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import Footer from "examples/Footer";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// NotesOverview page components
import Header from "layouts/notes/components/Header";
import NoteCard from "./components/NoteCard";
import { BsPlus } from "react-icons/bs";
import VuiButton from "components/VuiButton";
import AddNoteCard from "./components/AddNoteCard";

//Firebase auth
import { getAuth, onAuthStateChanged } from "firebase/auth";

function NotesOverview() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState(null);
  const [showNewNoteCard, setShowNewNoteCard] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        window.location.href = "/authentication/sign-in";
        // ...
      }
    });
  }, []);

  function handleAddNote(note) {
    let newNote = { id: notes.length + 1, title: note.title, description: note.description };
    let newNotes = [...notes, newNote];
    setNotes(newNotes);
    setShowNewNoteCard(false);
  }

  function handleDeleteNote(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  function handleEditNote(id, newNote) {
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, title: newNote.title, description: newNote.description };
      }
      return note;
    });
    setNotes(newNotes);
    setShowNewNoteCard(false);
    setNote(null);
  }

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("popup")) {
      setShowNewNoteCard(false);
    } else {
      setShowNewNoteCard(true);
    }
    setShowNewNoteCard(false);
  };

  function handleShowAddNewNoteCard() {
    setNote(null);
    setShowNewNoteCard(!showNewNoteCard);
  }

  return (
    <DashboardLayout className="popup" onClick={handleClickOutside}>
      <Header />
      <VuiBox mt={5} mb={3}>
        <Grid
          container
          spacing={3}
          sx={({ breakpoints }) => ({
            [breakpoints.only("xl")]: {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
          })}
        ></Grid>
      </VuiBox>
      <Grid container spacing={3} mb="30px">
        <Grid item xs={12} xl={12}>
          <Card>
            <VuiBox display="flex" flexDirection="column" height="100%">
              <VuiBox display="flex" flexDirection="column" mb="24px">
                <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                  My Notes
                </VuiTypography>
                <VuiButton variant="outlined" color="light" onClick={handleShowAddNewNoteCard}>
                  <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                    Add Note
                  </VuiTypography>
                  <BsPlus></BsPlus>
                </VuiButton>
              </VuiBox>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12} xl={12}>
                  {notes.map((note, index) => {
                    return (
                      <NoteCard
                        key={index}
                        note={note}
                        deleteNote={handleDeleteNote}
                        editNote={() => {
                          setNote(note);
                          setShowNewNoteCard(true);
                        }}
                      ></NoteCard>
                    );
                  })}
                </Grid>
              </Grid>
            </VuiBox>
          </Card>
        </Grid>
      </Grid>

      {showNewNoteCard ? (
        <AddNoteCard
          onCancel={handleShowAddNewNoteCard}
          onSave={handleAddNote}
          note={note}
          onEdit={handleEditNote}
        ></AddNoteCard>
      ) : null}

      <Footer />
    </DashboardLayout>
  );
}

export default NotesOverview;
