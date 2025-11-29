---
sidebar_label: "1-AI Instructions"
sidebar_position: 1
description: "Comprehensive instructions for AI to continue systematic Bible study creation"
---

# AI Instructions: Systematic Bible Study Creation

## **CRITICAL MISSION STATEMENT**

Create a **systematic, chronological Bible study series** that covers all 1,189 chapters from Genesis 1:1 to Revelation 22:21 exactly once, following the 75-entry biblical chronology framework. **Complete coverage is more important than staying within 100 days** - extend as needed to ensure every verse is included.

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

### **3. Reading Time Calculation**
- **Target ~20 minutes for Bible reading** - Calculate based on verse count in "Today's Readings"
- **Formula for Bible verses**: ~1.5 verses per minute (e.g., 30 verses ≈ 20 minutes)
- **Study content is additional** - The study material (context, connections, questions) is for reflection and can be read at the reader's own pace
- **Vary estimates realistically** based on actual verse count (15-25 minutes range is normal)
- **Calculate each day individually** - No automatic times; base it on actual passage length

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
- Check if this day starts a new Part number - if so, create new folder AND _category_.json file
- Follow day-1.md as the exact template/format reference for structure and style
- Determine appropriate thematic grouping for realistic reading time

**STEP 2: Chronological Positioning**
- Check biblical-chronology.md for proper sequence
- Identify which biblical books/chapters come next chronologically
- Ensure no gaps or duplications in biblical coverage

**STEP 3: Content Development (6-Feature Template)**
- **Chronological Setting**: Reference the 75-entry framework, explain historical period
- **Historical Context**: Provide background for ancient audience and circumstances
- **Today's Readings**: Include 3-5 passages with proper literary genre labels
- **Redemptive Significance**: Connect to Christ and God's salvation plan (formerly "Redemptive Focus")
- **Connecting the Dots**: Show meaningful Old Testament/New Testament connections
- **Theological Threads**: Highlight key truths about God's character

**STEP 4: Required Components Integration**
- Include ProgressTracker component with correct day number
- Add PersistentCheckbox readings with Bible.com ESV links
- Ensure proper literary genre labels for every passage
- Create meaningful Old/New Testament connections
- Write 3-5 study questions for reflection
- Calculate actual reading time based on verse count (target realistic time, not auto-20 minutes)

**STEP 5: Bible Coverage Tracking (CRITICAL)**
- **Update _bible-checklist.md IMMEDIATELY** after creating each study
- Change status from ⏳ to ✅ for all chapters covered in the new study
- Include the Day number assignment for each chapter
- Update the Coverage Summary totals at the bottom
- Verify no gaps or duplications in chronological coverage

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

## **PART STRUCTURE GUIDELINES**

### **Folder Creation Rules**
- **New Part Detection**: Check if this day starts a new Part number (typically every 8-12 studies)
- **Automatic Folder Creation**: Create new part folders as needed (part-4/, part-5/, etc.)
- **Required _category_.json**: Each part MUST have `_category_.json` with proper position number
- **Day 1 Template Reference**: Follow Day 1 as the exact template/format reference for structure and style
- Theme each part appropriately based on chronological content
- Target 8-12 studies per part for manageable organization

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
- [ ] Determined if new Part folder needed and created _category_.json if required
- [ ] Referenced Day 1 template for exact structure and style formatting
- [ ] Calculated actual reading time based on content volume
- [ ] Identified 3-5 complementary Bible passages
- [ ] Planned meaningful Old Testament/New Testament connections

### **After Creating Each Study (CRITICAL WORKFLOW):**
- [ ] All 6 required features present and complete (Chronological Setting → Theological Threads)
- [ ] ProgressTracker component included with correct day number
- [ ] PersistentCheckbox readings with Bible.com ESV links functional
- [ ] **UPDATE _bible-checklist.md IMMEDIATELY** - mark chapters as ✅ with day assignment
- [ ] **UPDATE Coverage Summary totals** in _bible-checklist.md 
- [ ] Reading time realistically calculated and varied (not auto-20 minutes)
- [ ] All literary genres correctly identified for every passage
- [ ] Cross-testament connections meaningful and accurate
- [ ] 3-5 study questions thoughtful and application-focused
- [ ] Theological threads highlight God's character accurately
- [ ] Memory verse included when appropriate
- [ ] **Verify no chronological gaps or duplications** in bible-checklist.md

### **Coverage Tracking (Critical):**
- [ ] **_bible-checklist.md updated immediately** after each study creation
- [ ] No biblical chapters skipped in chronological sequence
- [ ] No chapters duplicated across multiple studies  
- [ ] Coverage Summary totals updated to reflect progress
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

---

## **COMMON MISTAKES TO AVOID**

1. **❌ Auto-copying reading times** - Calculate each day individually
2. **❌ Skipping chronological verification** - Always check biblical-chronology.md
3. **❌ Missing literary genre labels** - Required for every passage
4. **❌ Weak cross-testament connections** - Create meaningful Old/New Testament connections, not superficial links
5. **❌ Incomplete coverage** - Every chapter must be assigned to a study following 75-entry chronology
6. **❌ Missing required components** - Must include ProgressTracker, PersistentCheckbox readings, proper genre labels
7. **❌ Ignoring Day 1 template** - Follow Day 1 as exact reference for structure and formatting style
8. **❌ Not updating _bible-checklist.md** - MUST update coverage tracking after every single study
9. **❌ Theological inaccuracy** - Stay within orthodox Christian interpretation
10. **❌ Missing study questions** - Always include 3-5 thoughtful reflection questions
11. **❌ Poor file organization** - Follow part structure, create _category_.json for new parts

---

## **SUCCESS METRICS**

### **Individual Study Success:**
- All 6 features present and substantial
- Reading time accurately calculated (12-25 minute range)
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