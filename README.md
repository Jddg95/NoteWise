# Note Taker

This is a simple note-taking application built with Express.js, HTML, and Bootstrap. It allows users to create, save, and delete notes.

## Features

- **Create Note:** Users can create a new note by providing a title and text.
- **Save Note:** Users can save their notes, and they will be stored persistently.
- **Delete Note:** Users can delete a note once they no longer need it.

## Installation

1. Clone this repository to your local machine by running the following command in your terminal:

    ```bash
    git clone https://github.com/Jddg95/NoteWise.git
    ```

2. Install dependencies by running `npm install`.
3. Start the server by running `npm start`.
4. Open your web browser and navigate to `http://localhost:3000` to use the application.

## Usage

1. When you open the application, you'll see the home page with an option to get started.
2. Click on the "Get Started" button to go to the notes page.
3. On the notes page, you can see a list of existing notes (if any) on the left side.
4. You can click on a note to view its details on the right side.
5. To create a new note, click on the "New Note" button. This will clear the existing note (if any) and allow you to enter a new note title and text.
6. Once you've entered your note, click on the "Save Note" button to save it.
7. To delete a note, click on the trash icon next to the note you want to delete.

## Dependencies

- [Express.js](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [Bootstrap](https://getbootstrap.com/): Front-end framework for building responsive and mobile-first websites.
- [uuid](https://www.npmjs.com/package/uuid): For generating unique IDs for notes.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or have suggestions for improvement.

## License

This project is licensed under the [MIT License](LICENSE).
