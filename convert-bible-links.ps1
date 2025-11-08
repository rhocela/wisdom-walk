# PowerShell script to convert BibleGateway links to YouVersion links

# Bible book mappings for YouVersion
$bookMappings = @{
    "Genesis" = "GEN"
    "Exodus" = "EXO"
    "Leviticus" = "LEV"
    "Numbers" = "NUM"
    "Deuteronomy" = "DEU"
    "Joshua" = "JOS"
    "Judges" = "JDG"
    "Ruth" = "RUT"
    "1 Samuel" = "1SA"
    "2 Samuel" = "2SA"
    "1 Kings" = "1KI"
    "2 Kings" = "2KI"
    "1 Chronicles" = "1CH"
    "2 Chronicles" = "2CH"
    "Ezra" = "EZR"
    "Nehemiah" = "NEH"
    "Esther" = "EST"
    "Job" = "JOB"
    "Psalms" = "PSA"
    "Psalm" = "PSA"
    "Proverbs" = "PRO"
    "Ecclesiastes" = "ECC"
    "Song of Songs" = "SNG"
    "Isaiah" = "ISA"
    "Jeremiah" = "JER"
    "Lamentations" = "LAM"
    "Ezekiel" = "EZK"
    "Daniel" = "DAN"
    "Hosea" = "HOS"
    "Joel" = "JOL"
    "Amos" = "AMO"
    "Obadiah" = "OBA"
    "Jonah" = "JON"
    "Micah" = "MIC"
    "Nahum" = "NAM"
    "Habakkuk" = "HAB"
    "Zephaniah" = "ZEP"
    "Haggai" = "HAG"
    "Zechariah" = "ZEC"
    "Malachi" = "MAL"
    "Matthew" = "MAT"
    "Mark" = "MRK"
    "Luke" = "LUK"
    "John" = "JHN"
    "Acts" = "ACT"
    "Romans" = "ROM"
    "1 Corinthians" = "1CO"
    "2 Corinthians" = "2CO"
    "Galatians" = "GAL"
    "Ephesians" = "EPH"
    "Philippians" = "PHP"
    "Colossians" = "COL"
    "1 Thessalonians" = "1TH"
    "2 Thessalonians" = "2TH"
    "1 Timothy" = "1TI"
    "2 Timothy" = "2TI"
    "Titus" = "TIT"
    "Philemon" = "PHM"
    "Hebrews" = "HEB"
    "James" = "JAS"
    "1 Peter" = "1PE"
    "2 Peter" = "2PE"
    "1 John" = "1JN"
    "2 John" = "2JN"
    "3 John" = "3JN"
    "Jude" = "JUD"
    "Revelation" = "REV"
}

function Convert-BibleGatewayToYouVersion {
    param(
        [string]$InputText
    )
    
    # Pattern to match BibleGateway links
    $pattern = '\[([^\]]+)\]\(https://www\.biblegateway\.com/passage/\?search=([^&\)]+)(?:&version=\w+)?\)'
    
    $result = [regex]::Replace($InputText, $pattern, {
        param($match)
        
        $linkText = $match.Groups[1].Value
        $searchParam = [System.Web.HttpUtility]::UrlDecode($match.Groups[2].Value)
        
        Write-Host "Processing: $linkText -> $searchParam"
        
        # Parse the search parameter to extract book, chapters, and verses
        if ($searchParam -match '^([0-9\s]*[A-Za-z\s]+)\s+(\d+):(\d+)-?(\d+)?:?(\d+)?(?:,\s*(.+))?') {
            $book = $matches[1].Trim()
            $chapter1 = $matches[2]
            $verse1 = $matches[3]
            $verse2 = if ($matches[4]) { $matches[4] } else { $null }
            $chapter2 = if ($matches[5]) { $matches[5] } else { $null }
            $additional = if ($matches[6]) { $matches[6] } else { $null }
            
            # Get YouVersion book abbreviation
            $bookCode = $bookMappings[$book]
            if (-not $bookCode) {
                Write-Warning "Book mapping not found for: $book"
                return $match.Value # Return original if can't convert
            }
            
            # Build YouVersion reference
            if ($additional) {
                # Handle complex references with commas (like multiple passages)
                # For now, just use the first reference
                $youVersionRef = "$bookCode.$chapter1.$verse1"
                if ($verse2) {
                    $youVersionRef += "-$verse2"
                } elseif ($chapter2) {
                    $youVersionRef += "-$chapter1.$chapter2"
                }
            } else {
                $youVersionRef = "$bookCode.$chapter1.$verse1"
                if ($verse2) {
                    $youVersionRef += "-$verse2"
                } elseif ($chapter2) {
                    $youVersionRef += "-$chapter1.$chapter2"
                }
            }
            
            $youVersionUrl = "https://www.bible.com/bible/59/$youVersionRef.ESV"
            return "[$linkText]($youVersionUrl)"
        }
        else {
            Write-Warning "Could not parse: $searchParam"
            return $match.Value # Return original if can't parse
        }
    })
    
    return $result
}

# Get all day files except day-1
$dayFiles = Get-ChildItem -Path "docs" -Filter "day-*.md" -Recurse | Where-Object { $_.Name -ne "day-1.md" }

Write-Host "Found $($dayFiles.Count) files to process"

foreach ($file in $dayFiles) {
    Write-Host "Processing $($file.FullName)..."
    
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    if ($content -match "biblegateway\.com") {
        Write-Host "  Found BibleGateway links, converting..."
        $newContent = Convert-BibleGatewayToYouVersion -InputText $content
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
        Write-Host "  Updated $($file.FullName)"
    } else {
        Write-Host "  No BibleGateway links found, skipping..."
    }
}

Write-Host "Conversion complete!"