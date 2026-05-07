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
- [X] 10 — The Handler Function
- [X] 11 — The Dockerfile
- [X] 12 — Deploying to ECR
- [X] 13 — Making Lambda Accessible
- [X] 14 — The Lambda Client
- [X] 15 — SnowEx Lambda Architecture Overview
- [X] 16 — Live Demo
- [X] 17 — When Lambda Isn't Enough
- [X] 18 — What This Pattern Enables
- [X] 19 — CloudBank-Specific Setup
- [X] 20 — Resources & Next Steps
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

### 10 — The Handler Function
- Code slide showing the Python handler function (entry point)
- KEY POINT: Uses AWS Secrets Manager for secure credential handling — no hardcoded passwords
- Fetches credentials at runtime, writes temporary file to /tmp/
- Uses snowexsql package's db.get_db() — same code works locally and in Lambda
- Action-based handling pattern for different query types
- Shows simplified version of actual lambda_handler.py from GitHub

### 11 — The Dockerfile
- Code slide with light theme (white background, light gray code panels)
- Shows actual Dockerfile from GitHub: public.ecr.aws/lambda/python:3.12 base
- COPY snowexsql/ package and requirements-lambda.txt
- Handler: snowexsql.lambda_handler.lambda_handler
- Requirements panel shows actual dependencies with version constraints
- Arrow connects requirements file reference to actual contents
- GitHub link: github.com/SnowEx/snowexsql

### 12 — Deploying to ECR
- Build & push commands.
- Don't execute live — show commands, explain steps.
- Note: pre-built image already in ECR for demo.

### 13 — Making Lambda Accessible
- Configuration panel showing Function URL setup in Lambda Console
- Three access control options: Public, AWS IAM (highlighted), API Key
- Function URL displayed beneath AWS IAM card only
- "Why AWS IAM?" section with bullet points:
  - No credential distribution
  - Audit trail via CloudTrail
  - Granular IAM permissions
  - Automatic credential rotation
  - Defense in depth security

### 14 — The Lambda Client
- Two-column layout: dark code panel (left) + three callout cards (right)
- Code panel shows: install, instantiate, helper method call, raw SQL
- Callout 1 (green): No AWS credentials — plain HTTPS, works from any notebook
- Callout 2 (gold): Minimal dependencies — client needs only requests + pandas
- Callout 3 (purple): Drop-in replacement — mirrors api.py interface exactly
- Bottom banner: "The researcher never sees Lambda — they just call Python methods that happen to route through AWS"
- Source: github.com/SnowEx/snowexsql/blob/master/snowexsql/lambda_client.py

### 15 — SnowEx Lambda Architecture Overview
- Central architecture diagram (AWS-configuration-new.svg)
- Four numbered callouts explaining each component:
  1. Container Image: Built with Dockerfile, stored in ECR
  2. Lambda Handler: Retrieves credentials from Secrets Manager, executes queries
  3. Function URL: HTTPS endpoint with AWS IAM authentication
  4. PostgreSQL Database: Running on EC2, credentials in Secrets Manager
- Key benefit banner: Secure, serverless API without infrastructure management

### 16 — Live Demo
- Dark purple transition slide with gold accent bar
- Large centered "DEMO" text (120px, white)
- Subtitle: "Querying the SnowEx Database" (42px, gold)
- Context text explaining what viewers will see
- Bottom note: "→ Switching to Jupyter Notebook" (28px, cream)
- Demo plan:
  - Import SnowExLambdaClient (no credentials needed!)
  - Query Grand Mesa 2020 magnaprobe data (limit=500)
  - Display pandas DataFrame
  - Create scatter plot colored by snow depth
  - Narrate cold start if it occurs
  - Total time: ~2-3 minutes

### 17 — When to Use Raw SQL
- Two-column layout: Problem vs Solution
- Left side (Complex Query Need):
  - Example: "Find average magnaprobe depth within 10m of each snow pit"
  - List what API doesn't support:
    - Spatial joins (ST_DWithin)
    - Multi-table queries
    - GROUP BY aggregations
  - Note: Helper methods can't do complex spatial + temporal joins
- Right side (Use Raw SQL):
  - Code example: `client.query()` with PostGIS spatial join
  - Shows ST_DWithin spatial function
  - JOIN across snow_pits and point_measurements tables
  - GROUP BY with AVG aggregation
  - SQL syntax highlighted (keywords in blue, functions in purple, strings in red)
  - Benefits: Full PostGIS functions, JOIN across tables, aggregate with GROUP BY
- Key message banner:
  - "Use client.query() for complex queries — when helper methods don't support spatial joins, aggregations, or multi-table operations"

### 18 — What This Pattern Enables
- Transferable use cases across disciplines: genomics, climate science, hydrology, remote sensing.
- "Lambda fills the gap between Jupyter notebook and full cloud deployment."

### 19 — CloudBank-Specific Setup
- IAM roles and permissions under CloudBank accounts.
- Credit usage notes.
- Account-specific gotchas.

### 20 — Resources & Next Steps
- Links: snowexsql, CloudBank docs, AWS Lambda docs, eScience Institute.
- How to get help: CloudBank support, office hours.
- Q&A prompt.
