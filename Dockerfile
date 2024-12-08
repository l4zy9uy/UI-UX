# Base image with JDK and Android SDK tools
FROM ubuntu:22.04

# Set environment variables
ENV ANDROID_HOME=/opt/android-sdk \
    PATH=$PATH:/opt/android-sdk/platform-tools:/opt/android-sdk/tools:/opt/android-sdk/tools/bin

# Install required dependencies
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    unzip \
    openjdk-11-jdk \
    libgl1-mesa-dev \
    lib32z1 \
    lib32stdc++6 \
    lib32gcc1 \
    lib32ncurses5 \
    lib32gomp1 \
    libpulse0 \
    libc6-i386 \
    git \
    && apt-get clean

# Download and install Android SDK
RUN mkdir -p $ANDROID_HOME && \
    wget -q https://dl.google.com/android/repository/commandlinetools-linux-8512546_latest.zip -O /tmp/sdk-tools.zip && \
    unzip -q /tmp/sdk-tools.zip -d $ANDROID_HOME/cmdline-tools && \
    rm /tmp/sdk-tools.zip && \
    mv $ANDROID_HOME/cmdline-tools $ANDROID_HOME/cmdline-tools/latest

# Accept licenses and install platform tools, build tools, and an emulator system image
RUN yes | sdkmanager --licenses && \
    sdkmanager --install "platform-tools" "build-tools;34.0.0" "platforms;android-34" "system-images;android-30;google_apis;x86_64" "emulator"

# Set up and start an Android emulator
RUN echo "no" | avdmanager create avd -n test -k "system-images;android-30;google_apis;x86_64" --force && \
    mkdir -p /root/.android && \
    touch /root/.android/repositories.cfg

# Expose necessary ports for ADB
EXPOSE 5554 5555

# Start the emulator
CMD emulator -avd test -no-snapshot -no-accel -gpu swiftshader