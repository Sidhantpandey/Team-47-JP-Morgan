import { useState } from "react";
import { Star, ChevronRight, CheckCircle } from "lucide-react";

const questions = {
  language: [
    "Can your child speak in complete sentences?",
    "Does your child understand and follow simple instructions?",
    "Can your child express their needs verbally?",
  ],
  physical: [
    "Can your child walk steadily?",
    "Can your child run and jump?",
    "Can your child hold and use basic utensils?",
  ],
  social: [
    "Does your child play well with others?",
    "Can your child share toys?",
    "Does your child show empathy towards others?",
  ],
  motor: [
    "Can your child draw basic shapes?",
    "Can your child catch and throw a ball?",
    "Can your child use scissors safely?",
  ],
  cognitive: [
    "Can your child count to 10?",
    "Can your child recognize basic colors?",
    "Can your child solve simple puzzles?",
  ],
};

const categories = [
  { id: "language", name: "Language Development" },
  { id: "physical", name: "Physical Development" },
  { id: "social", name: "Social Skills" },
  { id: "motor", name: "Motor Skills" },
  { id: "cognitive", name: "Cognitive Development" },
];

export default function MilestoneQuiz({ childName, onComplete }) {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (question, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: answer,
    }));
  };

  const calculateCategoryScore = (category) => {
    const categoryQuestions = questions[category];
    let score = 0;
    categoryQuestions.forEach((question) => {
      if (answers[question] === "yes") score++;
    });
    return (score / categoryQuestions.length) * 100;
  };

  const getRecommendation = (score) => {
    if (score >= 80) return "Excellent progress! Keep up the great work!";
    if (score >= 60) return "Good progress. Consider some extra practice in weaker areas.";
    return "Additional support and practice recommended. Consider consulting with a specialist.";
  };

  const handleNext = () => {
    if (currentCategory < categories.length - 1) {
      setCurrentCategory(currentCategory + 1);
    } else {
      setShowResults(true);
      onComplete(answers);
    }
  };

  const currentCategoryId = categories[currentCategory].id;
  const currentQuestions = questions[currentCategoryId];

  if (showResults) {
    return (
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Quiz Complete!</h2>
          <p className="text-gray-600 mt-2">Here's how {childName} is doing:</p>
        </div>

        <div className="space-y-6">
          {categories.map((category) => {
            const score = calculateCategoryScore(category.id);
            return (
              <div key={category.id} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                  <span className="font-bold text-orange-500">{Math.round(score)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${score}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-3">{getRecommendation(score)}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 max-w-2xl w-full mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">Progress</span>
          <span className="text-sm font-medium text-orange-500">
            {currentCategory + 1} of {categories.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentCategory + 1) / categories.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Category Header */}
      <div className="text-center mb-8">
        <div className="inline-block bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full p-3 mb-4">
          <Star className="h-6 w-6 text-orange-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{categories[currentCategory].name}</h2>
        <p className="text-gray-600 mt-2">Please answer the following questions about {childName}'s development</p>
      </div>

      {/* Questions */}
      <div className="space-y-6 mb-8">
        {currentQuestions.map((question) => (
          <div key={question} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-6">
            <p className="text-gray-800 font-medium mb-4">{question}</p>
            <div className="flex gap-4">
              <button
                onClick={() => handleAnswer(question, "yes")}
                className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  answers[question] === "yes"
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-700 hover:bg-green-100"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswer(question, "no")}
                className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  answers[question] === "no"
                    ? "bg-red-500 text-white"
                    : "bg-white text-gray-700 hover:bg-red-100"
                }`}
              >
                No
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={!currentQuestions.every((q) => answers[q])}
          className={`group flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-lg transition-all duration-300 ${
            currentQuestions.every((q) => answers[q])
              ? "hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          <span>{currentCategory === categories.length - 1 ? "Complete" : "Next"}</span>
          <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
} 