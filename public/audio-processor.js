class AudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.bufferSize = 4096;
    this.buffer = new Float32Array(this.bufferSize);
    this.bufferIndex = 0;
  }

  process(inputs) {
    const input = inputs[0];
    if (input.length > 0) {
      const inputChannel = input[0];

      for (let i = 0; i < inputChannel.length; i++) {
        this.buffer[this.bufferIndex++] = inputChannel[i];

        if (this.bufferIndex === this.bufferSize) {
          // Send the buffer to the main thread
          this.port.postMessage(this.buffer.slice());
          this.bufferIndex = 0;
        }
      }
    }
    return true;
  }
}

registerProcessor("audio-processor", AudioProcessor);
