#!/bin/bash
# This finds all Octopus tokens in js and ts files and replaces with corresponding
# values from environment variables. Environment variables should be upper-cased
echo "Replacing Octopus variables with Environment variables"

{ find ./build/static/js -name '*.*' ; } | while read filename; do
    if [[ ! "$filename" == *.bak ]] && [[ ! -f "$filename.bak" ]]; then
        cp "$filename" "$filename.bak"
    fi

    if [[ ! "$filename" == *.bak ]]; then
        echo "$filename"
        cp "$filename.bak" "$filename"
        egrep -o "#{[A-Za-z0-9. |_]+}" "$filename" | while read token; do
            envname="${token:2:-1}"
            envname=${envname/ | JsonEscape/}
            envname=$(echo "$envname" | awk '{print toupper($0)}')

            enctoken=${token/\{/\\\{}
            enctoken=${enctoken/ | JsonEscape/ \\| JsonEscape}
            enctoken=${enctoken/\}/\\\}}

            envvalue=$(echo "$(printenv $envname)")
            envvalue=${envvalue//\//\\\/}

            echo "$token => $envname => \"$envvalue\""

            sedex="s/$enctoken/$envvalue/"
            sed -i -E "$sedex" "$filename"
        done
    fi
done
