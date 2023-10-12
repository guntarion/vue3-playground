<!-- QuizMain.vue -->

<template>
  <div>
    <h2>Technology Quiz</h2>

  <QuizQuestion
    v-if="questions[currentQuestionIndex]"
    :question="questions[currentQuestionIndex]"
    @answer-selected="handleAnswerSelected"
  ></QuizQuestion>

    <button @click="nextQuestion" :disabled="quizCompleted">Next</button>

    <div v-if="quizCompleted">
      Your score is: {{ score }} out of {{ questions.length }}
    </div>
  </div>
</template>

<script>
import QuizQuestion from "./QuizQuestion.vue";

export default {
  components: {
    QuizQuestion
  },
  data() {
    return {
      currentQuestionIndex: 0,
      score: 0,
      questions: [
            {
                question: "Which programming language is known as the web's scripting language?",
                options: ["Python", "Java", "JavaScript", "C#"],
                correctAnswer: 2
            },
            {
                question: "Which of these is a popular version control system?",
                options: ["Slack", "Git", "Trello", "Zoom"],
                correctAnswer: 1
            },
            {
                question: "Which framework is associated with building mobile apps?",
                options: ["Vue.js", "Bootstrap", "React Native", "Tailwind CSS"],
                correctAnswer: 2
            },
            {
                question: "Which database is SQL-based?",
                options: ["MongoDB", "SQLite", "Redis", "CouchDB"],
                correctAnswer: 1
            }
        ]

    };
  },
  computed: {
    quizCompleted() {
      return this.currentQuestionIndex >= this.questions.length;
    }
  },
  methods: {
    handleAnswerSelected(answerIndex) {
      if (answerIndex === this.questions[this.currentQuestionIndex].correctAnswer) {
        this.score++;
      }
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else if (this.currentQuestionIndex === this.questions.length - 1) {
        // You can also trigger other actions here like displaying a modal
        // or routing the user to a different page.
        this.currentQuestionIndex++;
      }
    }
  }
};
</script>
