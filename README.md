# Conference Ticket Generator

The Conference Ticket Generator is a React-based application built with Vite that allows users to register for a conference ticket. Users can fill in their details, upload a profile image, and generate a ticket complete with a barcode. The ticket details are saved to local storage and displayed on a confirmation (About) page.

## Features

- **User Registration:**  
  Collect attendee details including full name, email, and special requests.

- **Image Upload:**  
  Users can click an upload area to select a profile image. The selected image is previewed in the form and saved as part of the registration data.

- **Barcode Generation:**  
  A barcode is generated (using a library like `jsbarcode`) for each registered user and can be displayed on the confirmation page.

- **Form Validation:**  
  Uses `react-hook-form` to validate inputs in real time and provide immediate feedback.

- **Routing:**  
  Uses `react-router-dom` for navigating between pages (e.g., registration and confirmation).

- **State Persistence:**  
  Form data is saved to `localStorage`, ensuring that user input persists across page refreshes.

- **Responsive & Accessible:**  
  Designed to work across different devices and to be accessible to all users.

## Technologies Used

- **React**  
- **Vite**  
- **React Router DOM**  
- **React Hook Form**  
- **JsBarcode** (or a similar barcode generation library)  
- **React Icons**  
- **CSS**

## Project Structure

```
ticket-generator/
├── public/
│   └── index.html
├── src/
│   ├── assets/            // Images, icons, etc.
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── ProgressSlider.jsx
│   │   └── TicketGenerator.jsx
│   ├── pages/
│   │   └── About.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── history.js         // (Optional) Custom history for programmatic navigation
├── package.json
└── README.md
```

## Installation

1. **Clone the Repository**

   ```bash
https://github.com/DevGracies/Conference-Ticket-Generator.git
   cd ticket-generator
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   ```bash
   npm run dev
   ```

   Your app will be available at `http://localhost:3000` (or the port specified by Vite).

## Usage

1. **Registration:**

   - Open the application and fill in your name, email, and any special requests.
   - Click the image upload area to select and preview a profile image.
   - Click the **"Get My Free Ticket"** button to submit your registration.

2. **Ticket Confirmation:**

   - After form submission, you will be navigated to the About page.
   - The About page displays your registration details, including your profile image and a generated barcode.

## Barcode Generation

If you wish to generate and display a barcode, consider using the [`jsbarcode`](https://www.npmjs.com/package/jsbarcode) library. You can initialize the barcode in the About page by reading the stored registration data from localStorage and applying the barcode settings.

## Troubleshooting

- **Form Input Not Working:**  
  Ensure that you're not resetting the form state on every render. The reset should only run once on component mount.

- **Navigation Issues:**  
  Verify that your routes are correctly wrapped in a `BrowserRouter` and that your navigation actions (using `useNavigate`) are placed within the form submission handler.

- **Image Not Displaying:**  
  Check that the file upload handler correctly reads the file as a Base64 string and that the "image" field is registered in the form data.

- **Console Errors:**  
  Always check your browser console for any error messages that might indicate missing dependencies or incorrect import paths.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- **React Hook Form:** Thanks for making form handling in React a breeze!
- **React Router DOM:** For robust and flexible routing.
- **Vite:** For a fast and modern development environment.
- **Frontend Wizards:** Inspiration from the Stage 2 challenge.