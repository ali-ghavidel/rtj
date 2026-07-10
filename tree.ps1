param(
    [string]$Path = "."
)

$Ignore = @(
    "node_modules",
    ".git",
    "dist",
    "coverage",
    ".vite",
    ".idea",
    ".vscode"
)

function Show-Tree {
    param(
        [string]$CurrentPath,
        [string]$Prefix = ""
    )

    $items = Get-ChildItem -LiteralPath $CurrentPath -Force |
        Where-Object { $Ignore -notcontains $_.Name } |
        Sort-Object @{Expression="PSIsContainer";Descending=$true}, Name

    for ($i = 0; $i -lt $items.Count; $i++) {

        $item = $items[$i]
        $isLast = ($i -eq ($items.Count - 1))

        if ($isLast) {
            $branch = "\-- "
            $nextPrefix = $Prefix + "    "
        }
        else {
            $branch = "+-- "
            $nextPrefix = $Prefix + "|   "
        }

        Write-Output "$Prefix$branch$($item.Name)"

        if ($item.PSIsContainer) {
            Show-Tree -CurrentPath $item.FullName -Prefix $nextPrefix
        }
    }
}

Write-Output (Resolve-Path $Path)
Show-Tree -CurrentPath $Path