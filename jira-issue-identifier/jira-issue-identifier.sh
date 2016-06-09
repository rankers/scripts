#!/bin/sh

__dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

CHANGES=$(curl "${BUILD_URL}api/xml?wrapper=changes&xpath=//changeSet//comment")
echo $CHANGES
RESULT="$(echo $CHANGES | grep -o 'MAP-[0-9]\{1,4\}\b' | tr '\n' ',')"
QUERY="id in (${RESULT%?})"

echo "Exporting JQL query: $QUERY"
echo QUERY=$QUERY > props
