export const keyboardMarkup = {
  standart: 'standart',
  inline: 'inline',
}

export const buttonTypes = {
  classic: 'classic',
  url: 'url',
}

export const standartRestrictions = {
  VK: {
    name: 'Вконтакте',
    maxBtnCount: '40',
    maxBtnLength: '-',
    urlBtn: true,
  },
  WHATSAPP: {
    name: 'WhatsApp',
    maxBtnCount: '10',
    maxBtnLength: '20',
    urlBtn: false,
  },
  TELEGRAM: {
    name: 'Telegram',
    maxBtnCount: '-',
    maxBtnLength: '-',
    urlBtn: false,
  },
  SMS: {
    name: 'SMS',
    maxBtnCount: 0,
    maxBtnLength: '-',
    urlBtn: false,
  },
}

export const inlineRestrictions = {
  VK: {
    name: 'Вконтакте',
    maxBtnCount: '10',
    maxBtnLength: '-',
    urlBtn: true,
  },
  WHATSAPP: {
    name: 'WhatsApp',
    maxBtnCount: '3',
    maxBtnLength: '20',
    urlBtn: true,
  },
  TELEGRAM: {
    name: 'Telegram',
    maxBtnCount: '-',
    maxBtnLength: '64',
    urlBtn: true,
  },
  SMS: {
    name: 'SMS',
    maxBtnCount: 0,
    maxBtnLength: '-',
    urlBtn: false,
  },
}
