# Real-time-KTV
## Target
In conducting a thorough market analysis of contemporary singing applications, it has become apparent that a notable gap exists in their support for multi-participant, real-time interactions. The envisioned scenario entails accommodating up to five individuals in a single virtual room, where participants have the flexibility to upload various versions of musical tracks to a centralized server. Subsequently, users can engage in a collective singing experience, utilizing their smartphones or alternative devices as microphones.

This architecture fundamentally relies on a client-server model, with the server acting as the central hub for track management and audio synchronization, while each participant functions as a client, transmitting their vocal input via their device. Given the varying nature of devices and platforms, incorporating Bluetooth connectivity is contemplated to ensure a seamless integration of disparate hardware. Nonetheless, dedicating sufficient time to address compatibility across diverse platforms and systems poses a significant challenge.

Alternative methodologies, such as mDNS (Multicast DNS), have been explored to facilitate device discovery and networking within local environments. Yet, the paramount concern that has emerged from preliminary investigations is the assurance of audio quality. Ensuring a high-fidelity, synchronized playback experience across multiple clients, each with potentially different hardware capabilities and network conditions, is crucial to the project's success.

Upon securing employment, I intend to continue dedicating efforts to this compelling project. The objective is to surmount the identified technical challenges, with a particular focus on enhancing audio quality and system interoperability, thereby realizing a robust solution that supports multi-user, real-time singing experiences. This endeavor represents not only a significant technical undertaking but also an opportunity to enrich the social and interactive dimensions of music engagement through technology.
![image](https://github.com/Lanceart/Real-time-KTV/assets/62589604/1e02ca2f-095f-478b-a331-c34933316a1a)

## Finished

This project aims to develop a React-based application that facilitates real-time audio recording and playback. The core functionality allows users to start and stop audio recording with a button click and automatically downloads the recorded audio upon completion. Additionally, real-time playback of the recording is implemented to enable immediate audio feedback.

## Challenges Encountered

During the development and testing phases, several challenges were encountered, particularly concerning audio quality during real-time playback:
- Audio Distortion: Users experienced significant audio distortion during real-time playback, described as severe shaking or sounding as if speaking underwater.
- Feedback Loops: Without the use of headphones, feedback loops caused by the microphone picking up speaker output led to degraded audio quality.
- Buffer Size Mismanagement: Improper buffer size configuration in the Web Audio API contributed to audio quality issues, including distortion and latency.
