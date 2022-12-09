import mongoose from "mongoose"
interface Subject {
    code: string,
    subject: string,
    unit: number,
    created: number
}
const subject = new mongoose.Schema<Subject>({
    code: { type: String, required: true },
    subject: { type: String, required: true },
    unit: { type: Number, required: true },
    created: { type: Number, required: true },
})
if (mongoose.models['subject'] != null) {
    mongoose.deleteModel('subject')
}
export default mongoose.model<Subject>('subject', subject)