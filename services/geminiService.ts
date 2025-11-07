
import { GoogleGenAI, Type } from "@google/genai";
import { PlaylistIdea } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development and should not be hit in production
  console.warn("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generatePlaylistIdea = async (): Promise<PlaylistIdea | null> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate a creative and unique playlist idea. Provide a catchy title and a short, compelling description for it.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: {
              type: Type.STRING,
              description: "A creative and catchy title for the playlist.",
            },
            description: {
              type: Type.STRING,
              description: "A short, compelling description of the playlist's vibe or theme.",
            },
          },
          required: ["title", "description"],
        },
      },
    });

    const jsonString = response.text.trim();
    const parsedJson = JSON.parse(jsonString);

    if (parsedJson.title && parsedJson.description) {
      return parsedJson as PlaylistIdea;
    } else {
      console.error("Generated JSON is missing required fields.");
      return null;
    }

  } catch (error) {
    console.error("Error generating playlist idea:", error);
    return null;
  }
};
