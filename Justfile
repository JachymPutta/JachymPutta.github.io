#!/usr/bin/env just --justfile
set quiet := true
set unstable := true

default:
    just --list

[doc('Run live-server and tailwind compiler')]
run-live:
    #!/usr/bin/env bash
    live-server &
    LS_PID=$!

    tailwindcss -i styles/style.css -o styles/style_out.css -w &
    TW_PID=$!

    trap 'kill $LS_PID; exit 0' SIGINT
    
    echo "Server started. Press Ctrl+C to interrupt."
    
    while true; do
        sleep 1
    done


