// import { AssemblyAI } from "assemblyai";

// export async function POST(req) {
//   const client = new AssemblyAI({
//     apiKey: process.env.NEXT_SECRET_ASSEMBLY_AI_KEY
//   });

//   const FILE_URL = "https://assembly.ai/sports_injuries.mp3";
//   const data = {
//     audio: FILE_URL,
//   };

//   const run = async () => {
//     const transcript = await client.transcripts.transcribe(data);
//     console.log(transcript.text);
//   };
//   return run()
// }
