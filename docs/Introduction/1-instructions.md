---
slug: /instructions
sidebar_label: "1-AI Instructions"
sidebar_position: 1
description: "Comprehensive instructions for AI to continue systematic Bible study creation"
---

# AI Instructions: Systematic Bible Study Creation

## **CRITICAL MISSION STATEMENT**

Create a **systematic, chronological Bible study series** that covers all 1,189 chapters from Genesis 1:1 to Revelation 22:21 exactly once, following the 75-entry biblical chronology framework. 

**TOP PRIORITIES (in order):**
1. **STRICT 25-35 MINUTE READING TIME** - This is a hard limit. Never exceed 35 minutes, never go below 25 minutes.
2. **THEMATICALLY COHERENT PARTS** - Create meaningful thematic groupings with appropriate Part divisions that align with biblical narrative flow and theological themes.
3. **COMPLETE BIBLE COVERAGE** - Every chapter must be covered exactly once. Number of days is flexible - use however many days needed to maintain time limits and thematic coherence.

---

## **CORE REQUIREMENTS (NON-NEGOTIABLE)**

### **1. Coverage Standards**
- **Every verse** from Genesis 1:1 to Revelation 22:21 must be covered exactly once
- **No gaps, no duplications** - systematic progression through biblical chronology
- **Follow the 75-entry chronological framework** from biblical-chronology.md
- **Extend beyond 100 days if necessary** for complete coverage

### **2. Study Structure Template (6 Features Required)**
Each study MUST include all six features in this exact order:

1. **Chronological Setting** - Where events fit in Bible history
2. **Today's Readings** - Specific passages with literary genres
3. **Historical Context** - Background and circumstances 
4. **Redemptive Significance** - How theme fits God's salvation plan
5. **Connecting the Dots** - How passages work together
6. **Theological Threads** - Key truths about God

### **3. Reading Time Calculation (HIGHEST PRIORITY)**
- **STRICT 25-35 MINUTE RANGE** - This is a HARD requirement, not a suggestion
  - **MINIMUM**: 25 minutes (never go below this)
  - **MAXIMUM**: 35 minutes (never exceed this)
  - **TARGET**: 30 minutes average
- **What to include in time estimate**: Today's Readings (Bible passages) + Chronological Setting + Historical Context + Redemptive Significance + Connecting the Dots + Theological Threads
- **What to exclude from time estimate**: Study Questions section (this is for reflection/discussion, not timed reading)

#### **MANDATORY CALCULATION WORKFLOW (Follow Every Time):**

**STEP 1: Count Verses Manually**
- List each passage selected for the day
- Count exact verses for each passage (use Bible reference tools if needed)
- Example:
  ```
  Joshua 13:1-33 = 33 verses
  Joshua 14:1-15 = 15 verses
  Ephesians 1:11-14 = 4 verses
  Colossians 1:12-14 = 3 verses
  TOTAL: 55 verses
  ```

**STEP 2: Calculate Bible Reading Time**
- Formula: **Total verses ÷ 1.5 = Bible reading minutes**
- Example: 55 verses ÷ 1.5 = 36.7 minutes of Bible reading alone

**STEP 3: Add Study Content Time**
- Estimate study content at ~250 words/minute
- Typical study content adds 4-6 minutes
- Example: 36.7 + 5 = ~42 minutes total

**STEP 4: Verify Against 25-35 Minute Range**
- **IF > 35 minutes**: Reduce verses OR split into 2 days
- **IF < 25 minutes**: Add verses OR expand study content
- **IF 25-35 minutes**: Proceed with creation

**STEP 5: State Final Time Estimate**
- Write the calculated range (not a generic "30-32 minutes")
- Examples:
  - 55 verses → "28-30 minutes"
  - 48 verses → "25-27 minutes"  
  - 86 verses → "32-35 minutes"
- **NEVER use the same time estimate for multiple consecutive days**
- **ALWAYS base on actual verse count, not assumption**

**MANDATORY ACTIONS:**
- **SHOW YOUR WORK** - Before creating each study, explicitly list passages + verse counts + calculation
- **NEVER copy-paste times** - Calculate fresh for each day
- **VERIFY accuracy** - Double-check verse counts against actual Bible passages
- If calculated time exceeds 35 minutes → reduce verse selection OR split into 2+ days
- If calculated time below 25 minutes → add more verses OR expand study content

### **4. File Structure Requirements**
```
docs/
├── part-1/ (Days 1-10) 
├── part-2/ (Days 11-20)
├── part-3/ (Days 21-30)
└── [continue as needed...]
```

---

## **DETAILED IMPLEMENTATION GUIDELINES**

### **Study Creation Process**

**STEP 1: Pre-Creation Setup**
- Use the 75-entry biblical chronology for proper sequencing
- **EXAMINE CURRENT PART FOLDER** - Before creating a new study, check if you need to create a new part folder:
  - Count existing days in current part folder (target 8-12 studies per part)
  - Evaluate thematic alignment - does this study fit the current part's theme or does it begin a new biblical era/theme?
  - Check the current part's `_category_.json` description to see if the new content aligns
  - **If current part has 10+ studies OR theme shifts significantly** (e.g., from Exodus/Law to Tabernacle completion, from Wilderness to Conquest, etc.), create new part folder
- If creating new part folder, create both the folder AND `_category_.json` file with appropriate thematic title
- Follow day-1.md as the exact template/format reference for structure and style
- Determine appropriate thematic grouping for realistic reading time

**STEP 2: Chronological Positioning**
- Check biblical-chronology.md for proper sequence
- Identify which biblical books/chapters come next chronologically
- Ensure no gaps or duplications in biblical coverage

**STEP 3: Content Development (6-Feature Template)**
- **Chronological Setting**: Reference the 75-entry framework, explain historical period
- **Historical Context**: Provide background for ancient audience and circumstances
- **Today's Readings**: **CRITICAL - ALWAYS include 3-5 passages with cross-references.** NEVER create a day with only one Bible passage. Each day MUST have the main chronological OT passage PLUS 2-4 NT cross-references that meaningfully connect to the themes. Include proper literary genre labels for all passages.
- **Redemptive Significance**: Connect to Christ and God's salvation plan (formerly "Redemptive Focus")
- **Connecting the Dots**: Show meaningful Old Testament/New Testament connections
- **Theological Threads**: Highlight key truths about God's character

**STEP 4: Required Components Integration**
- Include ProgressTracker component with correct day number
- Add PersistentCheckbox readings with Bible.com ESV links (MINIMUM 3 passages, MAXIMUM 5 passages)
- **MANDATORY: Every day must have multiple cross-referenced passages** - one OT chronological passage + 2-4 NT connections
- Ensure proper literary genre labels for every passage
- Create meaningful Old/New Testament connections (not superficial - show how themes relate)
- Write 3-5 study questions for reflection
- **CALCULATE READING TIME FIRST** using mandatory 5-step calculation workflow (see section 3 above)

**STEP 4A: MANDATORY Pre-Creation Time Calculation**
Before writing any study content, complete this calculation:

1. **List passages with verse counts:**
   ```
   [Book Chapter:Verses] = X verses
   [Book Chapter:Verses] = Y verses
   [Book Chapter:Verses] = Z verses
   TOTAL: [sum] verses
   ```

2. **Calculate Bible reading time:**
   ```
   [Total verses] ÷ 1.5 = [X] minutes
   ```

3. **Add study content estimate:**
   ```
   [X minutes] + 5 minutes = [Y] total minutes
   ```

4. **Verify range:**
   ```
   Is [Y] between 25-35 minutes? 
   YES → Proceed | NO → Adjust passages
   ```

5. **State final time:**
   ```
   Estimated reading time: [Z-W minutes]
   ```

**This calculation MUST be completed and verified BEFORE creating the study file.**

**STEP 5: Bible Coverage Tracking (CRITICAL)**
- **Update 2-bible-checklist.md IMMEDIATELY** after creating each study
- **VERIFY NO DUPLICATE VERSES** - Before assigning any passage, check the Bible checklist to ensure that chapter has NOT already been assigned to another day
- Change status from ⏳ to ✅ for all chapters covered in the new study
- Include the Day number assignment for each chapter
- Update the Coverage Summary totals at the bottom
- Verify no gaps or duplications in chronological coverage
- **If a chapter is already marked ✅ with a day number, DO NOT use it again** - find a different cross-reference passage

**STEP 6: Quality Verification**
- Verify all Bible.com ESV links work properly
- Ensure proper literary genre labels (Narrative, Poetry, Gospel, Epistle, Prophecy, Apocalyptic, Wisdom)
- Confirm study questions are thoughtful and application-focused
- Add memory verse when appropriate
- Double-check chronological accuracy against 75-entry framework

### **Bible Reference Standards**
- **Translation**: English Standard Version (ESV) exclusively
- **Link Format**: `https://www.bible.com/bible/59/[BOOK].[CHAPTER].[VERSE].ESV`
- **Reference Style**: [Book Chapter:Verse-Verse] format
- **Literary Genres**: Always label each passage correctly

### **Cross-Testament Connection Priorities**
- **Creation** → New Creation in Christ
- **Fall** → Redemption through Christ  
- **Abraham's Covenant** → Fulfillment in Christ
- **Exodus Deliverance** → Salvation in Christ
- **Davidic Covenant** → Christ as Eternal King
- **Prophetic Promises** → Christ as Fulfillment
- **Temple/Priesthood** → Christ as High Priest
- **Exile/Return** → Spiritual Return to God

---

## **PART STRUCTURE GUIDELINES (CRITICAL FOR THEMATIC COHERENCE)**

### **Thematic Part Creation (High Priority)**
- **Purpose**: Parts organize studies into meaningful thematic units that align with biblical narrative flow
- **Thematic Triggers**: Create new Part when you encounter major narrative/theological shifts:
  - **Covenant transitions** (Abrahamic → Mosaic → Davidic)
  - **Geographical moves** (Egypt → Wilderness → Canaan → Exile → Return)
  - **Leadership changes** (Patriarchs → Moses → Joshua → Judges → Kings)
  - **Literary genre shifts** (Narrative → Law → Poetry → Prophecy → Gospel → Epistles)
  - **Redemptive history phases** (Creation/Fall → Patriarchs → Exodus → Kingdom → Exile → Return → Christ → Church)
- **Part Size Guidelines**: 
  - **Minimum**: 8 days per part (for substantive thematic development)
  - **Maximum**: 15 days per part (avoid overly broad themes)
  - **Sweet spot**: 10-12 days per part
- **When to Create New Part**:
  - Current part has 10+ studies AND theme is shifting
  - Major biblical book transition with different genre/focus
  - New redemptive-historical phase beginning
  - Different theological emphasis emerging

### **Part Naming Conventions**
- Use clear, descriptive thematic titles that capture the biblical content
- Examples from existing parts:
  - "Beginnings and Foundations" (Creation, Fall, Flood)
  - "Patriarchs and Promises" (Abraham, Isaac, Jacob, Joseph)
  - "Deliverance and Covenant" (Exodus, Red Sea, Sinai)
  - "Tabernacle and Worship" (Construction, Dedication, Sacrifices)
  - "Wilderness Journey" (Testing, Rebellion, Transition)
- Avoid generic titles - be specific to biblical content

### **Category File Template**
```json
{
  "label": "Part X: [Thematic Title]",
  "position": X,
  "link": {
    "type": "generated-index",
    "description": "[Brief description of this part's chronological focus]"
  }
}
```

---

## **STUDY FILE TEMPLATE**

```markdown
---
sidebar_position: X
title: "Day X: [Thematic Title]"
---

# Day X: [Thematic Title]

⏱️ *Estimated reading time: [X-Y minutes]*

<ProgressTracker dayNumber={X} />

## Chronological Setting
[Where these events fit in biblical history - reference 75-entry framework]

## Historical Context  
[Background and circumstances of the biblical events and original audience]

## Today's Readings
<PersistentCheckbox id="dayX-passage1"> **[Reference](link)** (Genre) - Brief description</PersistentCheckbox>
<PersistentCheckbox id="dayX-passage2"> **[Reference](link)** (Genre) - Brief description</PersistentCheckbox>
[3-5 passages total with proper genres]

## Redemptive Significance
[How this theme fits God's overall salvation plan through Christ]

## Connecting the Dots
[How the different passages work together, especially OT/NT connections]

## Theological Threads
- **[Theme 1]**: [Key truth about God's character/work]
- **[Theme 2]**: [Key truth about God's character/work]
- **[Theme 3]**: [Key truth about God's character/work]

## Study Questions
1. **[Question about God's character]**: [Thoughtful reflection question]
2. **[Question about application]**: [Personal application question]  
3. **[Question about connections]**: [Cross-reference or theological question]
4. **[Question about Christ]**: [How this points to/connects with Jesus]
5. **[Question about response]**: [How should we respond/live differently]

:::tip Verse to Memorize
*"[Meaningful verse from the readings]"* ***[Reference]*** 💭 
:::
```

---

## **QUALITY CONTROL CHECKLIST**

### **Before Creating Each Study:**
- [ ] Verified chronological sequence from biblical-chronology.md (75-entry framework)
- [ ] **EXAMINED current part folder** - checked day count (8-12 target) and thematic alignment
- [ ] **DETERMINED if new part folder needed** - created folder and `_category_.json` if theme shifts or part exceeds 10+ studies
- [ ] Referenced Day 1 template for exact structure and style formatting
- [ ] Calculated actual reading time based on content volume
- [ ] Identified 3-5 complementary Bible passages
### **After Creating Each Study (CRITICAL WORKFLOW):**
- [ ] All 6 required features present and complete (Chronological Setting → Theological Threads)
- [ ] ProgressTracker component included with correct day number
- [ ] PersistentCheckbox readings with Bible.com ESV links functional
- [ ] **CHECKED 2-bible-checklist.md BEFORE selecting passages** to avoid duplicates
- [ ] **UPDATE 2-bible-checklist.md IMMEDIATELY** - mark chapters as ✅ with day assignment
- [ ] **VERIFIED no duplicate verse assignments** - each chapter assigned to only ONE day
- [ ] **UPDATE Coverage Summary totals** in 2-bible-checklist.md 
- [ ] Reading time realistically calculated and varied (not auto-20 minutes)
- [ ] All literary genres correctly identified for every passage
- [ ] Cross-testament connections meaningful and accurate
- [ ] 3-5 study questions thoughtful and application-focused
- [ ] Theological threads highlight God's character accurately
- [ ] Memory verse included when appropriate
- [ ] **Verify no chronological gaps or duplications** in bible-checklist.md
- [ ] Memory verse included when appropriate
### **Coverage Tracking (Critical):**
- [ ] **2-bible-checklist.md CHECKED BEFORE creating study** to avoid duplicate assignments
- [ ] **2-bible-checklist.md updated immediately** after each study creation
- [ ] **NO duplicate verse assignments** - each chapter assigned to exactly ONE day
- [ ] No biblical chapters skipped in chronological sequence
- [ ] No chapters duplicated across multiple studies  
- [ ] Coverage Summary totals updated to reflect progress
- [ ] Systematic progression through 75-entry framework maintained
- [ ] Every verse from Genesis 1:1 to Revelation 22:21 accounted for
- [ ] Systematic progression through 75-entry framework maintained
- [ ] Every verse from Genesis 1:1 to Revelation 22:21 accounted for

---

## **THEOLOGICAL GUARDRAILS**

### **Orthodox Christian Doctrine:**
- Affirm biblical inspiration and authority
- Christ-centered interpretation of all Scripture
- Trinitarian understanding of God
- Salvation by grace alone through faith alone
- Biblical inerrancy and historical reliability

### **Interpretive Principles:**
- Scripture interprets Scripture
- Consider historical-grammatical context
- Recognize progressive revelation
- Christ as the fulfillment of Old Testament
- Application flows from proper interpretation
1. **❌ Auto-copying reading times** - Calculate each day individually
2. **❌ Skipping chronological verification** - Always check biblical-chronology.md
3. **❌ Missing literary genre labels** - Required for every passage
4. **❌ ONLY ONE PASSAGE PER DAY** - **CRITICAL ERROR: Every day MUST have 3-5 cross-referenced passages** (1 OT chronological + 2-4 NT connections). NEVER create a day with only one Bible passage.
5. **❌ Weak cross-testament connections** - Create meaningful Old/New Testament connections, not superficial links
6. **❌ Incomplete coverage** - Every chapter must be assigned to a study following 75-entry chronology
7. **❌ NOT CHECKING FOR DUPLICATES** - **CRITICAL ERROR: ALWAYS check 2-bible-checklist.md BEFORE selecting passages to ensure no chapter is assigned twice**
8. **❌ NOT UPDATING BIBLE CHECKLIST** - **CRITICAL ERROR: MUST update 2-bible-checklist.md immediately after creating each study**
9. **❌ Missing required components** - Must include ProgressTracker, PersistentCheckbox readings, proper genre labels
10. **❌ Ignoring Day 1 template** - Follow Day 1 as exact reference for structure and formatting style
11. **❌ Theological inaccuracy** - Stay within orthodox Christian interpretation
12. **❌ Missing study questions** - Always include 3-5 thoughtful reflection questions
13. **❌ Poor file organization** - Follow part structure, create _category_.json for new partsg style
9. **❌ Not updating _bible-checklist.md** - MUST update coverage tracking after every single study
10. **❌ Theological inaccuracy** - Stay within orthodox Christian interpretation
11. **❌ Missing study questions** - Always include 3-5 thoughtful reflection questions
12. **❌ Poor file organization** - Follow part structure, create _category_.json for new parts
11. **❌ Poor file organization** - Follow part structure, create _category_.json for new parts

---

## **SUCCESS METRICS**

### **Individual Study Success:**
- All 6 features present and substantial
- Reading time accurately calculated (25-35 minute range)
- Meaningful cross-testament connections
- Christ-centered redemptive focus
- Practical application questions

### **Overall Series Success:**
- **Complete coverage**: All 1,189 chapters included exactly once
- **Chronological accuracy**: Follows 75-entry framework systematically  
- **Theological consistency**: Orthodox Christian interpretation throughout
- **Practical value**: Helps readers understand and apply Scripture
- **Sustainable format**: Realistic reading times and accessible content

---

## **PRIORITY REMINDER**

**Complete biblical coverage is the highest priority.** If achieving comprehensive coverage requires extending beyond 100 days, do so without hesitation. Quality, completeness, and theological accuracy matter more than arbitrary numerical limits.

The goal is to create a resource that helps people read through the entire Bible systematically with deep understanding and practical application, following the chronological flow of God's progressive revelation culminating in Christ.

---

*This instruction file serves as the definitive guide for continuing the systematic creation of the Wisdom Walk Bible study series. All future development should align with these standards and priorities.*