# AWS Lambda Cloud Clinic

A 30-minute Zoom presentation recorded for the [NSF CloudBank Cloud Clinics](https://www.cloudbank.org/video-tutorials) YouTube channel.

**Presenter:** Anthony Arendt, eScience Institute, University of Washington  
**Topic:** Using AWS Lambda as a serverless tool for querying a PostgreSQL database on EC2  
**Motivating use case:** The [NASA SnowEx campaign database](https://nsidc.org/data/snowex)

---

## What This Covers

The talk walks through a pattern for exposing a scientific relational database (PostgreSQL + PostGIS on EC2) through a serverless API using AWS Lambda and container images. Topics covered:

1. The research problem — the NASA SnowEx database and the challenge of secure, open data access
2. What Lambda is (and isn't) — capabilities and constraints
3. Lambda as research infrastructure — event-driven data pipelines, API layers, service glue
4. Architecture overview — how API Gateway, Lambda, Secrets Manager, EC2, and the client library fit together
5. Why container images — getting scientific Python dependencies (NumPy, Pandas, SQLAlchemy, GeoAlchemy2) past Lambda's size limits
6. The Lambda handler — credential retrieval from Secrets Manager, database connection, query dispatch
7. The Dockerfile — building and packaging the function
8. Deploying to ECR — build, tag, push workflow
9. Wiring up a Function URL — enabling public or IAM-authenticated access
10. Live demo — querying SnowEx data from a Jupyter notebook using `SnowExLambdaClient`
11. Limitations — 15-minute timeout, cold start, packaging complexity
12. What this pattern enables — transferable architecture for scientific databases

---

## Repository Structure

```
slides/
  index.html          ← slide deck (open in a browser)
  deck-stage.js       ← slide engine (keyboard nav, scaling, speaker notes)
  colors_and_type.css ← UW brand colors and fonts
  assets/             ← logos and images used in the deck

notebooks/
  live-demo.ipynb     ← Jupyter notebook for the live demo segment
  demo-script.md      ← step-by-step script for recording the demo

speaker-notes.txt     ← full speaker script (one paragraph per slide)
```

---

## Viewing the Slides

Open `slides/index.html` in a browser. Navigate with the left/right arrow keys.

---

## Running the Demo Notebook

See [notebooks/README.md](notebooks/README.md) for setup instructions, including how to install dependencies and configure AWS credentials before recording.

