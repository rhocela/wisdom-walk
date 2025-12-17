# Read the file
$filePath = 'docs\Introduction\2-bible-checklist.md'
$content = Get-Content $filePath -Raw

# Replace the coverage summary section
$oldSummary = @"
## **Current Status**
- **Old Testament**: 197 chapters assigned ✅ | 732 chapters pending ⏳
- **New Testament**: 118 chapters assigned ✅ | 142 chapters pending ⏳
- **Total**: 315/1,189 chapters assigned (26.5% complete)

**Progress by Study Part:**
- Part 10 (Days 74-83): 56 chapters ✅
- Part 9 (Days 64-67, 73): 55 chapters ✅  
- Part 8 (Days 51-66, 60B): 49 chapters ✅
- Part 7 (Days 45-50): 25 chapters ✅
- Part 6 (Days 31-44): 40 chapters ✅
- Part 5 (Days 25-30): 20 chapters ✅
- Part 4 (Days 21-24): 12 chapters ✅
- Part 3 (Days 11-20): 24 chapters ✅
- Part 2 (Days 9-10): 6 chapters ✅
- Part 1 (Days 1-8): 25 chapters ✅

## **Next Steps**
- Continue Genesis chronologically (Genesis 19 onwards)
- Follow 75-entry biblical chronology framework
- Update this checklist after each new study is created
- Verify no gaps or duplications in coverage
"@

$newSummary = @"
## **Current Status**
- **Old Testament**: 0 chapters assigned | 929 chapters pending ⏳
- **New Testament**: 0 chapters assigned | 260 chapters pending ⏳
- **Total**: 0/1,189 chapters assigned (0% complete)

**Clean Slate Reset Complete**
All day assignments and status indicators have been removed from the entire checklist. Ready for systematic verification and mapping of Part 1-10 studies against actual day file content.

## **Next Steps**
1. Systematically verify Part 1 (Days 1-8) passages
2. Identify any missing or duplicated assignments
3. Update checklist with verified assignments
4. Continue with remaining parts sequentially
"@

$content = $content.Replace($oldSummary, $newSummary)

# Write back
Set-Content $filePath -Value $content -Encoding UTF8

Write-Host "Coverage summary updated!"
