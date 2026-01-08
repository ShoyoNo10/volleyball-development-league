import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error("MONGODB_URI is not defined");
}

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const clientPromise: Promise<MongoClient> =
  global._mongoClientPromise ??
  (() => {
    const client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
    return global._mongoClientPromise;
  })();

export default clientPromise;