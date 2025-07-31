import { config } from "dotenv"

// Load environment variables from .env.local if present
config({ path: ".env.local" })

/** API token loaded from `.env.local` */
export const APIToken = process.env.TOKEN || ""
