# AWS Lambda for Scientific Researchers — Tutorial Planning Summary

## Context
- **Presenter:** UW eScience Institute staff
- **Format:** 30-minute Cloud Clinic tutorial (similar to the SkyPilot Cloud Clinic from 2/17/2026)
- **Audience:** Scientific researchers using CloudBank infrastructure
- **Funding context:** CloudBank grant deliverable

## Topic: AWS Lambda for Research Infrastructure

### Why This Topic Works for This Audience
- CloudBank researchers are not DevOps people — they want to run code in the cloud without managing servers
- Lambda fits a sweet spot for **event-driven, glue-logic work** in research contexts. Some general examples include:
  - New file lands in S3 → triggers processing
  - API endpoint serves model results or dataset queries
  - Lightweight interface in front of a database so collaborators can pull data without credentials or SQL expertise
- The pattern (Lambda + API Gateway + database) generalizes across disciplines: genomics, climate science, hydrology, remote sensing

### Anchor Use Case: SnowEx/snowexsql
- Real NASA campaign database with a Lambda-based API interface
- Demonstrates the generalizable pattern: "I have a dataset and collaborators need programmatic access"
- Authentic, scientific, and immediately relatable to the audience

### Important Framing
- **Position as "Lambda for research infrastructure"** — not "Lambda for scientific computing"
- Lambda is the **connective tissue** between cloud resources, not the compute engine itself
- Value is in building lightweight services *around* your science: APIs for data access, automated pipelines triggered by uploads, notifications when jobs finish, scheduled data pulls
- These are tasks that otherwise fall to "the one person in the lab who knows how to keep a server running"
- Lambda fills the gap between "use a Jupyter notebook" and "set up a full cloud deployment"

### Limitations to Be Honest About
- 15-minute execution limit, constrained memory/storage — not a replacement for batch compute or HPC
- Cold start latency
- Packaging scientific Python dependencies is non-trivial
- Researchers may initially think "serverless = I can run my analysis without a server" — need to correct this expectation early

## Gap Analysis: Existing YouTube/Tutorial Landscape

### What Already Exists (and doesn't serve this audience)
1. **Generic beginner tutorials** (hundreds): Hello-world functions, S3 image resize, DynamoDB CRUD — aimed at developers doing AWS certification prep. Irrelevant examples for researchers.
2. **Enterprise/DevOps deep dives**: Durable Functions, Step Functions, SAM/CDK pipelines — too much infrastructure complexity for scientists.

### What's Missing (the gap this presentation aims to fill)
- **Zero YouTube tutorials** showing Lambda as research infrastructure with a real scientific dataset
- Nobody is demonstrating: "here's a real research database, here's a Lambda function that lets anyone query it over HTTP, here's how I packaged scientific Python dependencies"
- The closest academic work (PyWren from Berkeley RISE Lab) is about burst compute, not data services, and is old
- No existing content addresses the CloudBank-specific context (AWS credits, IAM setup under CloudBank accounts)

## Key Technical Decision: Container Images over Zip Deployment

### Why Teach the Container Image Path
- Any researcher using real scientific Python packages (sqlalchemy, geoalchemy2, pandas, numpy) will hit the zip size limit immediately
- The zip approach is where most generic tutorials fail scientists — works for hello-world, breaks with real dependencies
- Container image workflow is actually more intuitive for researchers who know Docker:
  - Write a Dockerfile
  - Install dependencies with pip normally
  - Push to ECR
  - Point Lambda at it
- **Frame it as "the modern way to deploy Lambda with scientific Python dependencies, full stop"** — not as a workaround for a limitation

### Live Demo Strategy
- Don't build/push the Docker image live — it eats too much time
- Have a **pre-built image already in ECR**
- Show and explain the Dockerfile
- Show the build/push commands without executing, or use a pre-recorded clip
- Budget demo time around cold start delays

## Suggested Tutorial Structure (30 minutes)

### Core narrative arc
1. **The problem:** You have a research dataset/database. Collaborators need access. You don't want to run a server.
2. **The solution:** Lambda + API Gateway as a lightweight, zero-maintenance data service
3. **The practical how:** Container image deployment with scientific Python dependencies
4. **Live demo:** Query the SnowEx database through the Lambda API endpoint
5. **What this pattern enables:** Transferable to any "I have data, others need access" scenario

### Things to cover
- What Lambda is (briefly — don't repeat the generic tutorials)
- Why container images, not zip (one sentence on zip for tiny functions, then move on)
- The Dockerfile for a scientific Python Lambda
- Wiring up API Gateway
- CloudBank-specific notes: credits, IAM, account setup
- Honest limitations: what Lambda is NOT for (long compute, HPC)

### What to skip
- Deep dive on Lambda layers, SAM, CDK, Step Functions
- Zip deployment workflow
- Pricing optimization, concurrency tuning
- Anything that looks like enterprise DevOps