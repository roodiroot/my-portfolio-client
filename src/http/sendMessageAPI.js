import { $host } from '.';

export const sendMessageTelegramBot = async (text) => {
  const response = await $host.get(`/api/send-feedback-form?text=${text}`);
  return response;
};
