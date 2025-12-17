@echo off
REM Read file and use PowerShell to do the regex replacement
powershell -NoProfile -Command ^
"(Get-Content 'docs\Introduction\2-bible-checklist.md' -Raw) -replace '(- [A-Za-z0-9 ]+\d+):.*$', '$1' -raw | Set-Content 'docs\Introduction\2-bible-checklist.md' -Encoding UTF8"
echo Done!
pause
