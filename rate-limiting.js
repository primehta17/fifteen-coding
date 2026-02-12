// Rate limiting is a mechanism to control incoming traffic to protect APIs from abuse and overload. It can be implemented using algorithms like token bucket or sliding window. In distributed systems, Redis-backed rate limiting is preferred for consistency across instances.

const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
  message: "Too many requests, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api", limiter);

app.get("/api/test", (req, res) => {
  res.send("API is working");
});

app.listen(3000);

// https://www.youtube.com/watch?v=eR66m7TaV5A
// The video explains the importance and implementation of API Rate Limiting using two popular system design strategies: Token Bucket and Leaky Bucket. Rate limiting prevents users from exploiting server resources, protects against spam, and ensures a smooth experience for all users by controlling the request rate (0:47-2:08).

// Rate Limiting Strategies
// Token Bucket Strategy (4:12 - 11:03):

// How it works: A bucket holds a fixed number of tokens. Each incoming request must acquire a token to be processed. If no tokens are available, the request is either rejected (429 error) or delayed (5:23-6:33).
// Refilling: Tokens are added back at a fixed interval or after a request-response cycle (7:41-7:56).
// Pros: Good control over request rates and handles short bursts of traffic effectively (8:58-9:11).
// Cons: Greedy clients can consume all tokens, causing others to wait (9:20-10:07).
// Leaky Bucket Strategy (11:04 - 13:33):

// How it works: Requests enter a bucket like water from a tap. Regardless of how fast they arrive, the bucket "leaks" requests at a constant, controlled rate to the server (11:24-12:31).
// Overflow: If the bucket is full, new requests are rejected or must wait (12:41-12:49).
// Use Case: Ideal for ensuring a steady processing flow, like video transcoding where only a few videos are processed at once (14:16-15:04).
// Real-World Examples
// Leaky Bucket: YouTube or video transcoding platforms (like Piyush's own project) that process high volumes of uploads at a controlled pace (14:11-15:37).
// Token Bucket: Customer Care centers with a limited number of operators. Each call (request) takes an operator (token); if all are busy, callers must wait until a token is returned to the bucket (15:44-17:05).
