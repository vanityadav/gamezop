const ringBuffer = (index: number, buffer: string[]): string =>
  buffer[index % buffer.length];

export default ringBuffer;
