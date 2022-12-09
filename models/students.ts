import mongoose from 'mongoose'
interface Students {
    id: string,
    fname: string,
    mname: string,
    lname: string,
    bday: string,
    section: string,
    year: string,
    subjects: {
        id: string,
        code: string,
        grade: number
    }[],
    created: number
}
const student = new mongoose.Schema<Students>({
    id: { type: String, required: true },
    section: { type: String, required: true },
    year: { type: String, required: true },
    subjects: [{
        id: String,
        code: String,
        grade: Number
    }],
    created: { type: Number, required: true }
})
if (mongoose.models['student'] != null) {
    mongoose.deleteModel('student')
}
export default mongoose.model<Students>('student', student)