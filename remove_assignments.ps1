# Read the file
$filePath = 'docs\Introduction\2-bible-checklist.md'
$content = Get-Content $filePath -Raw

# Remove all day assignments and status indicators
# Pattern: "- Book Chapter: Day XX, Day YY ... ✅" -> "- Book Chapter"
$content = $content -replace '(?m)^(- [A-Za-z0-9 ]+\d+):.*$', '$1'

# Update the COVERAGE SUMMARY section
$summaryPattern = @"
## \*\*Current Status\*\*
- \*\*Old Testament\*\*: \d+ chapters assigned .* \| \d+ chapters pending .*
- \*\*New Testament\*\*: \d+ chapters assigned .* \| \d+ chapters pending .*
- \*\*Total\*\*: \d+/1,189 chapters assigned \(.*?\) complete\)

\*\*Progress by Study Part:\*\*
- Part 10 \(Days 74-83\): \d+ chapters .*
- Part 9 \(Days 64-67, 73\): \d+ chapters .*  
- Part 8 \(Days 51-66, 60B\): \d+ chapters .*
- Part 7 \(Days 45-50\): \d+ chapters .*
- Part 6 \(Days 31-44\): \d+ chapters .*
- Part 5 \(Days 25-30\): \d+ chapters .*
- Part 4 \(Days 21-24\): \d+ chapters .*
- Part 3 \(Days 11-20\): \d+ chapters .*
- Part 2 \(Days 9-10\): \d+ chapters .*
- Part 1 \(Days 1-8\): \d+ chapters .*
"@

$summaryReplacement = @"
## **Current Status**
- **Old Testament**: 0 chapters assigned ⏳ | 929 chapters pending ⏳
- **New Testament**: 0 chapters assigned ⏳ | 260 chapters pending ⏳
- **Total**: 0/1,189 chapters assigned (0% complete)

**Clean Slate Reset Complete**
All day assignments and status indicators have been removed from the entire checklist. Ready for systematic verification and mapping of Part 1 through Part 10 studies.

## **Next Steps**
1. Systematically verify Part 1 (Days 1-8) passages against this clean checklist
2. Identify any missing or duplicated assignments
3. Update checklist with verified assignments
4. Continue with Part 2, Part 3, and remaining parts
5. Follow 75-entry biblical chronology framework
6. Ensure 100% coverage with no gaps or duplications
"@

$content = $content -replace $summaryPattern, $summaryReplacement

# Write back
Set-Content $filePath -Value $content -Encoding UTF8

Write-Host "Successfully removed all day assignments and status indicators!"
Write-Host "Coverage summary has been updated to reflect clean slate status."
