<template>
    <div>
        <img :src="imageSrc" alt="Image for Voting" width="300" />

        <div>
            <button :disabled="userVote >= 2" @click="upvote">Upvote</button> Total: {{ currentUpVote }} 
          <button :disabled="userVote <= -2" @click="downvote">Downvote</button> Total: {{ currentDownVote }}
        </div>

        <div>
            <textarea :disabled="commentSubmitted" v-model="comment" placeholder="Add a comment"></textarea>
            <button @click="toggleCommentMode">{{ commentButtonLabel }}</button>
        </div>

        <div>
            <p>Votes: {{ userVote }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['imageSrc', 'currentUpVote', 'currentDownVote'],
    data() {
        return {
            userVote: 0, 
            comment: "",
            commentSubmitted: false
        };
    },
    
    computed: {
        commentButtonLabel() {
            return this.commentSubmitted ? 'Edit' : 'Submit';
        }
    },

    methods: {
        upvote() {
            if (this.userVote < 2) {
                this.userVote++;
                this.$emit('update-upvote', this.imageSrc);
            }
        },
        downvote() {
            if (this.userVote > -2) {
                this.userVote--;
                this.$emit('update-downvote', this.imageSrc);
            }
        },
        toggleCommentMode() {
            if (this.commentSubmitted) {
                this.commentSubmitted = false;
            } else {
                this.commentSubmitted = true;
            }
        }
    }
};
</script>

<style scoped>
div {
    border: 1px solid #e1e1e1;
    padding: 20px;
    margin: 20px 0;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

img {
    display: block;
    margin: 0 auto;
    border-radius: 5px;
    margin-bottom: 20px;
}

button {
    background-color: #007BFF;
    border: none;
    color: white;
    padding: 10px 20px;
    margin-right: 10px;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

button:hover:not(:disabled) {
    background-color: #0056b3;
}

textarea {
    width: 100%;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
}

p {
    font-weight: bold;
}
</style>
