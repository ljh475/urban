#!/usr/bin/env bash
set -euo pipefail

FILE="app/page.tsx"

if [[ ! -f "$FILE" ]]; then
  echo "FAIL: $FILE not found"
  exit 1
fi

required_patterns=(
  "id=\"overview\""
  "id=\"process\""
  "id=\"cost\""
  "id=\"law\""
  "id=\"data\""
  "id=\"resources\""
  "id=\"faq\""
  "function CostBarChart()"
  "const statItems: StatItem[]"
)

for pattern in "${required_patterns[@]}"; do
  if ! grep -Fq "$pattern" "$FILE"; then
    echo "FAIL: missing pattern -> $pattern"
    exit 1
  fi
done

echo "PASS: homepage structure and visualization markers are present"
