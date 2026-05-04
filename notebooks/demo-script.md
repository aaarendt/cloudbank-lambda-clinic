# Live Demo Script — Quick Reference

**Duration:** 2-3 minutes  
**Slide transition:** From Slide 15 → Jupyter Notebook → Back to slides

---

## Opening (10 seconds)

> "Alright, let's see this in action. I'm switching over to a Jupyter notebook now."

**[Switch to Jupyter, show notebook title]**

---

## Cell 1: Imports (15 seconds)

**[Execute cell]**

> "The first thing I want to show you is how simple the client setup is. We're importing the SnowEx Lambda client and matplotlib for plotting. Notice what's NOT here — no config files, no credential management."

---

## Cell 2: Connect to Database (15 seconds)

**[Execute cell]**

> "Just instantiate the client. One line. Behind the scenes, this is hitting our Lambda function URL with AWS IAM authentication, but from the researcher's perspective, it just works."

---

## Cell 3: Query Data (30-45 seconds)

**[Execute cell, wait]**

> "Now I'll query snow depth measurements from the Grand Mesa campaign in February 2020. Grand Mesa is one of our core sites in Colorado. I'm asking for magnaprobe data — that's a handheld GPS-enabled probe that field teams use to measure snow depth. I'm limiting it to 500 points so this runs quickly."

**[If delay occurs]**

> "We might see a few seconds of delay here — that's the Lambda cold start I mentioned earlier. First invocation warms up the container."

**[Wait for completion]**

> "Great, we got our data back."

---

## Cell 4: Inspect Results (20 seconds)

**[Execute cell, show DataFrame]**

> "You can see it's just a pandas DataFrame with date, depth, latitude, longitude. Standard scientific Python workflow."

**[Optional: scroll to show more rows]**

---

## Cell 5: Visualize (30 seconds)

**[Execute cell, wait for plot]**

> "And now I can plot it — a quick scatter plot colored by snow depth. Blues for shallow snow, darker blues for deeper snow."

**[Point to plot]**

> "This is real data from the field, pulled from our PostgreSQL database on EC2, routed through Lambda, and displayed here with zero infrastructure setup on my end. That's the pattern we've been building toward."

---

## Closing (10 seconds)

> "Let me switch back to the slides and we'll talk about what this enables."

**[Return to slides — next slide should be limitations or what this enables]**

---

## Emergency Backup Plan

### If query fails or times out:

**Option 1: Retry**
> "Let's try that again — looks like we hit a network hiccup."  
**[Re-run cell]**

**Option 2: Screenshot fallback**
> "I have the expected output here..."  
**[Show pre-rendered screenshot]**  
> "You can see the DataFrame with 500 measurements and the spatial plot. The key point is the simplicity of the code."

### If plot doesn't render:

> "The plot would show the spatial distribution — darker blue for deeper snow — but the important part is that we got real data back from the database in just a few lines of code."

---

## Pre-Recording Checklist

- [ ] Pre-warm Lambda (run query once, 2 minutes before)
- [ ] Clear notebook outputs (Cell → All Output → Clear)
- [ ] Set Jupyter to Presentation Mode or 125% zoom
- [ ] Close other browser tabs
- [ ] Test query: should return in <5 seconds after warm-up
- [ ] Prepare backup screenshot (save plot as PNG)
- [ ] Check AWS credentials are active
- [ ] Verify matplotlib renders correctly

---

## Timing Breakdown

| Action | Duration | Cumulative |
|--------|----------|------------|
| Switch to Jupyter | 5s | 0:05 |
| Execute imports | 10s | 0:15 |
| Execute client setup | 10s | 0:25 |
| Execute query + narrate | 45s | 1:10 |
| Inspect DataFrame | 20s | 1:30 |
| Execute plot + narrate | 40s | 2:10 |
| Return to slides | 10s | 2:20 |

**Total: ~2:20 with buffer for cold start**

---

## Key Messages to Emphasize

1. **Simplicity** — "No credentials, no config files"
2. **Standard workflow** — "Just pandas and matplotlib"
3. **Real data** — "Pulled from PostgreSQL on EC2"
4. **Pattern is transferable** — "Same architecture works for any database"
5. **Cold start is normal** — "Expected behavior, part of serverless model"

---

## Post-Demo Notes

After the demo, the next slides should cover:
- **Limitations** (cold start, 15-min limit, package size)
- **What this enables** (transferable pattern)
- **CloudBank setup** (IAM roles, credits)
- **Resources** (links to code, docs, support)
