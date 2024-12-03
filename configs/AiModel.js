const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Write a script to generate a 30 seconds video on topic: historical story along with Ai image prompt in realistic format for each scene and give me result in JSON format with imagePrompt and contentText as fields, No plain text.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "imagePrompt": "A realistic painting of a bustling medieval marketplace, vibrant colors, detailed clothing, people bartering goods, cobblestone streets, period-accurate architecture, cinematic lighting, 8k resolution",\n    "contentText": "The year is 1347.  The Black Death’s shadow looms large over Europe.  In the heart of Florence, life, though precarious, continues."\n  },\n  {\n    "imagePrompt": "A realistic portrait of a young woman, pale complexion, worried expression, dressed in simple medieval clothing, slightly gaunt, looking anxiously out a window, soft natural light, 8k resolution, hyperrealistic detail",\n    "contentText": "Isabella, a weaver\'s daughter, watches as a cart carrying the dead passes by."\n  },\n  {\n    "imagePrompt": "A realistic depiction of a plague doctor, masked, robed, examining a patient in a dimly lit room, detailed medical tools, candlelight, somber atmosphere, 8k resolution, cinematic lighting",\n    "contentText": "Fear grips the city. The plague doctor\'s visits bring little comfort."\n  },\n  {\n    "imagePrompt": "Realistic image of a  group of people praying in a dimly lit church, medieval architecture, stained glass windows, candles, expressions of grief and hope, dramatic lighting, 8k resolution",\n    "contentText": "Isabella and her family huddle in prayer, seeking solace in their faith."\n  },\n  {\n    "imagePrompt": "Realistic illustration of  a field of wildflowers, a bright sun, a feeling of hope, lush green grass, vibrant colors, 8k resolution, hyperrealistic detail",\n    "contentText": "Months later, the worst has passed.  Life begins to return to the city, albeit slowly."\n  },\n  {\n    "imagePrompt": "Realistic painting of Isabella smiling gently, now healthier and looking out over the field of wildflowers, sunlight on her face, a sense of resilience and hope, 8k resolution",\n    "contentText": "Isabella finds hope in the new blooms of spring, a testament to the resilience of the human spirit."\n  }\n]\n```\n',
        },
      ],
    },
  ],
});
