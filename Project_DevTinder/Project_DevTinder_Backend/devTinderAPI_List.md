# API's needed for Project DevTinder

### authRouter

- POST / signup
- POST / login
- POST / logout

### profileRouter

- GET / profile / view
- PATCH / profile/ edit
- PATCH / profile/ password

### Status when sending req. to some another user

💥 **ignore** (Not intrested in user profile)
💥 **intrested** (Sending req. to user)
💥 **accepted** (Status of req. sent)
💥 **rejected** (Status of req. sent)

### connectionReqRouter

- POST / request/send/intrested/:userId
- POST / request/send/ignore/:userId

- POST / request/review/accepted/:reqId
- POST / request/review/rejected/:reqId

- GET / connections/matches
- GET / request/received
- GET / feed/core
