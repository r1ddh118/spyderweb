/backend
│── /routes                     # API routes (endpoints)
│    ├── quiz.py                # Handles quiz submissions & analysis
│    ├── study_plan.py          # Generates personalized study plans
│    ├── leaderboard.py         # Leaderboard updates with Supabase Realtime
│    ├── sustainability.py      # Tracks Dark Mode & low-bandwidth usage
│── /services                   # Business logic & core processing
│    ├── ai_service.py          # AI-driven quiz evaluation (LangChain)
│    ├── leaderboard_service.py # Manages leaderboard updates
│    ├── study_plan_service.py  # Generates study plans based on performance
│── /models                     # Supabase database schema
│    ├── user.py                # User model
│    ├── quiz.py                # Quiz model
│    ├── leaderboard.py         # Leaderboard schema
│── /database                   # Database connection
│    ├── supabase_client.py     # Supabase Python SDK integration
│── /ai                         # AI & LangChain components
│    ├── study_recommender.py   # Uses LangChain for study material recommendations
│    ├── quiz_analyzer.py       # AI model for quiz evaluation
│── /config                     # Environment variables & settings
│    ├── settings.py            # Global configurations
│── /tests                      # Unit tests
│    ├── test_quiz.py           # Tests for quiz API
│    ├── test_leaderboard.py    # Tests for leaderboard updates
│── main.py                     # FastAPI entry point
│── requirements.txt            # Python dependencies
│── supabase.env                # Supabase API keys & credentials
│── Dockerfile                  # Containerization setup (for local testing)
│── vercel.json                 # Vercel deployment configuration
│── README.md                   # Project documentation
