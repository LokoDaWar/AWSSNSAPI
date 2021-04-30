import AWS from "aws-sdk";

interface IRequest {
  secret: string;
  message: string;
  cell: string;
}

class SendSMSUseCase {
  constructor() {
    const credentials = {
      id: process.env.KEY_AMAZON,
      secret: process.env.SECRET_KEY_AMAZON,
    };
    AWS.config.update({
      region: "us-east-1",
      accessKeyId: credentials.id,
      secretAccessKey: credentials.secret,
    });
  }

  async execute({ secret, message, cell }: IRequest): Promise<string> {
    const params = {
      Message: message,
      PhoneNumber: `+55${cell}`,
    };
    const publishTextPromise = new AWS.SNS().publish(params).promise();
    const sms = await publishTextPromise
      .then((data) => {
        return `MessageID is ${data.MessageId}`;
      })
      .catch((err) => {
        return err;
      });

    return sms;
  }
}

export { SendSMSUseCase };
