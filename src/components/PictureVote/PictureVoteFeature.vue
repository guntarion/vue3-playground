<template>
    <h1>Vote this pics!</h1>
    <div>Total Voters: 12 out of 40</div>
    <div id="app">
        <PictureVote v-for="image in images" :key="image.src" :imageSrc="image.src" :currentUpVote="image.upVotes"
            :currentDownVote="image.downVotes" @update-upvote="updateUpVote" @update-downvote="updateDownVote">
        </PictureVote>
    </div>
</template>

<script>
import PictureVote from "./PictureVote.vue";

export default {
    name: "App",
    components: {
        PictureVote
    },
    data() {
        return {
            images: [
                { src: "https://cdn.pixabay.com/photo/2023/10/01/10/19/squirrel-8287202_1280.jpg", upVotes: 5, downVotes: 2 },
                { src: "https://cdn.pixabay.com/photo/2023/10/01/11/06/bird-8287254_1280.jpg", upVotes: 3, downVotes: 1 },
                { src: "https://cdn.pixabay.com/photo/2023/10/05/17/54/geese-8296524_1280.jpg", upVotes: 8, downVotes: 4 }
            ]
        };
    },
    methods: {
        updateUpVote(imageSrc) {
            const image = this.images.find(img => img.src === imageSrc);
            if (image) {
                image.upVotes++;
            }
        },
        updateDownVote(imageSrc) {
            const image = this.images.find(img => img.src === imageSrc);
            if (image) {
                image.downVotes--;
            }
        }
    }
};
</script>

<style>
h1 {
    text-align: center;
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
}

div.Total {
    text-align: center;
    font-size: 1.2em;
    margin-bottom: 40px;
    color: #666;
}

div#app {
    width: 80%;
    margin: 0 auto;
}
</style>
