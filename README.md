# Book of Answer

This is a simple React application that simulates the functionality of a "Book of Answer". Users can click on the book cover to get a random answer.

## Features

*   **Random Answers**: Each click on the book cover displays a random answer.
*   **Multi-language Support**: Supports answers in Chinese, Japanese, and English.

## Tech Stack

*   React
*   Vite
*   Radix UI (for language picker component)
*   Tailwind CSS

## Installation and Running

1.  Clone the repository to your local machine.
2.  Navigate to the project directory.
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Run the development server:
    ```bash
    npm run dev
    ```
5.  Open the displayed address in your browser.

## Data Source

The application's answer data is stored in the [`src/answers.json`](src/answers.json) file.

## File Structure

*   `src/App.jsx`: Main application component, handles state and logic.
*   `src/components/Book.jsx`: Book component, responsible for displaying answers or the cover.
*   `src/components/langPick.jsx`: Language picker component.
*   `src/answers.json`: Stores multi-language answer data.
*   `public/`: Static assets directory.
*   `public/cover/`: Cover images directory.

## License

MIT License
