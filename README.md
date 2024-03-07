﻿# Real-time-KTV
## Overview

This project aims to develop a React-based application that facilitates real-time audio recording and playback. The core functionality allows users to start and stop audio recording with a button click and automatically downloads the recorded audio upon completion. Additionally, real-time playback of the recording is implemented to enable immediate audio feedback.

## Challenges Encountered

During the development and testing phases, several challenges were encountered, particularly concerning audio quality during real-time playback:

    Audio Distortion: Users experienced significant audio distortion during real-time playback, described as severe shaking or sounding as if speaking underwater.
    Feedback Loops: Without the use of headphones, feedback loops caused by the microphone picking up speaker output led to degraded audio quality.
    Buffer Size Mismanagement: Improper buffer size configuration in the Web Audio API contributed to audio quality issues, including distortion and latency.
