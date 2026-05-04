# Live Demo Notebook

This folder contains the Jupyter notebook for the **live demo** portion of the CloudBank Lambda Cloud Clinic presentation (Slide 15).

## File

- **`live-demo.ipynb`** — Complete demo notebook with code and markdown documentation

## Demo Overview

The notebook demonstrates:
1. Importing the SnowExLambdaClient (no credentials needed)
2. Querying snow depth data from Grand Mesa 2020 campaign
3. Displaying results as a pandas DataFrame
4. Creating a spatial scatter plot of snow depth measurements

**Total execution time:** ~2-3 minutes (including cold start)

---

## Pre-Recording Setup

### 1. Install Dependencies

```bash
pip install snowexsql matplotlib pandas
```

### 2. Configure AWS Credentials

The client requires AWS credentials with IAM permissions to invoke the Lambda function.

**Option A: AWS CLI (recommended)**
```bash
aws configure
```

**Option B: Environment variables**
```bash
export AWS_ACCESS_KEY_ID=your_key
export AWS_SECRET_ACCESS_KEY=your_secret
export AWS_DEFAULT_REGION=us-west-2
```

### 3. Pre-Warm Lambda (Optional)

To avoid cold start during recording, invoke the function 2 minutes before:

```python
from snowexsql.api import SnowExLambdaClient
client = SnowExLambdaClient()
_ = client.get_point_measurements(campaign="Grand Mesa 2020", limit=1)
```

### 4. Jupyter Display Settings

For better screen readability during recording:

- **Increase font size:** View → Presentation Mode (or Ctrl/Cmd + Shift + P)
- **Zoom:** Browser zoom to 125-150%
- **Theme:** Use light theme for better contrast on recordings

---

## During Recording

### Expected Behavior

- **Cell 1-2 (imports, client):** Instant execution
- **Cell 3 (query):** 3-5 seconds first time (cold start), <2 seconds if pre-warmed
- **Cell 4 (inspect):** Instant
- **Cell 5 (plot):** 1-2 seconds

### Narration Tips

1. **Emphasize simplicity:** "No config files, just two lines"
2. **Acknowledge cold start:** "This delay is expected — Lambda is warming up the container"
3. **Show the data:** Scroll through the DataFrame to show it's real
4. **Explain the plot:** "Darker blue = deeper snow, spatial distribution across the site"

### Backup Plan

If Lambda fails or times out:
1. Say: "Let's try that again — network hiccup"
2. Re-run the cell
3. If still failing: "I have a screenshot of the expected output here..." (show pre-rendered image)

---

## After Recording

The notebook can be:
- Shared with workshop participants as a template
- Published to GitHub alongside the slide deck
- Referenced in the "Resources & Next Steps" slide

---

## Testing Checklist

Before recording, verify:

- [ ] `snowexsql` package is installed
- [ ] AWS credentials are configured
- [ ] Query returns data in <5 seconds
- [ ] Plot renders correctly
- [ ] Jupyter font size is readable at 720p/1080p
- [ ] Lambda is pre-warmed (optional but recommended)

---

## Query Details

**Campaign:** Grand Mesa 2020  
**Instrument:** Magnaprobe (handheld GPS snow depth probe)  
**Date:** February 2020  
**Location:** Grand Mesa, Colorado (39.03°N, 108.21°W)  
**Sample size:** 500 measurements (limited for demo speed)  

**Typical output:**
- ~500 rows
- Columns: date, depth (cm), latitude, longitude, instrument, site_name
- Depth range: 50-150 cm (typical for Grand Mesa)

---

## Links

- **SnowEx SQL GitHub:** https://github.com/SnowEx/snowexsql
- **Project Pythia Tutorial:** https://projectpythia.org/snow-observations-cookbook/notebooks/snowexsql-database/
- **AWS Lambda Docs:** https://docs.aws.amazon.com/lambda/
