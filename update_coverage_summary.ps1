# Update coverage summary with Part 1 verification results
$filePath = 'docs\Introduction\2-bible-checklist.md'
$content = Get-Content $filePath -Raw

# Replace the coverage summary
$oldSection = "## **Current Status**`r`n- **Old Testament**: 0 chapters assigned | 929 chapters pending"
$newSection = "## **Current Status**`r`n- **Old Testament**: 13 chapters assigned ✅ | 916 chapters pending ⏳"

$content = $content -replace [regex]::Escape($oldSection), $newSection

$oldSection2 = "- **New Testament**: 0 chapters assigned | 260 chapters pending"
$newSection2 = "- **New Testament**: 10 chapters assigned ✅ | 250 chapters pending ⏳"

$content = $content -replace [regex]::Escape($oldSection2), $newSection2

$oldSection3 = "- **Total**: 0/1,189 chapters assigned \(0% complete\)"
$newSection3 = "- **Total**: 23/1,189 chapters assigned (1.9% complete)"

$content = $content -replace $oldSection3, $newSection3

$oldDesc = "**Clean Slate Reset Complete**`r`nAll day assignments and status indicators have been removed from the entire checklist. Ready for systematic verification and mapping of Part 1-10 studies against actual day file content."
$newDesc = "**Part 1 (Days 1-8) Verification Complete**`r`nAll Part 1 passages have been systematically verified and the checklist updated with day assignments and status indicators.`r`n`r`n### Part 1 Summary (Days 1-8):`r`n- Genesis 1-11: Fully covered (Days 1-8) ✅`r`n- 10 NT chapters cross-referenced with thematic connections`r`n- Hebrews 11: Referenced across 4 days with 🔗 indicator (partial/distributed)`r`n- No duplications, no gaps in Genesis coverage"

$content = $content -replace [regex]::Escape($oldDesc), $newDesc

$oldSteps = "## \*\*Next Steps\*\*`r`n1\. Systematically verify Part 1 \(Days 1-8\) passages`r`n2\. Identify any missing or duplicated assignments`r`n3\. Update checklist with verified assignments`r`n4\. Continue with remaining parts sequentially"
$newSteps = "## **Next Steps**`r`n1. Continue with Part 2 (Days 9+) verification`r`n2. Maintain systematic verification across all remaining parts`r`n3. Complete full Bible coverage (1,189 chapters total)`r`n4. Ensure no gaps or duplications in final checklist"

$content = $content -replace $oldSteps, $newSteps

Set-Content $filePath -Value $content -Encoding UTF8

Write-Host "Coverage summary updated with Part 1 verification results!"
