# Lambda Cloud Clinic — Slide Outline
*Last updated: April 2026*

## Status
- [X] 01 — Title 
- [X] 02 — The Research Problem
- [X] 03 — Description of the SnowEx Database
- [X] 04 - Database Access
- [X] 05 — Overview of AWS Lambda
- [X] 06 - AWS Lambda Applications
- [X] 07 - What Lambda is NOT good for
- [X] 08 — Technical Explanation of Lambda
- [X] 09 - Why we need a container 
- [X] 10 — The Dockerfile
- [X] 11 — The Handler Function
---

## Slide Notes

### 01 — Title
- Logos: UW W mark, eScience Institute, CloudBank, NSF.
- Title: Using AWS Lambda to Access Earth Science Datasets
- Author: Anthony Arendt, Data Science Fellow, eScience Institute
- Layout and styling: purple UW background with UW gold line styling

### 02 — The Research Problem
- Describing the NASA SnowEx mission as an example that motivates the 
  infrastructure we will be showcasing today
- SnowEx was a multi-year field campaign to measure snow properties on the 
  ground, for comparison and validation against airborne measurements
- datasets are well suited to tabluar, highly structured database format  
- layout: show the snowex-overview.png graphic fairly large, at the bottom
half of the slide, with simple, short bullet text above

### 03 - Description of the SnowEx Database
- Two-column layout on white background with purple top band
- Left column: database structure (PostgreSQL + PostGIS, normalized schema, multiple linked tables)
- Right column: content overview (measurements, metadata, coordinates, temporal coverage)
- Highlight boxes explain "Why PostgreSQL?" and "The Challenge" of providing API access

### 04 - Database Access
- this slide will illustrate design flaws with our previous approach, and preview 
what will come next in the presentation as we show a graphic of how AWS lambda 
provides a serverless layer enabling passwordless access to the database
- two-column layout on white background with purple top brand
- Left column: a previous version of the snowex database required local installation of a CLI
client and distribution of AWS creden1
tials; This is not best practice due to security concerns;
show graphic "AWS-configuration-old.svg" below left column
- Right column: we needed an architecture for secure, passwordless access to the database;
show graphic "AWS-configuration-new.svg" below right column

### 05 — Overview of AWS Lambda
- describe AWS Lambda in high level terms, including what motivated its introduction 
as an AWS product. Emphasize that it still involves invoking a server, but in an on-demand fashion
- explain the cost savings that comes from this approach
- use the AWS Lambda logo (Amazon_Lambda_logo.png)

### 06 AWS Lambda Applications
- list three typical use cases of Lambda:
    - Data Processing Pipelines: S3 → Lambda → Output
    - API for Database Queries: API Gateway → Lambda → Database (your SnowEx use case)
    - Service Integration: Event Source → Lambda → Action
- use associated icons in assets folder    

### 07 What Lambda is NOT good for
- 15-minute execution limit, constrained memory/storage — not a replacement for batch compute or HPC
- Cold start latency
- Packaging scientific Python dependencies is non-trivial
- Researchers may initially think "serverless = I can run my analysis without a server" — need to correct this expectation early
- for graphical design: 
    - Use a visual motif like a gauge/meter showing the 15-minute limit
    - Icon for cold start (clock icon)
    - Memory/storage icons with capacity indicators
    - Frame it as "Know the boundaries" rather than just text bullets

### 08 — Technical Explanation of Lambda
- explain the two main ways to deploy Lambda: zip file or container
- step through a simple hello world example deployment of a Python script via
a zip file
- use a simple screen shot for now; eventually I might include a brief live
demo during the tutorial

### 09 - Why we need a container 
- Zip hits size limit immediately with real scientific Python (geoalchemy2, 
pandas, numpy).
- Make a flow graphic showing how to arrive at a Lambda Container image via
 write a Dockerfile, install deps normally, push to ECR, point Lambda at it.
- text explanation: Docker packages your code and all dependencies into a 
container image. ECR (Elastic Container Registry) is where AWS stores those
 images.
- use logos in assets folder for all the named packages in this slide

### 10 — The Dockerfile
- Code slide on dark background with syntax highlighting
- Show real Dockerfile for scientific Python Lambda
- Four key sections annotated: base image, dependencies, function code, handler
- GitHub link to full code: github.com/SnowEx/snowexsql/tree/master/deployment

### 11 — The Handler Function
- Code slide showing the Python handler function (entry point)
- Explain event (incoming data from API Gateway) and context (runtime info)
- Show database connection with SQLAlchemy — standard Python, not Lambda-specific
- Return format: dict with statusCode and body for API Gateway
- Key message: "This is just normal Python — no proprietary Lambda SDK required"

### 12 — Deploying to ECR
- Build & push commands.
- Don't execute live — show commands, explain steps.
- Note: pre-built image already in ECR for demo.

### 13 — Wiring Up API Gateway
- Connecting API Gateway to the Lambda function.
- Key config decisions to highlight.

### 14 — SnowEx Lambda Architecture Overview
- show the AWS-configuration-new.svg figure again, but now include callouts
that help solidify the learning about the configuration based on the past 3 slides

### 15 — Live Demo
- Full-bleed "DEMO" slide — minimal text, signals transition to screen share.
- Pre-built image already in ECR.
- Demo: query the SnowEx database through the Lambda API endpoint.
- Budget for cold start delays.

### 15 — Limitations
- Honest constraints:
  - 15-minute execution limit
  - Constrained memory/storage
  - Cold start latency
  - Packaging scientific Python is non-trivial
  - Not a replacement for batch compute or HPC
- Correct expectation: "serverless ≠ I can run my analysis without a server"

### 17 — What This Pattern Enables
- Transferable use cases across disciplines: genomics, climate science, hydrology, remote sensing.
- "Lambda fills the gap between Jupyter notebook and full cloud deployment."

### 14 — CloudBank-Specific Setup
- IAM roles and permissions under CloudBank accounts.
- Credit usage notes.
- Account-specific gotchas.

### 18 — Resources & Next Steps
- Links: snowexsql, CloudBank docs, AWS Lambda docs, eScience Institute.
- How to get help: CloudBank support, office hours.
- Q&A prompt.
