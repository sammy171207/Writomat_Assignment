

# Social Media Analytics Dashboard

This project is a social media analytics dashboard developed using React for the frontend and Java (Spring Boot) for the backend. The dashboard aims to display social media posts from various platforms and provide basic analytics.

## Features

- **Social Media Integration**: Fetch and display posts from different social media platforms.
- **Basic Analytics**: Provide insights such as number of followers, following, posts, and engagement metrics.
- **User Details**: Display user profile information including name, category, bio, contact options, and action buttons.
- **Account Insights**: Track account reach, engagement rates, content statistics, and advertising insights.
- **Dummy Data**: Utilize in-memory database with dummy data for backend operations.

## Analytics Displayed

- Number of followers
- Number of following
- Number of posts
- User details:
  - Name
  - Category
  - Bio
  - Contact options
  - Links and action buttons
- Account reach
- Engaged follower comparison
- Content shared
- Advertising insights:
  - Ads run
  - Active promotions
- Total stories
- Total follows
- Total posts
- Total saves
- Total comments
- Total shares

## Technologies Used

- **Frontend**: React, Redux (for state management), Axios (for HTTP requests), Tailwind CSS (for styling)
- **Backend**: Java, Spring Boot, Spring Data (for database operations), H2 Database (in-memory database)

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sammy171207/Writomat_Assignment.git
   cd social-media-analytics-dashboard
   ```

2. **Setup Backend**:
   - Navigate to the `backend` directory.
   - Build and run the Spring Boot application using Maven or your preferred IDE.

3. **Setup Frontend**:
   - Navigate to the `frontend` directory.
   - Install dependencies using npm or yarn:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm start
     ```

4. **Access the Dashboard**:
   - Open your browser and go to `http://localhost:5143` to view the dashboard.

