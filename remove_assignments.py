#!/usr/bin/env python3
import re

# Read the file
with open('docs/Introduction/2-bible-checklist.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to match chapter entries with assignments and statuses
# Matches: "- BookName Chapter: Day XX ... ✅" and removes everything after the colon
pattern = r'(- [A-Za-z0-9 ]+\d+):.*?$'

# Replace with just the chapter name (everything before the colon)
output = re.sub(pattern, r'\1', content, flags=re.MULTILINE)

# Write the file back
with open('docs/Introduction/2-bible-checklist.md', 'w', encoding='utf-8') as f:
    f.write(output)

print('Successfully removed all day assignments and status indicators!')
