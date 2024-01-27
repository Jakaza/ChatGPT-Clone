# ChatWiz

ChatWiz is a web application built using React that leverages the OpenAI API to create a chatbot interface. Inspired by ChatGPT, this project allows users to interact with a chatbot powered by OpenAI's advanced language model.

## Features

- **Interactive Chat Interface**: Users can have natural language conversations with the chatbot.
- **Powered by OpenAI**: Utilizes the OpenAI API to generate responses based on user input.

## Getting Started

Follow the steps below to set up and run the ChatWiz on your local machine.

### Prerequisites

- Node.js and npm: Make sure you have Node.js and npm installed. You can download them from [https://nodejs.org/](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jakaza/chatwiz.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ChatWiz
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Get your OpenAI API key: Visit [https://beta.openai.com/signup/](https://beta.openai.com/signup/) to sign up for access to the OpenAI API and obtain your API key.

2. Create a `.env` file in the project root and add your OpenAI API key:

   ```env
   REACT_APP_OPENAI_API_KEY=your-api-key-goes-here
   ```

### Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and visit [http://localhost:3000](http://localhost:3000) to interact with the ChatWiz.

## Deployment

To deploy the ChatWiz, you can follow the deployment instructions for your hosting platform. Make sure to set environment variables for your production environment.


## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to OpenAI for providing the powerful language model used in this project.
- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/).
