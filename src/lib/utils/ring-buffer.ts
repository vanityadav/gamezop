const ringBuffer = <T extends string | Game>(index: number, buffer: T[]): T =>
  buffer[index % buffer.length];

export default ringBuffer;
