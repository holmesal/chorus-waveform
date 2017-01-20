

# audiowaveform

https://github.com/bbc/audiowaveform

Get waveform data from an episode at 100 pixels/sec:

`audiowaveform -i 99pi.mp3 -o test.dat -b 8 --pixels-per-second 100`

Render a png:

`audiowaveform -i test.dat -o test.png --pixels-per-second 100 -w 2000 -h 200`

