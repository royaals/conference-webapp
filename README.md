# Converse

Converse is a video conferencing tool designed to provide users with secure, real-time meeting functionalities, including scheduling, recording, screen sharing, and participant management.

## Features

- **Authentication**: Implements authentication and authorization features using Clerk, allowing users to securely log in via social sign-on or traditional email and password methods, while ensuring appropriate access levels and permissions within the platform.
- **Personal Room**: Users have a personal room with a unique meeting link for instant meetings, shareable with others.
- **Schedule Future Meetings**: Input meeting details (date, time) to schedule future meetings, accessible on the 'Upcoming Meetings' page for sharing the link or immediate start.
- **Past Meetings List**: Access a list of previously held meetings, including details and metadata.
- **View Recorded Meetings**: Access recordings of past meetings for review or reference.
- **Secure Real-time Functionality**: All interactions within the platform are secure and occur in real-time, maintaining user privacy and data integrity.

  
## Technologies Used

- Next.js
- TypeScript
- Clerk
- Stream
- shadcn
- Tailwind CSS

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/royaals/conference-webapp.git
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```
3. copy the `.env.example` file to `.env.local`:   
   ```bash
   cp .env.example .env.local
   ```
4. Insert your credentials into the environment variables in the `.env.local` file.

5. Start the development server:
   ```bash
   npm run dev
   ```