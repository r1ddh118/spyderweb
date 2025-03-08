// syderweb/app/Quiz/page.tsx
import { useState } from 'react';
import axios from 'axios';

export default function Quiz() {
    const [answers, setAnswers] = useState({});
    const [roadmap, setRoadmap] = useState(null);

    const handleSubmit = async () => {
        const response = await axios.post('/api/generate-roadmap', { answers });
        setRoadmap(response.data);
    };

    return (
        <div>
            <h2 className="text-xl font-semibold">Take a Quiz</h2>
            {/* Quiz Questions */}
            <button className="btn" onClick={handleSubmit}>Submit</button>
            {roadmap && <p>{roadmap}</p>}
        </div>
    );
}
