import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:ZvOGr8UoAEX6@ep-frosty-pond-a5fqynu6.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
});
