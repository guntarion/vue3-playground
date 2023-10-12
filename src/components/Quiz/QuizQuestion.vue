<!-- QuizQuestion.vue -->

<template>
    <h1>Quiz App</h1>
    <div>
        <p>{{ question.question }}</p>

        <div v-for="(option, index) in question.options" :key="index">
            <input type="radio" :value="index" v-model="selectedAnswer" @change="handleAnswerChange">
            {{ option }}
        </div>
    </div>
</template>

<script>
export default {
    name: "QuizQuestion",  // Update the name here
    props: ["question"],
    data() {
        return {
            selectedAnswer: null
        };
    },
    methods: {
        handleAnswerChange() {
            this.$emit("answer-selected", this.selectedAnswer);
        }
    }
};
</script>
