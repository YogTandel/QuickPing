import mogoose from "mongoose";

export const connctDB = async () => {
    try {
        const conn = await mogoose.connect(process.env.MONGO_URI);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`❌ MongoDB Connection Error: ${error}`);
    }
}