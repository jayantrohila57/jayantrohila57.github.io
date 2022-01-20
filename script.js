const notesContainer = document.getElementById("S_app");
const addNoteButton = notesContainer.querySelector(".add-note");
getNotes().forEach((note) => {
  const noteElement = createNoteElement(note.id, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});
addNoteButton.addEventListener("click", () => addNote());
function getNotes() {
  return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}
function saveNotes(notes) {
  localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}
function createNoteElement(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.value = content;
  element.placeholder = "Empty Sticky Note";
  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });
  element.addEventListener("dblclick", () => {
    const doDelete = confirm(
      "Are you sure you wish to delete this sticky note?"
    );
    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}

function addNote() {
  const notes = getNotes();
  const noteObject = {
    id: Math.floor(Math.random() * 100000),
    content: ""
  };

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push(noteObject);
  saveNotes(notes);
}

function updateNote(id, newContent) {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
}

function deleteNote(id, element) {
  const notes = getNotes().filter((note) => note.id != id);

  saveNotes(notes);
  notesContainer.removeChild(element);
}



function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();