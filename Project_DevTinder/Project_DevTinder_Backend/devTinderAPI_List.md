# API's needed for Project DevTinder

### authRouter

- POST / signup
- POST / login
- POST / logout

### profileRouter

- GET / profile / view
- PATCH / profile/ edit
- PATCH / profile/ password // Forgot password API

### Status when sending req. to some another user

💥 **ignore** (Not intrested in user profile)
💥 **intrested** (Sending req. to user)
💥 **accepted** (Status of req. sent)
💥 **rejected** (Status of req. sent)

### connectionReqRouter

- POST / request/send/:status/:userId
- POST / request/review/:status/:reqId


### userRouter

- GET / user/request/received
- GET / user/connections/matches 
- GET / feed/core
