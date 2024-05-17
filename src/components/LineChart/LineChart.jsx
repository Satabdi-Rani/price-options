// import React from 'react';
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const data = [
        { "studentId": 1, "name": "Alice", "mathMarks": 85, "physicsMarks": 78, "chemistryMarks": 90 },
        { "studentId": 2, "name": "Bob", "mathMarks": 78, "physicsMarks": 80, "chemistryMarks": 85 },
        { "studentId": 3, "name": "Charlie", "mathMarks": 92, "physicsMarks": 88, "chemistryMarks": 92 },
        { "studentId": 4, "name": "David", "mathMarks": 74, "physicsMarks": 75, "chemistryMarks": 78 },
        { "studentId": 5, "name": "Ella", "mathMarks": 88, "physicsMarks": 82, "chemistryMarks": 87 },
        { "studentId": 6, "name": "Fiona", "mathMarks": 95, "physicsMarks": 90, "chemistryMarks": 94 },
        { "studentId": 7, "name": "George", "mathMarks": 67, "physicsMarks": 72, "chemistryMarks": 65 },
        { "studentId": 8, "name": "Hannah", "mathMarks": 82, "physicsMarks": 85, "chemistryMarks": 80 },
        { "studentId": 9, "name": "Ian", "mathMarks": 90, "physicsMarks": 92, "chemistryMarks": 88 },
        { "studentId": 10, "name": "Jack", "mathMarks": 76, "physicsMarks": 70, "chemistryMarks": 75 }
      ]; 

    return (
        <div>
            <LChart width={500} height={400} data={data}>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey=""></YAxis>
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey="physicsMarks" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;