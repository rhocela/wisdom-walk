---
id: instructions
sidebar_position: 1
sidebar_label: "📖 Instructions"
title: "Bible Bridge: 365-Day Plan - Instructions"
---

# Bible Bridge: 365-Day Chronological Reading Plan - Instructions

## 📋 **PROJECT OVERVIEW**

**Goal**: Complete Bible coverage in 365 days through chronological reading  
**Time Target**: 25-35 minutes of Scripture reading ONLY per day  
**Study Content**: Historical Context, Redemptive Significance, etc. are OPTIONAL enrichment (not counted in time)

---

## 🎯 **CORE PRINCIPLES**

### 1. **TIME CALCULATION (CRITICAL - HIGHEST PRIORITY)**

**Scripture Reading Time ONLY:**
- Target verses per day: **37-52 verses** (to fit 25-35 minute window)
- Formula: `Total Verses ÷ 1.5 = Minutes of Scripture Reading`
- **STRICT RANGE**: 25-35 minutes for Scripture reading
- Study content time: NOT calculated, NOT restricted (marked as optional)

**Time Estimate Display:**
```markdown
⏱️ *Estimated reading time: 32-35 minutes*
```
**CRITICAL**: 
- Display ONLY the estimated reading time in italics under the title
- Calculate based on verse count from "Today's Readings" section ONLY
- Formula: Total verses ÷ 1.5 = minutes
- Round to realistic ranges (e.g., 28-31, 32-35, 25-28)
- Do NOT include additional text like "Scripture reading" or "Additional study content"
- Keep it simple and clean

### 2. **MANDATORY PRE-CREATION CALCULATION WORKFLOW**

**Before creating ANY study, complete these 5 steps:**

**STEP 1: List All Passages with Exact Verse Counts**
```
Example:
- Genesis 1:1-31 (31 verses)
- Genesis 2:1-3 (3 verses)
- John 1:1-5 (5 verses)
- Colossians 1:15-17 (3 verses)
TOTAL: 42 verses
```

**STEP 2: Calculate Bible Reading Time**
```
Formula: Total verses ÷ 1.5 = X minutes
Example: 42 ÷ 1.5 = 28 minutes
```

**STEP 3: Verify Against 25-35 Minute Range**
```
✅ Within range (25-35 min) → Proceed
❌ Below 25 min → Add more passages
❌ Above 35 min → Remove passages or reduce scope
```

**STEP 4: Adjust if Needed**
- If too short: Add relevant passages or expand verse ranges
- If too long: Reduce verse ranges or split into multiple days
- Show multiple attempts/iterations if needed

**STEP 5: State Final Time Estimate**
```
FINAL SCRIPTURE READING TIME: 28-31 minutes
(Do NOT copy-paste from previous days - calculate fresh each time)
```

**⚠️ SHOW YOUR WORK**: Document calculation attempts before creating the study file.

### 3. **COVERAGE TARGETS FOR 365 DAYS**

- **Total Bible**: 1,189 chapters / 31,102 verses
- **Daily average**: 3.26 chapters OR 85 verses
- **Actual daily target**: 37-52 verses (adjusted for study pacing)
- **Result**: More chapters per day than current slow pace, achieves ~365-day completion

---

## 📚 **STUDY STRUCTURE**

### **Required Components (Every Study Must Have):**

```markdown
---
sidebar_position: [DAY_NUMBER]
title: "Day [NUMBER]: [Compelling Title]"
---

# Day [NUMBER]: [Compelling Title]

⏱️ *Estimated reading time: [XX-YY] minutes*

## 📖 Today's Readings

<PersistentCheckbox id="day[N]-[passage1]"> **[Book Chapter:Verses](https://www.bible.com/bible/59/BOOK.CHAPTER.VERSES.ESV)** (Genre) - Brief description</PersistentCheckbox>

<PersistentCheckbox id="day[N]-[passage2]"> **[Book Chapter:Verses](https://www.bible.com/bible/59/BOOK.CHAPTER.VERSES.ESV)** (Genre) - Brief description</PersistentCheckbox>

<PersistentCheckbox id="day[N]-[passage3]"> **[Book Chapter:Verses](https://www.bible.com/bible/59/BOOK.CHAPTER.VERSES.ESV)** (Genre) - Brief description</PersistentCheckbox>

<PersistentCheckbox id="day[N]-[passage4]"> **[Book Chapter:Verses](https://www.bible.com/bible/59/BOOK.CHAPTER.VERSES.ESV)** (Genre) - Brief description</PersistentCheckbox>

**Total: [X] verses** (X OT + X NT)

## 🔑 Key Themes
- Theme 1
- Theme 2
- Theme 3

## 📝 Reading Notes

**From [OT Book]:**
- Observation 1
- Observation 2
- Observation 3

**From the NT Cross-References:**
- Connection 1
- Connection 2
- Connection 3

---

*The sections below are optional enrichment (+10-15 minutes)*

## 🌍 Historical Context
[Background, setting, cultural details - 2-3 paragraphs]

## ✝️ Gospel Connection
[How this passage points to Christ - 1-2 paragraphs]

## 💭 Reflect
1. Question 1
2. Question 2
```

**CRITICAL STRUCTURE RULES:**

1. **Today's Readings Section:**
   - MUST use `<PersistentCheckbox>` component (not plain HTML checkboxes)
   - Each checkbox needs unique ID: `day[N]-[shortname]`
   - Include Bible.com ESV link for every passage
   - Show literary genre in parentheses: (Narrative), (Gospel), (Epistle), (Apocalyptic), (Poetry), (Prophecy), (Wisdom)
   - Brief description after each passage
   - ALWAYS include OT chronological passage + 3-5 NT cross-references
   - Display total verse count at bottom: **Total: X verses** (X OT + X NT)

2. **Estimated Reading Time:**
   - Place immediately under the title (before Today's Readings)
   - Format: `⏱️ *Estimated reading time: XX-YY minutes*`
   - Calculate ONLY from verses in "Today's Readings" section
   - Formula: Total verses ÷ 1.5 = minutes
   - Round to realistic 3-4 minute ranges

3. **Reading Notes:**
   - Separate OT observations from NT cross-reference connections
   - Show how NT passages illuminate the OT reading

4. **Optional Sections:**
   - Mark clearly with horizontal rule and italicized note
   - Keep concise (Historical Context, Gospel Connection, Reflect)
   - These are NOT counted in reading time estimate

### **Bible Link Format:**
```
https://www.bible.com/bible/59/[BOOK].[CHAPTER].[VERSES].ESV
Examples:
- https://www.bible.com/bible/59/GEN.1.1-31.ESV
- https://www.bible.com/bible/59/JHN.1.1-5.ESV
```

---

## 🗂️ **ORGANIZATIONAL STRUCTURE**

### **Parts (Thematic Groupings):**
- Each "Part" = 7-15 days covering a major biblical period/theme
- Parts organized chronologically through biblical history
- Example: "Part 1: Creation and Fall", "Part 2: Patriarchs", etc.

### **Day Numbering:**
- Sequential from Day 1 to Day 365
- `sidebar_position` must match day number exactly
- File naming: `day-[NUMBER].md` (e.g., `day-1.md`, `day-92.md`)

### **Folder Structure:**
```
docs/
  part-1/
    day-1.md
    day-2.md
    ...
  part-2/
    day-8.md
    day-9.md
    ...
```

---

## ✅ **BIBLE CHECKLIST MANAGEMENT**

### **Critical Rules:**
1. **Check before creating**: Search `bible-checklist.md` to find next unassigned chapters
2. **Update immediately**: After creating a study, mark chapters as assigned
3. **No duplicates**: Each chapter assigned to ONE day only
4. **No gaps**: Every chapter must eventually be assigned
5. **Track in checklist**: Use format `- [Book] [Chapter]: Day [N] ✅`

### **Update Format:**
```markdown
Before:
- Genesis 1: ⏳

After:
- Genesis 1: Day 1 ✅
```

---

## 🎨 **CONTENT QUALITY STANDARDS**

### **Titles:**
- Compelling, memorable, thematic (not just "Genesis 1-2")
- Examples: "In the Beginning Was God", "Choose This Day Whom You Will Serve"

### **Chronological Setting:**
- Establish WHEN and WHERE in biblical timeline
- Provide historical/cultural context
- Connect to previous and upcoming events

### **Historical Context:**
- Background information for understanding passages
- Cultural practices, geographical details
- Literary structure and genre considerations
- **Remember: This is OPTIONAL reading, not counted in time**

### **Redemptive Significance:**
- How passage points to Christ/redemption
- Gospel connections and typology
- Theological meaning in God's redemptive plan
- **Remember: This is OPTIONAL reading, not counted in time**

### **Connecting the Dots:**
- Links to other Scripture passages
- Progressive revelation themes
- Biblical theology threads
- **Remember: This is OPTIONAL reading, not counted in time**

### **Study Questions:**
- 5-6 questions that provoke thought and application
- Mix of understanding, reflection, and personal application
- Avoid yes/no questions
- **Remember: This is OPTIONAL engagement, not counted in time**

---

## 🔄 **DAILY WORKFLOW (FOLLOW EVERY TIME)**

### **Step 1: Verify Day Number**
```bash
# Search to confirm day doesn't exist yet
File Search: "day-[N].md"
Expected: "No files found"
```

### **Step 2: Consult Bible Checklist**
```bash
# Find next available chapters
Grep Search: "[Next Book/Chapter]" in bible-checklist.md
Status: "⏳" = available
```

### **Step 3: PRE-CREATION CALCULATION (MANDATORY)**
```
ATTEMPT 1:
- List all passages with verse counts
- Calculate: Total verses ÷ 1.5 = X minutes
- Check: Is X between 25-35 minutes?
- If NO: Revise and try again

ATTEMPT 2 (if needed):
- Adjust passages
- Recalculate
- Verify range

Continue until within 25-35 minute range
DOCUMENT all attempts before proceeding
```

### **Step 4: Create Study File**
- Use all required components
- Include calculated time estimate
- Mark study content as optional
- Follow structure exactly

### **Step 5: Update Bible Checklist**
- Mark all used chapters as `Day [N] ✅`
- Verify no duplicates created
- Confirm all chapters in study are marked

---

## 📊 **PACING & COVERAGE STRATEGY**

### **Verse Distribution Guidelines:**
- **Narrative-heavy days**: 45-52 verses (stories flow faster)
- **Poetry/Wisdom days**: 37-42 verses (slower, reflective reading)
- **Genealogy/Law days**: 40-45 verses (can be dense but readable)
- **Prophetic days**: 38-44 verses (requires more meditation)
- **Gospel days**: 40-48 verses (familiar, engaging material)
- **Epistle days**: 35-42 verses (theologically dense)

### **Balancing Old & New Testament:**
- Primary reading follows chronological OT narrative
- NT passages provide theological commentary/fulfillment
- Typically 2-4 NT verses per study (connecting dots)
- Exception: Gospel/Acts/Epistles periods = more NT focus

---

## ⚠️ **COMMON MISTAKES TO AVOID**

1. ❌ **Copying time estimates** from previous days without calculating
2. ❌ **Including study content time** in the 25-35 minute estimate
3. ❌ **Forgetting to update Bible checklist** after creating study
4. ❌ **Creating duplicate chapter assignments**
5. ❌ **Skipping pre-creation calculation** workflow
6. ❌ **Exceeding 35 minutes** or going below 25 minutes of Scripture reading
7. ❌ **Wrong sidebar_position** (must match day number)
8. ❌ **Missing required components** in study structure
9. ❌ **Forgetting to show calculation work** before file creation
10. ❌ **Not marking study content as optional**

---

## 🎯 **SUCCESS METRICS**

**Each study should achieve:**
- ✅ 25-35 minutes of Scripture reading (calculated, not guessed)
- ✅ 37-52 verses covering 2-5 chapters typically
- ✅ Clear chronological progression
- ✅ Meaningful thematic connection
- ✅ Rich theological content (optional enrichment)
- ✅ Bible checklist updated
- ✅ All required components present
- ✅ Study content marked as optional (+10-15 min)

**Project should achieve:**
- ✅ Complete Bible coverage in ~365 days
- ✅ No gaps in biblical narrative
- ✅ Consistent daily time commitment (Scripture only)
- ✅ Flexible depth (optional study content)
- ✅ Sustainable reading pace

---

## 📝 **QUICK REFERENCE CHECKLIST**

Before submitting ANY day:
- [ ] Verified day number doesn't exist
- [ ] Checked Bible checklist for next chapters
- [ ] Completed 5-step pre-creation calculation
- [ ] Documented calculation attempts (showed work)
- [ ] Scripture reading time is 25-35 minutes
- [ ] Study content marked as optional enrichment
- [ ] All required components included
- [ ] Bible links formatted correctly
- [ ] sidebar_position matches day number
- [ ] Bible checklist updated with ✅ marks
- [ ] No duplicate chapter assignments
- [ ] Title is compelling and thematic

---

## 🔧 **REVISION PROTOCOL**

**If time calculation fails:**
1. Try different passage combinations
2. Expand or reduce verse ranges
3. Show multiple attempts
4. Document why each attempt failed/succeeded
5. Never proceed until within 25-35 minute range

**If user reports error:**
1. Verify actual verse counts
2. Recalculate using correct formula
3. Fix immediately
4. Update instructions if systematic issue discovered

---

**Last Updated**: Day 92 → Day 1 (Bible Bridge restart with 365-day model)  
**Current Status**: Ready to begin 365-day chronological plan  
**Reference Files**: This file + `bible-checklist.md`
