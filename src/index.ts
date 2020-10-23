interface Payload {
  name: string;
}

export const Greeter = (payload: Payload) => `Hello ${payload.name}`;
