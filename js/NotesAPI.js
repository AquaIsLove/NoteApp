export default class NotesAPI{

  constructor() {
    this.notes = this.getAllNotes();
  }

  getAllNotes(){
    const notes = JSON.parse(localStorage.getItem('notesapp-notes')) || '[]';
    return notes;
  }

  getLastId(){
    const lastId = parseInt( localStorage.getItem('notesapp-lastId') || 0);
    return lastId
  }

  createNote(){

  }

}
