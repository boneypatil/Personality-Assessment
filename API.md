# Tracking User Progress

### Trigger points
* When learn mode starts.
* When challenge is completed (with score).
* When learn mode ends.
* When question is answered. (with choosed answer.)
* When practice is completed. (with score & level).
* When quick review chapter is completed.
* When game is played (with score).
* When video is played.

### Resume points
* When opening a learn mode (resume with challanges finished in-mind).
* When opening a practice resume from the appropriate level & try not repeating questions.
* When opening a quick review (resume with chapters finished in-mind).
* When recommending learn mode (Don't show topics completed).
* When recommending practice mode (Don't show pratices successfully completed).
* When recommending games (Don't show prevoisly played games).

# User Progress Endpoints

### USER PROGRESS (Delegate to User Progress)
 **Resume point**
* ```GET /me/topics/:id/progress?filter=learn,challenge,practice,review,game```

**Trigger points**
* ```POST /me/topics/:id/progress/learn```
* ```POST /me/topics/:id/progress/challenge```
* ```POST /me/topics/:id/progress/question```
* ```POST /me/topics/:id/progress/practice```
* ```POST /me/topics/:id/progress/review```
* ```POST /me/topics/:id/progress/game```
* ```POST /me/topics/:id/progress/video```

### FEEDBACK
* ```POST /me/topics/:id/feedback { ... }```


# Models #
\
**LearnProgress** 
```json
{
    "status" : "started | completed"
}
```
**ChallengeProgress** 
```json
{
    "id" : "challenge_id (md5 of the challenge/url)",
    "status" : "success | fail",
    "score" : 0
}
```
**PracticeProgress**
```json
{
    "level" : "easy | medium | hard",
    "status" : "success | fail",
    "score" : 0
}
```

**ReviewProgress**
```json
{
    "id" : "chapter_id",
    "status" : "started | completed"
}
```
**GameProgress**
```json
{
    "id" : "game_id",
    "status" : "started | success | fail",
    "score" : 0
}
```

**VideoProgress**
```json
{
    "id" : "video_id",
    "status" : "started | completed"
}
```

**Feedback**
```json
{
    "feedback" : "good | bad | none"
}
```